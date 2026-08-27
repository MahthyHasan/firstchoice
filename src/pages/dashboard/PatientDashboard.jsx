import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const PatientDashboard = () => {
  const { user, logout, fetchWithAuth, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Active section state: 'book', 'appointments', 'profile'
  const getInitialTab = () => {
    if (location.pathname.includes('/book')) return 'book';
    if (location.pathname.includes('/profile')) return 'profile';
    return 'appointments';
  };

  const [activeTab, setActiveTab] = useState(getInitialTab());

  // My Appointments state
  const [appointments, setAppointments] = useState([]);
  const [loadingAppts, setLoadingAppts] = useState(false);
  const [cancelModalAppt, setCancelModalAppt] = useState(null);
  const [cancelReason, setCancelReason] = useState('');

  // Booking Wizard State
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedService, setSelectedService] = useState('home-nursing');
  
  // Custom Calendar state
  const [currentMonthDate, setCurrentMonthDate] = useState(new Date());
  const [selectedDateStr, setSelectedDateStr] = useState(new Date().toISOString().split('T')[0]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [loadingSlots, setLoadingSlots] = useState(false);

  // Booking Details & Notes
  const [notes, setNotes] = useState('');
  const [bookingSuccessMsg, setBookingSuccessMsg] = useState('');
  const [submittingBooking, setSubmittingBooking] = useState(false);

  // Profile Form state
  const [fullName, setFullName] = useState(user?.fullName || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [profileMsg, setProfileMsg] = useState('');
  const [profileError, setProfileError] = useState('');
  const [profileLoading, setProfileLoading] = useState(false);

  // Sync tab with route change
  useEffect(() => {
    setActiveTab(getInitialTab());
  }, [location.pathname]);

  // Load patient's appointments
  const loadAppointments = async () => {
    setLoadingAppts(true);
    try {
      const res = await fetchWithAuth('/api/appointments/my');
      const data = await res.json();
      if (data.success) {
        setAppointments(data.data || []);
      }
    } catch (err) {
      console.error('Failed to load appointments:', err);
    } finally {
      setLoadingAppts(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'appointments') {
      loadAppointments();
    }
  }, [activeTab]);

  // Load availability slots when date or service changes in Step 2
  useEffect(() => {
    if (activeTab === 'book' && bookingStep === 2 && selectedDateStr) {
      const fetchSlots = async () => {
        setLoadingSlots(true);
        try {
          const res = await fetch(`/api/appointments/availability?date=${selectedDateStr}&service=${selectedService}`);
          const data = await res.json();
          if (data.success) {
            setAvailableSlots(data.data.availableSlots || []);
            setBookedSlots(data.data.bookedSlots || []);
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

  // Cancel Appointment
  const handleCancelAppointment = async () => {
    if (!cancelModalAppt) return;
    try {
      const res = await fetchWithAuth(`/api/appointments/${cancelModalAppt._id}/cancel`, {
        method: 'PATCH',
        body: JSON.stringify({ reason: cancelReason || 'Cancelled by patient' }),
      });
      const data = await res.json();
      if (data.success) {
        setCancelModalAppt(null);
        setCancelReason('');
        loadAppointments();
      }
    } catch (err) {
      alert('Failed to cancel appointment');
    }
  };

  // Submit Booking
  const handleCreateAppointment = async () => {
    setSubmittingBooking(true);
    try {
      const res = await fetchWithAuth('/api/appointments', {
        method: 'POST',
        body: JSON.stringify({
          serviceType: selectedService,
          preferredDate: selectedDateStr,
          preferredTime: selectedTimeSlot,
          notes,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setBookingSuccessMsg('Appointment booked successfully!');
        setTimeout(() => {
          setBookingSuccessMsg('');
          setBookingStep(1);
          setSelectedTimeSlot('');
          setNotes('');
          navigate('/dashboard/patient/appointments');
        }, 2000);
      } else {
        alert(data.message || 'Failed to book appointment');
      }
    } catch (err) {
      alert('Error submitting appointment');
    } finally {
      setSubmittingBooking(false);
    }
  };

  // Update Profile
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

  // Helper for status badges
  const renderStatusBadge = (status) => {
    switch (status) {
      case 'confirmed':
        return <span className="badge bg-success px-3 py-2 text-capitalize">Confirmed</span>;
      case 'pending':
        return <span className="badge bg-warning text-dark px-3 py-2 text-capitalize">Pending</span>;
      case 'completed':
        return <span className="badge bg-secondary px-3 py-2 text-capitalize">Completed</span>;
      case 'cancelled':
        return <span className="badge bg-danger px-3 py-2 text-capitalize">Cancelled</span>;
      default:
        return <span className="badge bg-light text-dark px-3 py-2 text-capitalize">{status}</span>;
    }
  };

  // Calendar Helpers
  const year = currentMonthDate.getFullYear();
  const month = currentMonthDate.getMonth();
  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const prevMonth = () => setCurrentMonthDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentMonthDate(new Date(year, month + 1, 1));

  return (
    <div className="d-flex min-vh-100 cs_gray4_bg">
      {/* Sidebar */}
      <div className="cs_secondary_bg text-white d-flex flex-column" style={{ width: '260px', flexShrink: 0 }}>
        <div className="p-4 border-bottom border-secondary text-center">
          <Link to="/">
            <img src="/assets/img/logofull.png" alt="First Choice Medical" style={{ maxHeight: '50px' }} />
          </Link>
          <div className="mt-3">
            <span className="badge bg-success text-uppercase">Patient Portal</span>
          </div>
        </div>

        <div className="p-3 flex-grow-1">
          <ul className="nav nav-pills flex-column gap-2">
            <li className="nav-item">
              <button
                className={`nav-link text-start w-100 py-3 px-3 fs-6 d-flex align-items-center gap-3 ${
                  activeTab === 'appointments' ? 'bg-success text-white fw-bold' : 'text-white-50'
                }`}
                onClick={() => navigate('/dashboard/patient/appointments')}
              >
                <i className="fa-solid fa-calendar-check"></i>
                <span>My Appointments</span>
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link text-start w-100 py-3 px-3 fs-6 d-flex align-items-center gap-3 ${
                  activeTab === 'book' ? 'bg-success text-white fw-bold' : 'text-white-50'
                }`}
                onClick={() => navigate('/dashboard/patient/book')}
              >
                <i className="fa-solid fa-plus-circle"></i>
                <span>Book Appointment</span>
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link text-start w-100 py-3 px-3 fs-6 d-flex align-items-center gap-3 ${
                  activeTab === 'profile' ? 'bg-success text-white fw-bold' : 'text-white-50'
                }`}
                onClick={() => navigate('/dashboard/patient/profile')}
              >
                <i className="fa-solid fa-user"></i>
                <span>My Profile</span>
              </button>
            </li>
          </ul>
        </div>

        <div className="p-3 border-top border-secondary">
          <div className="d-flex align-items-center gap-2 mb-3">
            <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '40px', height: '40px' }}>
              {user?.fullName?.charAt(0) || 'P'}
            </div>
            <div className="overflow-hidden">
              <div className="fw-bold text-truncate">{user?.fullName}</div>
              <div className="small text-white-50 text-truncate">{user?.email}</div>
            </div>
          </div>
          <button onClick={logout} className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center gap-2">
            <i className="fa-solid fa-right-from-bracket"></i>
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow-1 p-4 p-md-5 overflow-auto">
        {/* Top Header Bar */}
        <div className="d-flex justify-content-between align-items-center mb-4 bg-white p-3 cs_radius_15 shadow-sm">
          <div>
            <h2 className="cs_fs_24 cs_bold mb-0">
              {activeTab === 'appointments' && 'My Appointments'}
              {activeTab === 'book' && 'Book Home Healthcare Service'}
              {activeTab === 'profile' && 'Patient Profile Management'}
            </h2>
            <p className="text-muted mb-0 small">Welcome back, {user?.fullName}</p>
          </div>
          <Link to="/" className="btn btn-outline-success btn-sm">
            <i className="fa-solid fa-house me-1"></i> Public Website
          </Link>
        </div>

        {/* Tab 1: My Appointments */}
        {activeTab === 'appointments' && (
          <div className="bg-white cs_radius_20 p-4 shadow-sm">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="cs_fs_20 cs_semibold mb-0">Scheduled Appointments</h4>
              <button onClick={() => navigate('/dashboard/patient/book')} className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5 py-2 px-3 fs-6">
                + New Appointment
              </button>
            </div>

            {loadingAppts ? (
              <div className="text-center py-5">
                <div className="spinner-border text-success" role="status"></div>
                <p className="mt-2 text-muted">Loading appointments...</p>
              </div>
            ) : appointments.length === 0 ? (
              <div className="text-center py-5 text-muted">
                <i className="fa-solid fa-calendar-xmark display-3 mb-3 text-secondary"></i>
                <p className="fs-5">No appointments found.</p>
                <button onClick={() => navigate('/dashboard/patient/book')} className="btn btn-success mt-2">
                  Book Your First Service
                </button>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Service Type</th>
                      <th>Date</th>
                      <th>Time Slot</th>
                      <th>Status</th>
                      <th>Admin Notes</th>
                      <th className="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((app) => (
                      <tr key={app._id}>
                        <td className="fw-bold text-capitalize">{app.serviceType.replace('-', ' ')}</td>
                        <td>{new Date(app.rescheduledDate || app.preferredDate).toLocaleDateString()}</td>
                        <td>{app.rescheduledTime || app.preferredTime}</td>
                        <td>{renderStatusBadge(app.status)}</td>
                        <td><small className="text-muted">{app.adminNotes || '—'}</small></td>
                        <td className="text-end">
                          {app.status === 'pending' && (
                            <button
                              onClick={() => setCancelModalAppt(app)}
                              className="btn btn-outline-danger btn-sm"
                            >
                              Cancel
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Book Appointment Wizard */}
        {activeTab === 'book' && (
          <div className="bg-white cs_radius_20 p-4 p-md-5 shadow-sm">
            {bookingSuccessMsg ? (
              <div className="alert alert-success text-center p-4 cs_radius_15">
                <i className="fa-solid fa-circle-check display-4 d-block mb-3"></i>
                <h4>{bookingSuccessMsg}</h4>
                <p className="mb-0">Redirecting to your appointments list...</p>
              </div>
            ) : (
              <>
                {/* Wizard Steps Header */}
                <div className="row mb-5 text-center">
                  <div className={`col-3 border-bottom pb-2 ${bookingStep >= 1 ? 'border-success text-success fw-bold' : 'text-muted'}`}>
                    1. Select Service
                  </div>
                  <div className={`col-3 border-bottom pb-2 ${bookingStep >= 2 ? 'border-success text-success fw-bold' : 'text-muted'}`}>
                    2. Date & Time
                  </div>
                  <div className={`col-3 border-bottom pb-2 ${bookingStep >= 3 ? 'border-success text-success fw-bold' : 'text-muted'}`}>
                    3. Details & Notes
                  </div>
                  <div className={`col-3 border-bottom pb-2 ${bookingStep >= 4 ? 'border-success text-success fw-bold' : 'text-muted'}`}>
                    4. Confirmation
                  </div>
                </div>

                {/* Step 1: Service Selection */}
                {bookingStep === 1 && (
                  <div>
                    <h4 className="cs_fs_20 cs_semibold mb-4 text-center">Choose Healthcare Service</h4>
                    <div className="row g-4">
                      {[
                        { id: 'home-nursing', title: 'Home Nursing Care', desc: '24/7 nursing, wound care, post-op support, vital signs monitoring.', icon: 'fa-user-nurse' },
                        { id: 'elderly-care', title: 'Elderly & Senior Care', desc: 'In-home senior care, residential aged care, daily assistance, hygiene.', icon: 'fa-heart-pulse' },
                        { id: 'postnatal-care', title: 'Postnatal Confinement Care', desc: 'Mother & baby daily care, confinement meals, housekeeping.', icon: 'fa-baby' },
                        { id: 'physiotherapy', title: 'Physiotherapy Services', desc: 'In-home physical therapy, mobility rehabilitation & stroke recovery.', icon: 'fa-child-reaching' },
                      ].map((item) => (
                        <div key={item.id} className="col-md-6">
                          <div
                            onClick={() => setSelectedService(item.id)}
                            className={`p-4 cs_radius_15 border cursor-pointer h-100 transition-all ${
                              selectedService === item.id ? 'border-success bg-light shadow-sm' : ''
                            }`}
                            style={{ cursor: 'pointer' }}
                          >
                            <div className="d-flex align-items-center gap-3 mb-3">
                              <div className={`rounded-circle d-flex align-items-center justify-content-center text-white ${selectedService === item.id ? 'bg-success' : 'cs_secondary_bg'}`} style={{ width: '48px', height: '48px' }}>
                                <i className={`fa-solid ${item.icon} fs-5`}></i>
                              </div>
                              <h5 className="mb-0 fw-bold">{item.title}</h5>
                            </div>
                            <p className="text-muted small mb-0">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="text-end mt-4">
                      <button onClick={() => setBookingStep(2)} className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5">
                        Next: Choose Date & Time <i className="fa-solid fa-arrow-right ms-2"></i>
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Custom Monthly Calendar & Time Slot Picker */}
                {bookingStep === 2 && (
                  <div>
                    <h4 className="cs_fs_20 cs_semibold mb-4 text-center">Select Date & Available Slot</h4>
                    <div className="row g-4">
                      {/* Custom Monthly Calendar */}
                      <div className="col-lg-6">
                        <div className="border cs_radius_15 p-3 bg-light">
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <button onClick={prevMonth} className="btn btn-outline-secondary btn-sm">&lt;</button>
                            <h5 className="mb-0 fw-bold">{monthNames[month]} {year}</h5>
                            <button onClick={nextMonth} className="btn btn-outline-secondary btn-sm">&gt;</button>
                          </div>
                          <div className="d-flex text-center fw-bold text-muted mb-2">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                              <div key={d} style={{ width: '14.28%' }}>{d}</div>
                            ))}
                          </div>
                          <div className="d-flex flex-wrap text-center">
                            {Array.from({ length: firstDayIndex }).map((_, i) => (
                              <div key={`empty-${i}`} style={{ width: '14.28%', height: '40px' }}></div>
                            ))}
                            {Array.from({ length: daysInMonth }).map((_, i) => {
                              const dayNum = i + 1;
                              const dateObj = new Date(year, month, dayNum);
                              const dateStr = dateObj.toISOString().split('T')[0];
                              const isSelected = dateStr === selectedDateStr;
                              const isPast = dateObj < new Date(new Date().setHours(0,0,0,0));

                              return (
                                <div key={dayNum} style={{ width: '14.28%', height: '40px' }} className="p-1">
                                  <button
                                    disabled={isPast}
                                    onClick={() => setSelectedDateStr(dateStr)}
                                    className={`btn btn-sm w-100 h-100 ${
                                      isSelected ? 'btn-success fw-bold' : isPast ? 'btn-light text-muted' : 'btn-outline-dark'
                                    }`}
                                  >
                                    {dayNum}
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Time Slots Picker */}
                      <div className="col-lg-6">
                        <div className="border cs_radius_15 p-3">
                          <h6 className="fw-bold mb-3">Available Slots for {selectedDateStr}:</h6>
                          {loadingSlots ? (
                            <div className="text-center py-4">
                              <div className="spinner-border spinner-border-sm text-success" role="status"></div>
                              <span className="ms-2">Loading slots...</span>
                            </div>
                          ) : (
                            <div className="row g-2" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                              {['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'].map((slot) => {
                                const isBooked = bookedSlots.includes(slot);
                                const isSelected = selectedTimeSlot === slot;

                                return (
                                  <div key={slot} className="col-4">
                                    <button
                                      disabled={isBooked}
                                      onClick={() => setSelectedTimeSlot(slot)}
                                      className={`btn btn-sm w-100 py-2 ${
                                        isSelected ? 'btn-success fw-bold' : isBooked ? 'btn-secondary text-decoration-line-through' : 'btn-outline-success'
                                      }`}
                                    >
                                      {slot}
                                    </button>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between mt-4">
                      <button onClick={() => setBookingStep(1)} className="btn btn-outline-secondary">
                        <i className="fa-solid fa-arrow-left me-2"></i> Back
                      </button>
                      <button
                        disabled={!selectedDateStr || !selectedTimeSlot}
                        onClick={() => setBookingStep(3)}
                        className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5"
                      >
                        Next: Notes & Details <i className="fa-solid fa-arrow-right ms-2"></i>
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Patient Details & Notes */}
                {bookingStep === 3 && (
                  <div>
                    <h4 className="cs_fs_20 cs_semibold mb-4 text-center">Patient Information & Notes</h4>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Full Name</label>
                        <input type="text" className="form-control" value={user?.fullName || ''} readOnly />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Email Address</label>
                        <input type="email" className="form-control" value={user?.email || ''} readOnly />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Qatar Phone Number</label>
                        <input type="text" className="form-control" value={user?.phone || ''} readOnly />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Selected Service</label>
                        <input type="text" className="form-control text-capitalize" value={selectedService.replace('-', ' ')} readOnly />
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-bold">Special Care Requirements / Medical Notes</label>
                        <textarea
                          rows="4"
                          className="form-control"
                          placeholder="Describe patient condition, mobility needs, or preferences..."
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                        ></textarea>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between mt-4">
                      <button onClick={() => setBookingStep(2)} className="btn btn-outline-secondary">
                        <i className="fa-solid fa-arrow-left me-2"></i> Back
                      </button>
                      <button onClick={() => setBookingStep(4)} className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5">
                        Review Summary <i className="fa-solid fa-arrow-right ms-2"></i>
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 4: Summary & Confirm */}
                {bookingStep === 4 && (
                  <div>
                    <h4 className="cs_fs_20 cs_semibold mb-4 text-center">Review & Confirm Booking</h4>
                    <div className="border cs_radius_15 p-4 bg-light mb-4">
                      <div className="row g-3">
                        <div className="col-md-6"><strong>Service:</strong> <span className="text-capitalize">{selectedService.replace('-', ' ')}</span></div>
                        <div className="col-md-6"><strong>Date & Time:</strong> {selectedDateStr} at {selectedTimeSlot}</div>
                        <div className="col-md-6"><strong>Patient Name:</strong> {user?.fullName}</div>
                        <div className="col-md-6"><strong>Contact Phone:</strong> {user?.phone}</div>
                        <div className="col-12"><strong>Notes:</strong> {notes || 'None'}</div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <button onClick={() => setBookingStep(3)} className="btn btn-outline-secondary">
                        <i className="fa-solid fa-arrow-left me-2"></i> Back
                      </button>
                      <button
                        onClick={handleCreateAppointment}
                        disabled={submittingBooking}
                        className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5 px-4 py-2 fs-6"
                      >
                        {submittingBooking ? 'Submitting...' : 'Confirm & Book Appointment'}
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* Tab 3: Profile */}
        {activeTab === 'profile' && (
          <div className="bg-white cs_radius_20 p-4 p-md-5 shadow-sm max-w-700">
            <h4 className="cs_fs_20 cs_semibold mb-4">Update Profile & Security</h4>

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
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Qatar Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <hr className="my-4" />

              <h5 className="cs_fs_18 cs_semibold mb-3">Change Password (Optional)</h5>

              <div className="mb-3">
                <label className="form-label">Current Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Confirm New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={profileLoading}
                className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5 py-2 px-4"
              >
                {profileLoading ? 'Saving Changes...' : 'Save Profile Changes'}
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Cancel Modal */}
      {cancelModalAppt && (
        <div className="modal show d-block tab-index-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content cs_radius_15">
              <div className="modal-header">
                <h5 className="modal-title text-danger">Cancel Appointment</h5>
                <button type="button" className="btn-close" onClick={() => setCancelModalAppt(null)}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to cancel your appointment for <strong>{cancelModalAppt.serviceType}</strong> on <strong>{new Date(cancelModalAppt.preferredDate).toLocaleDateString()}</strong>?</p>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Reason for cancellation (optional)..."
                  value={cancelReason}
                  onChange={(e) => setCancelReason(e.target.value)}
                ></textarea>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setCancelModalAppt(null)}>Keep Appointment</button>
                <button type="button" className="btn btn-danger" onClick={handleCancelAppointment}>Confirm Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientDashboard;
