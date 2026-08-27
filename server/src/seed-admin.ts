import mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables from server/.env
dotenv.config({ path: path.join(__dirname, '../.env') });

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/firstchoice';

const UserSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true, lowercase: true },
  passwordHash: String,
  phone: String,
  role: { type: String, enum: ['admin', 'patient'], default: 'patient' },
  isVerified: { type: Boolean, default: true },
  emailVerificationToken: String,
  resetPasswordToken: String,
  resetPasswordExpiry: Date,
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

async function seedUsers() {
  console.log(`Connecting to MongoDB Atlas Live DB...`);
  await mongoose.connect(mongoUri);
  console.log('Connected successfully!');

  // 1. Seed Admin User
  const adminEmail = 'admin@firstchoice.qa';
  const existingAdmin = await User.findOne({ email: adminEmail });

  if (existingAdmin) {
    console.log(`\n✔ Admin user already exists: ${adminEmail}`);
  } else {
    const rawAdminPass = 'Admin@FirstChoice2026!';
    const passwordHash = await bcrypt.hash(rawAdminPass, 12);

    const admin = new User({
      fullName: 'System Administrator',
      email: adminEmail,
      passwordHash,
      phone: '+974 4140 2630',
      role: 'admin',
      isVerified: true,
    });

    await admin.save();
    console.log(`\n✔ Successfully created Admin Account:`);
    console.log(`  • Email:    ${adminEmail}`);
    console.log(`  • Password: ${rawAdminPass}`);
    console.log(`  • Role:     admin`);
  }

  // 2. Seed Normal Patient User
  const patientEmail = 'patient@firstchoice.qa';
  const existingPatient = await User.findOne({ email: patientEmail });

  if (existingPatient) {
    console.log(`\n✔ Test Patient user already exists: ${patientEmail}`);
  } else {
    const rawPatientPass = 'Patient@FirstChoice2026!';
    const passwordHash = await bcrypt.hash(rawPatientPass, 12);

    const patient = new User({
      fullName: 'Ahmed Al-Mansoori (Test Patient)',
      email: patientEmail,
      passwordHash,
      phone: '+974 5000 2334',
      role: 'patient',
      isVerified: true,
    });

    await patient.save();
    console.log(`\n✔ Successfully created Test Patient Account:`);
    console.log(`  • Email:    ${patientEmail}`);
    console.log(`  • Password: ${rawPatientPass}`);
    console.log(`  • Role:     patient`);
  }

  await mongoose.disconnect();
  console.log('\nMongoDB connection closed.');
}

seedUsers().catch((err) => {
  console.error('Error seeding users:', err);
  process.exit(1);
});
