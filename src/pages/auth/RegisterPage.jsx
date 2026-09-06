import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const RegisterPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role] = useState('patient');

  const [error, setError] = useState('');
  const [registeredEmail, setRegisteredEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    if (e) e.preventDefault();
    setError('');

    if (!fullName.trim() || !email.trim() || !phone.trim() || !password) {
      setError('Please fill in all required fields');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      setLoading(true);
      await register({ fullName, email, phone, password, role });
      setRegisteredEmail(email);
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center cs_gray4_bg py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card border-0 shadow-lg cs_radius_20 overflow-hidden">
              <div className="card-header text-center cs_secondary_bg p-4 border-0">
                <Link to="/">
                  <img src="/assets/img/logofull.png" alt="First Choice Medical Services" style={{ maxHeight: '60px' }} />
                </Link>
                <h3 className="cs_fs_24 cs_semibold text-white mt-3 mb-0">Create Your Account</h3>
                <p className="cs_fs_14 text-white-50 mb-0">Home Healthcare Services in Qatar</p>
              </div>

              <div className="card-body p-4 p-sm-5 bg-white">
                {registeredEmail ? (
                  <div className="text-center py-3">
                    <div className="cs_accent_bg text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '70px', height: '70px' }}>
                      <i className="fa-solid fa-envelope-circle-check fa-2x"></i>
                    </div>
                    <h3 className="cs_fs_24 cs_semibold mb-2">Check Your Email</h3>
                    <p className="text-muted cs_fs_15 mb-4">
                      We have sent a verification email to <strong>{registeredEmail}</strong>.<br />
                      Please click the verification link in the email to verify your account before logging in.
                    </p>
                    <div className="alert alert-warning cs_radius_10 mb-4 cs_fs_14" role="alert">
                      <i className="fa-solid fa-triangle-exclamation me-2"></i>
                      Didn’t receive the email? Check your spam folder or request a resend from the login page.
                    </div>
                    <Link
                      to="/login"
                      className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_10 w-100 justify-content-center py-3 text-decoration-none"
                    >
                      Proceed to Sign In
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleRegister}>
                    {error && (
                      <div className="alert alert-danger text-center cs_radius_10 mb-4" role="alert">
                        <i className="fa-solid fa-circle-exclamation me-2"></i>
                        {error}
                      </div>
                    )}

                    <div className="mb-3">
                      <label className="form-label cs_semibold cs_primary_color">Full Name *</label>
                      <input
                        type="text"
                        className="form-control cs_gray2_bg border-0 cs_radius_10"
                        placeholder="e.g. Ahmed Al-Mansoori"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label cs_semibold cs_primary_color">Email Address *</label>
                        <input
                          type="email"
                          className="form-control cs_gray2_bg border-0 cs_radius_10"
                          placeholder="name@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label cs_semibold cs_primary_color">Qatar Phone Number *</label>
                        <input
                          type="text"
                          className="form-control cs_gray2_bg border-0 cs_radius_10"
                          placeholder="+974 XXXX XXXX"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label cs_semibold cs_primary_color">Password *</label>
                        <input
                          type="password"
                          className="form-control cs_gray2_bg border-0 cs_radius_10"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label cs_semibold cs_primary_color">Confirm Password *</label>
                        <input
                          type="password"
                          className="form-control cs_gray2_bg border-0 cs_radius_10"
                          placeholder="••••••••"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_10 w-100 justify-content-center py-3 mt-2"
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Registering Account...
                        </>
                      ) : (
                        <span>Register Account</span>
                      )}
                    </button>

                    <div className="text-center mt-4 pt-2 border-top">
                      <p className="cs_fs_15 text-muted mb-0">
                        Already registered?{' '}
                        <Link to="/login" className="cs_accent_color fw-bold text-decoration-none">
                          Sign In
                        </Link>
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
