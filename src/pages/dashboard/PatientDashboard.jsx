import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const SERVICES_DATA = [
  { id: 'home-nursing', title: 'Home Nursing Care', duration: '60 min', icon: 'fa-user-nurse', desc: 'Professional clinical nursing care at home including wound dressings, IV therapies, and monitoring.' },
  { id: 'elderly-care', title: 'Elderly Care', duration: '90 min', icon: 'fa-hands-holding-child', desc: 'Compassionate daily living support, mobility assistance, and companionship for senior care.' },
  { id: 'postnatal-care', title: 'Postnatal Care', duration: '60 min', icon: 'fa-baby-carriage', desc: 'Dedicated postpartum mother & newborn care, lactation assistance, and healing guidance.' },
  { id: 'physiotherapy', title: 'Physiotherapy', duration: '45 min', icon: 'fa-crutch', desc: 'Targeted physical therapy, rehabilitation exercises, and pain management treatments.' },
];

const PatientDashboard = () => {
  const { user, logout, fetchWithAuth, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const getInitialTab = () => {
    if (location.pathname.includes('/book')) return 'book';
    if (location.pathname.includes('/waitlist')) return 'waitlist';
    if (location.pathname.includes('/profile')) return 'profile';
    return 'appointments';
  };

  const [activeTab, setActiveTab] = useState(getInitialTab());

  // My Appointments state
  const [appointments, setAppointments] = useState([]);
  const [loadingAppts, setLoadingAppts] = useState(false);
  const [cancelModalAppt, setCancelModalAppt] = useState(null);
  const [rescheduleModalAppt, setRescheduleModalAppt] = useState(null);
  const [newRescheduleDate, setNewRescheduleDate] = useState('');
  const [newRescheduleTime, setNewRescheduleTime] = useState('');

  // Booking Wizard State (Steps 1 to 4)
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedService, setSelectedService] = useState('home-nursing');
  
  // Custom Calendar state
  const [selectedDateStr, setSelectedDateStr] = useState(new Date().toISOString().split('T')[0]);
  const [slotDetails, setSlotDetails] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [loadingSlots, setLoadingSlots] = useState(false);

  // Intake Form State
  const [intakeSchema, setIntakeSchema] = useState([]);
  const [intakeResponses, setIntakeResponses] = useState({});
  const [notes, setNotes] = useState('');
  const [createdAppointment, setCreatedAppointment] = useState(null);

  // Waitlist State
  const [myWaitlist, setMyWaitlist] = useState([]);
  const [waitlistService, setWaitlistService] = useState('home-nursing');
  const [waitlistDate, setWaitlistDate] = useState('');

  // Profile Form state
  const [fullName, setFullName] = useState(user?.fullName || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [profileMsg, setProfileMsg] = useState('');
  const [profileError, setProfileError] = useState('');
  const [profileLoading, setProfileLoading] = useState(false);

  useEffect(() => {
    setActiveTab(getInitialTab());
  }, [location.pathname]);

  // Load appointments
  const loadAppointments = async () => {
    setLoadingAppts(true);
    try {
      const res = await fetchWithAuth('/api/appointments/my');
      const data = await res.json();
      if (data.success) setAppointments(data.data || []);
    } catch (err) {
      console.error('Failed to load appointments:', err);
    } finally {
      setLoadingAppts(false);
    }
  };

  // Load waitlist entries
  const loadWaitlist = async () => {
    try {
      const res = await fetchWithAuth('/api/waitlist/my');
      const data = await res.json();
      if (data.success) setMyWaitlist(data.data || []);
    } catch (err) {
      console.error('Failed to load waitlist:', err);
    }
  };

  useEffect(() => {
    if (activeTab === 'appointments') loadAppointments();
    if (activeTab === 'waitlist') loadWaitlist();
  }, [activeTab]);

  // Load slot capacity details when in Step 2
  useEffect(() => {
    if (activeTab === 'book' && bookingStep === 2 && selectedDateStr) {
      const fetchSlots = async () => {
        setLoadingSlots(true);
        try {
          const res = await fetch(`/api/appointments/availability?date=${selectedDateStr}&service=${selectedService}`);
          const data = await res.json();
          if (data.success) {
            setSlotDetails(data.data.slots || []);
          }
        } catch (e) {
          console.error('Failed to fetch availability:', e);
        } finally {
          setLoadingSlots(false);
        }
      };
      fetchSlots();
    }
  }, [activeTab, bookingStep, selectedDateStr, selectedService]);

  // Load Intake Form Schema when moving to Step 3
  useEffect(() => {
    if (activeTab === 'book' && bookingStep === 3) {
      const fetchIntake = async () => {
        try {
          const res = await fetch(`/api/intake-forms/${selectedService}`);
          const data = await res.json();
          if (data.success && data.data?.fields) {
            setIntakeSchema(data.data.fields);
          }
        } catch (e) {
          console.error('Failed to fetch intake form:', e);
        }
      };
      fetchIntake();
    }
  }, [activeTab, bookingStep, selectedService]);

  // Patient Reschedule
  const handlePatientReschedule = async () => {
    if (!rescheduleModalAppt) return;
    try {
      const res = await fetchWithAuth(`/api/appointments/${rescheduleModalAppt._id}/patient-reschedule`, {
        method: 'PATCH',
        body: JSON.stringify({ newDate: newRescheduleDate, newTime: newRescheduleTime }),
      });
      const data = await res.json();
      if (data.success) {
        setRescheduleModalAppt(null);
        loadAppointments();
        alert('Appointment rescheduled successfully!');
      } else {
        alert(data.message || 'Reschedule failed');
      }
    } catch (err) {
      alert('Failed to reschedule');
    }
  };

  // Patient Cancel
  const handleCancelAppointment = async (id) => {
    try {
      const res = await fetchWithAuth(`/api/appointments/${id}/cancel`, { method: 'PATCH' });
      const data = await res.json();
      if (data.success) {
        loadAppointments();
        alert(data.message);
      }
    } catch (err) {
      alert('Failed to cancel appointment');
    }
  };

  // Submit Booking
  const handleCreateAppointment = async () => {
    try {
      const res = await fetchWithAuth('/api/appointments', {
        method: 'POST',
        body: JSON.stringify({
          serviceType: selectedService,
          preferredDate: selectedDateStr,
          preferredTime: selectedTimeSlot,
          intakeResponses,
          notes,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setCreatedAppointment(data.data);
        setBookingStep(4);
      } else {
        alert(data.message || 'Failed to create booking');
      }
    } catch (err) {
      alert('Error creating appointment');
    }
  };

  // Join Waitlist
  const handleJoinWaitlist = async (e) => {
    e.preventDefault();
    try {
      const res = await fetchWithAuth('/api/waitlist', {
        method: 'POST',
        body: JSON.stringify({ service: waitlistService, preferredDate: waitlistDate }),
      });
      const data = await res.json();
      if (data.success) {
        loadWaitlist();
        alert('Added to waitlist!');
      }
    } catch (err) {
      alert('Failed to join waitlist');
    }
  };

  // Generate .ics Calendar File Client-side
  const downloadICS = (appt) => {
    const d = new Date(appt.rescheduledDate || appt.preferredDate);
    const startStr = d.toISOString().replace(/-|:|\.\d\d\d/g, '');
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//First Choice Medical Services//EN
BEGIN:VEVENT
SUMMARY:First Choice - ${appt.serviceType.replace('-', ' ')}
DESCRIPTION:Medical Service Appointment at First Choice Medical Services.
DTSTART:${startStr}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `appointment_${appt._id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Update Patient Profile
  const handleUpdateProfile = async (e) => {
    if (e) e.preventDefault();
    setProfileMsg('');
    setProfileError('');
    if (newPassword && newPassword !== confirmNewPassword) {
      setProfileError('New passwords do not match');
      return;
    }
    try {
      setProfileLoading(true);
      const res = await fetchWithAuth('/api/auth/profile', {
        method: 'PATCH',
        body: JSON.stringify({
          fullName,
          phone,
          ...(newPassword ? { currentPassword, newPassword } : {}),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setUser(data.data);
        setProfileMsg('Profile updated successfully!');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
      } else {
        setProfileError(data.message || 'Failed to update profile');
      }
    } catch (err) {
      setProfileError('Error updating profile');
    } finally {
      setProfileLoading(false);
    }
  };

  const notifiedEntry = myWaitlist.find((w) => w.status === 'notified');

  return (
    <div className="d-flex min-vh-100 bg-light">
      {/* Sidebar */}
      <div className="bg-dark text-white d-flex flex-column" style={{ width: '260px', flexShrink: 0, minHeight: '100vh' }}>
        <div className="p-4 border-bottom border-secondary text-center">
          <Link to="/">
            <img src="/assets/img/logofull.png" alt="First Choice" style={{ maxHeight: '48px' }} />
          </Link>
          <div className="mt-2 text-success fw-bold">Patient Portal</div>
        </div>

        <div className="p-3 flex-grow-1">
          <ul className="nav nav-pills flex-column gap-2">
            <li className="nav-item">
              <button
                className={`nav-link text-start w-100 py-3 px-3 fs-6 d-flex align-items-center gap-3 ${activeTab === 'book' ? 'bg-success text-white fw-bold' : 'text-white-50'}`}
                onClick={() => { setActiveTab('book'); navigate('/dashboard/patient/book'); setBookingStep(1); }}
              >
                <i className="fa-solid fa-calendar-plus"></i>
                <span>Book Appointment</span>
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link text-start w-100 py-3 px-3 fs-6 d-flex align-items-center gap-3 ${activeTab === 'appointments' ? 'bg-success text-white fw-bold' : 'text-white-50'}`}
                onClick={() => { setActiveTab('appointments'); navigate('/dashboard/patient/appointments'); }}
              >
                <i className="fa-solid fa-clock-rotate-left"></i>
                <span>My Appointments</span>
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link text-start w-100 py-3 px-3 fs-6 d-flex align-items-center gap-3 ${activeTab === 'waitlist' ? 'bg-success text-white fw-bold' : 'text-white-50'}`}
                onClick={() => { setActiveTab('waitlist'); navigate('/dashboard/patient/waitlist'); }}
              >
                <i className="fa-solid fa-hourglass-half"></i>
                <span>Waitlist & Notifications</span>
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link text-start w-100 py-3 px-3 fs-6 d-flex align-items-center gap-3 ${activeTab === 'profile' ? 'bg-success text-white fw-bold' : 'text-white-50'}`}
                onClick={() => { setActiveTab('profile'); navigate('/dashboard/patient/profile'); }}
              >
                <i className="fa-solid fa-user-gear"></i>
                <span>My Profile</span>
              </button>
            </li>
          </ul>
        </div>

        <div className="p-3 border-top border-secondary">
          <button onClick={logout} className="btn btn-outline-danger w-100">Sign Out</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4 p-md-5 overflow-auto">
        {/* Booking Restriction Alert */}
        {user?.bookingRestricted && (
          <div className="alert alert-danger d-flex align-items-center mb-4">
            <i className="fa-solid fa-triangle-exclamation fs-3 me-3"></i>
            <div>
              <strong>Account Restricted from Booking:</strong> You have accumulated multiple late cancellations or no-shows. New booking creations are currently blocked. Please contact support.
            </div>
          </div>
        )}

        {/* Notified Waitlist Banner */}
        {notifiedEntry && (
          <div className="alert alert-warning border-warning shadow-sm d-flex justify-content-between align-items-center mb-4">
            <div>
              <h6 className="fw-bold mb-1"><i className="fa-solid fa-bell me-2"></i> Waitlist Slot Available!</h6>
              <p className="mb-0 small">A slot for <strong>{notifiedEntry.service}</strong> on {new Date(notifiedEntry.preferredDate).toLocaleDateString()} has opened up!</p>
            </div>
            <button
              onClick={() => {
                setSelectedService(notifiedEntry.service);
                setSelectedDateStr(new Date(notifiedEntry.preferredDate).toISOString().split('T')[0]);
                setActiveTab('book');
                setBookingStep(2);
              }}
              className="btn btn-dark btn-sm"
            >
              Book Now
            </button>
          </div>
        )}

        {/* Tab 1: Book Appointment Wizard */}
        {activeTab === 'book' && (
          <div className="bg-white rounded p-4 p-md-5 shadow-sm border">
            {/* Progress Bar */}
            <div className="mb-5">
              <div className="d-flex justify-content-between mb-2 small fw-bold text-uppercase text-muted">
                <span className={bookingStep >= 1 ? 'text-success' : ''}>1. Service</span>
                <span className={bookingStep >= 2 ? 'text-success' : ''}>2. Date & Time</span>
                <span className={bookingStep >= 3 ? 'text-success' : ''}>3. Health Intake</span>
                <span className={bookingStep >= 4 ? 'text-success' : ''}>4. Confirmation</span>
              </div>
              <div className="progress" style={{ height: '6px' }}>
                <div className="progress-bar bg-success" style={{ width: `${(bookingStep / 4) * 100}%` }}></div>
              </div>
            </div>

            {/* Step 1: Choose Service */}
            {bookingStep === 1 && (
              <div>
                <h3 className="fs-4 fw-bold mb-4">Step 1: Choose Healthcare Service</h3>
                <div className="row g-4">
                  {SERVICES_DATA.map((srv) => (
                    <div key={srv.id} className="col-md-6">
                      <div
                        onClick={() => setSelectedService(srv.id)}
                        className={`p-4 rounded border h-100 transition-all cursor-pointer ${
                          selectedService === srv.id ? 'border-success bg-light shadow-sm' : 'border-light'
                        }`}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="d-flex align-items-center gap-3 mb-3">
                          <div className="bg-success text-white rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                            <i className={`fa-solid ${srv.icon} fs-4`}></i>
                          </div>
                          <div>
                            <h5 className="fw-bold mb-0">{srv.title}</h5>
                            <small className="text-muted"><i className="fa-solid fa-clock me-1"></i>{srv.duration}</small>
                          </div>
                        </div>
                        <p className="text-muted small mb-0">{srv.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-end mt-4">
                  <button onClick={() => setBookingStep(2)} className="btn btn-success px-4 py-2">
                    Next: Select Date & Time &rarr;
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Date & Capacity Time Slot */}
            {bookingStep === 2 && (
              <div>
                <h3 className="fs-4 fw-bold mb-4">Step 2: Select Date & Capacity Slot</h3>
                <div className="row g-4 mb-4">
                  <div className="col-md-5">
                    <label className="form-label fw-bold">Select Date</label>
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      min={new Date().toISOString().split('T')[0]}
                      value={selectedDateStr}
                      onChange={(e) => setSelectedDateStr(e.target.value)}
                    />
                  </div>
                </div>

                <h5 className="fw-bold mb-3">Available Time Slots & Staff Capacity:</h5>
                {loadingSlots ? (
                  <div className="text-center py-4"><span className="spinner-border text-success"></span></div>
                ) : (
                  <div className="row g-3 mb-4">
                    {slotDetails.map((s) => (
                      <div key={s.time} className="col-6 col-md-3">
                        <button
                          disabled={!s.available}
                          onClick={() => setSelectedTimeSlot(s.time)}
                          className={`btn w-100 p-3 text-center border ${
                            selectedTimeSlot === s.time
                              ? 'btn-success text-white'
                              : s.available
                              ? 'btn-outline-success'
                              : 'btn-light text-muted opacity-50'
                          }`}
                        >
                          <div className="fw-bold fs-5">{s.time}</div>
                          <small className="d-block mt-1">
                            {s.available ? (
                              <span className="badge bg-warning text-dark">{s.capacity - s.booked} spots left</span>
                            ) : (
                              <span className="badge bg-secondary">Fully Booked</span>
                            )}
                          </small>
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="d-flex justify-content-between mt-4">
                  <button onClick={() => setBookingStep(1)} className="btn btn-outline-secondary px-4">&larr; Back</button>
                  <button disabled={!selectedTimeSlot} onClick={() => setBookingStep(3)} className="btn btn-success px-4">
                    Next: Health Questionnaire &rarr;
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Health Intake Form */}
            {bookingStep === 3 && (
              <div>
                <h3 className="fs-4 fw-bold mb-4">Step 3: Pre-Appointment Health Intake</h3>
                {intakeSchema.length > 0 ? (
                  <div className="row g-4 mb-4">
                    {intakeSchema.map((field) => (
                      <div key={field.id} className="col-md-6">
                        <label className="form-label fw-bold">
                          {field.label} {field.required && <span className="text-danger">*</span>}
                        </label>
                        {field.type === 'select' ? (
                          <select
                            className="form-select"
                            value={intakeResponses[field.id] || ''}
                            onChange={(e) => setIntakeResponses({ ...intakeResponses, [field.id]: e.target.value })}
                            required={field.required}
                          >
                            <option value="">Select an option</option>
                            {field.options?.map((opt) => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                        ) : field.type === 'textarea' ? (
                          <textarea
                            className="form-control"
                            rows="3"
                            value={intakeResponses[field.id] || ''}
                            onChange={(e) => setIntakeResponses({ ...intakeResponses, [field.id]: e.target.value })}
                            required={field.required}
                          ></textarea>
                        ) : (
                          <input
                            type={field.type}
                            className="form-control"
                            value={intakeResponses[field.id] || ''}
                            onChange={(e) => setIntakeResponses({ ...intakeResponses, [field.id]: e.target.value })}
                            required={field.required}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted">No specific intake questions for this service.</p>
                )}

                <div className="mb-4">
                  <label className="form-label fw-bold">Additional Special Notes / Requirements</label>
                  <textarea className="form-control" rows="2" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
                </div>

                <div className="d-flex justify-content-between mt-4">
                  <button onClick={() => setBookingStep(2)} className="btn btn-outline-secondary px-4">&larr; Back</button>
                  <button onClick={handleCreateAppointment} className="btn btn-success px-4">Submit & Confirm Booking</button>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation & ICS File Download */}
            {bookingStep === 4 && createdAppointment && (
              <div className="text-center py-4">
                <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center p-3 mb-3" style={{ width: '80px', height: '80px' }}>
                  <i className="fa-solid fa-check fs-1"></i>
                </div>
                <h2 className="fw-bold mb-2">Booking Request Confirmed!</h2>
                <p className="text-muted">Appointment Reference: <strong className="font-monospace text-dark">{createdAppointment._id}</strong></p>

                <div className="card max-w-500 mx-auto border rounded p-4 my-4 text-start bg-light">
                  <p className="mb-2"><strong>Service:</strong> {createdAppointment.serviceType.replace('-', ' ')}</p>
                  <p className="mb-2"><strong>Date:</strong> {new Date(createdAppointment.preferredDate).toLocaleDateString()}</p>
                  <p className="mb-0"><strong>Time:</strong> {createdAppointment.preferredTime}</p>
                </div>

                <div className="d-flex justify-content-center gap-3">
                  <button onClick={() => downloadICS(createdAppointment)} className="btn btn-outline-success">
                    <i className="fa-solid fa-calendar-circle-plus me-2"></i> Add to Calendar (.ics)
                  </button>
                  <button onClick={() => { setActiveTab('appointments'); navigate('/dashboard/patient/appointments'); }} className="btn btn-success">
                    View My Appointments
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: My Appointments & Self-Reschedule */}
        {activeTab === 'appointments' && (
          <div className="bg-white rounded p-4 shadow-sm border">
            <h3 className="fs-4 fw-bold mb-4">My Appointments</h3>
            <div className="row g-4">
              {appointments.map((app) => (
                <div key={app._id} className="col-md-6">
                  <div className="card rounded border p-4 shadow-sm">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="badge bg-success text-capitalize">{app.serviceType.replace('-', ' ')}</span>
                      {app.lateCancellation ? (
                        <span className="badge bg-danger">Late Cancel</span>
                      ) : (
                        <span className={`badge ${app.status === 'confirmed' ? 'bg-success' : 'bg-warning text-dark'}`}>{app.status}</span>
                      )}
                    </div>
                    <h5 className="fw-bold">{new Date(app.rescheduledDate || app.preferredDate).toLocaleDateString()} at {app.rescheduledTime || app.preferredTime}</h5>
                    {app.staffId?.name && <small className="text-muted d-block mb-3">Assigned Staff: {app.staffId.name}</small>}

                    <div className="d-flex gap-2 mt-3">
                      <button onClick={() => downloadICS(app)} className="btn btn-sm btn-outline-secondary">.ICS</button>
                      {app.status !== 'cancelled' && (
                        <>
                          <button
                            onClick={() => {
                              setRescheduleModalAppt(app);
                              setNewRescheduleDate(new Date(app.rescheduledDate || app.preferredDate).toISOString().split('T')[0]);
                              setNewRescheduleTime(app.rescheduledTime || app.preferredTime);
                            }}
                            className="btn btn-sm btn-outline-primary"
                          >
                            Reschedule
                          </button>
                          <button onClick={() => handleCancelAppointment(app._id)} className="btn btn-sm btn-outline-danger">
                            Cancel
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Waitlist */}
        {activeTab === 'waitlist' && (
          <div className="bg-white rounded p-4 shadow-sm border">
            <h3 className="fs-4 fw-bold mb-4">Join Slot Waitlist</h3>
            <form onSubmit={handleJoinWaitlist} className="row g-3 mb-5">
              <div className="col-md-4">
                <label className="form-label fw-bold">Service</label>
                <select className="form-select" value={waitlistService} onChange={(e) => setWaitlistService(e.target.value)}>
                  {SERVICES_DATA.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label fw-bold">Preferred Date</label>
                <input type="date" className="form-control" value={waitlistDate} onChange={(e) => setWaitlistDate(e.target.value)} required />
              </div>
              <div className="col-md-4 d-flex align-items-end">
                <button type="submit" className="btn btn-success w-100">Join Waitlist</button>
              </div>
            </form>
          </div>
        )}

        {/* Tab 4: Patient Profile */}
        {activeTab === 'profile' && (
          <div className="bg-white rounded p-4 shadow-sm border max-w-700">
            <h3 className="fs-4 fw-bold mb-4">My Account Profile</h3>

            {profileMsg && <div className="alert alert-success">{profileMsg}</div>}
            {profileError && <div className="alert alert-danger">{profileError}</div>}

            <form onSubmit={handleUpdateProfile}>
              <div className="mb-3">
                <label className="form-label fw-bold">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <hr className="my-4" />
              <h5 className="fw-bold mb-3">Change Password</h5>

              <div className="mb-3">
                <label className="form-label fw-bold">Current Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-bold">Confirm New Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
              </div>

              <button type="submit" disabled={profileLoading} className="btn btn-success px-4">
                {profileLoading ? 'Saving...' : 'Save Profile Changes'}
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Reschedule Modal */}
      {rescheduleModalAppt && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded">
              <div className="modal-header">
                <h5 className="modal-title">Self-Service Reschedule</h5>
                <button type="button" className="btn-close" onClick={() => setRescheduleModalAppt(null)}></button>
              </div>
              <div className="modal-body">
                <p className="text-muted small">Rescheduling is permitted up to 24 hours prior to appointment time.</p>
                <div className="mb-3">
                  <label className="form-label fw-bold">New Date</label>
                  <input type="date" className="form-control" value={newRescheduleDate} onChange={(e) => setNewRescheduleDate(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">New Time</label>
                  <input type="time" className="form-control" value={newRescheduleTime} onChange={(e) => setNewRescheduleTime(e.target.value)} />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setRescheduleModalAppt(null)}>Cancel</button>
                <button type="button" onClick={handlePatientReschedule} className="btn btn-success">Confirm Reschedule</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default PatientDashboard;

