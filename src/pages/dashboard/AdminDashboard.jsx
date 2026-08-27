import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard = () => {
  const { user, logout, fetchWithAuth, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const getInitialTab = () => {
    if (location.pathname.includes('/appointments')) return 'appointments';
    if (location.pathname.includes('/calendar')) return 'calendar';
    if (location.pathname.includes('/summary')) return 'summary';
    if (location.pathname.includes('/profile')) return 'profile';
    return 'overview';
  };

  const [activeTab, setActiveTab] = useState(getInitialTab());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Stats / Summary state
  const [stats, setStats] = useState({ total: 0, pending: 0, confirmed: 0, completed: 0, cancelled: 0, byService: {} });

  // Appointments table state
  const [appointments, setAppointments] = useState([]);
  const [totalAppts, setTotalAppts] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loadingAppts, setLoadingAppts] = useState(false);

  // Filters
  const [filterStatus, setFilterStatus] = useState('');
  const [filterService, setFilterService] = useState('');
  const [filterSearch, setFilterSearch] = useState('');
  const [filterStartDate, setFilterStartDate] = useState('');
  const [filterEndDate, setFilterEndDate] = useState('');

  // Selection & Modals
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedApptDetails, setSelectedApptDetails] = useState(null);
  const [rescheduleModalAppt, setRescheduleModalAppt] = useState(null);
  const [rescheduleDate, setRescheduleDate] = useState('');
  const [rescheduleTime, setRescheduleTime] = useState('09:00');
  const [cancelModalAppt, setCancelModalAppt] = useState(null);
  const [cancelReason, setCancelReason] = useState('');

  // Calendar View State
  const [currentWeekStart, setCurrentWeekStart] = useState(() => {
    const d = new Date();
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Monday
    return new Date(d.setDate(diff));
  });
  const [calendarAppts, setCalendarAppts] = useState([]);

  // Summary View State
  const [summaryMode, setSummaryMode] = useState('daily'); // daily, weekly
  const [summaryDateStr, setSummaryDateStr] = useState(new Date().toISOString().split('T')[0]);

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

  // Load summary stats
  const loadStats = async () => {
    try {
      const res = await fetchWithAuth('/api/appointments/summary');
      const data = await res.json();
      if (data.success) {
        setStats(data.data);
      }
    } catch (e) {
      console.error('Failed to load stats:', e);
    }
  };

  // Load appointments table
  const loadAppointments = async () => {
    setLoadingAppts(true);
    try {
      const query = new URLSearchParams({
        page: page.toString(),
        limit: '20',
        ...(filterStatus && { status: filterStatus }),
        ...(filterService && { serviceType: filterService }),
        ...(filterSearch && { search: filterSearch }),
        ...(filterStartDate && { startDate: filterStartDate }),
        ...(filterEndDate && { endDate: filterEndDate }),
      });

      const res = await fetchWithAuth(`/api/appointments?${query.toString()}`);
      const data = await res.json();
      if (data.success) {
        setAppointments(data.data.items || []);
        setTotalAppts(data.data.total || 0);
        setTotalPages(data.data.totalPages || 1);
      }
    } catch (e) {
      console.error('Failed to load appointments:', e);
    } finally {
      setLoadingAppts(false);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  useEffect(() => {
    if (activeTab === 'appointments' || activeTab === 'overview') {
      loadAppointments();
    }
  }, [activeTab, page, filterStatus, filterService, filterSearch, filterStartDate, filterEndDate]);

  // Load week appointments for Calendar
  useEffect(() => {
    if (activeTab === 'calendar') {
      const loadWeekAppts = async () => {
        const start = new Date(currentWeekStart);
        const end = new Date(currentWeekStart);
        end.setDate(end.getDate() + 6);

        const query = new URLSearchParams({
          startDate: start.toISOString().split('T')[0],
          endDate: end.toISOString().split('T')[0],
          limit: '100',
        });

        const res = await fetchWithAuth(`/api/appointments?${query.toString()}`);
        const data = await res.json();
        if (data.success) {
          setCalendarAppts(data.data.items || []);
        }
      };
      loadWeekAppts();
    }
  }, [activeTab, currentWeekStart]);

  // Actions
  const handleConfirm = async (id) => {
    try {
      const res = await fetchWithAuth(`/api/appointments/${id}/confirm`, { method: 'PATCH' });
      const data = await res.json();
      if (data.success) {
        loadAppointments();
        loadStats();
      }
    } catch (e) {
      alert('Failed to confirm appointment');
    }
  };

  const handleComplete = async (id) => {
    try {
      const res = await fetchWithAuth(`/api/appointments/${id}/complete`, { method: 'PATCH' });
      const data = await res.json();
      if (data.success) {
        loadAppointments();
        loadStats();
      }
    } catch (e) {
      alert('Failed to mark complete');
    }
  };

  const handleRescheduleSubmit = async () => {
    if (!rescheduleModalAppt) return;
    try {
      const res = await fetchWithAuth(`/api/appointments/${rescheduleModalAppt._id}/reschedule`, {
        method: 'PATCH',
        body: JSON.stringify({
          rescheduledDate: rescheduleDate,
          rescheduledTime: rescheduleTime,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setRescheduleModalAppt(null);
        loadAppointments();
      }
    } catch (e) {
      alert('Failed to reschedule');
    }
  };

  const handleCancelSubmit = async () => {
    if (!cancelModalAppt) return;
    try {
      const res = await fetchWithAuth(`/api/appointments/${cancelModalAppt._id}/cancel`, {
        method: 'PATCH',
        body: JSON.stringify({ reason: cancelReason }),
      });
      const data = await res.json();
      if (data.success) {
        setCancelModalAppt(null);
        setCancelReason('');
        loadAppointments();
        loadStats();
      }
    } catch (e) {
      alert('Failed to cancel appointment');
    }
  };

  // Bulk Actions
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(appointments.map((a) => a._id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleBulkConfirm = async () => {
    if (selectedIds.length === 0) return;
    for (const id of selectedIds) {
      await fetchWithAuth(`/api/appointments/${id}/confirm`, { method: 'PATCH' });
    }
    setSelectedIds([]);
    loadAppointments();
    loadStats();
  };

  const handleBulkCancel = async () => {
    if (selectedIds.length === 0) return;
    for (const id of selectedIds) {
      await fetchWithAuth(`/api/appointments/${id}/cancel`, { method: 'PATCH', body: JSON.stringify({ reason: 'Bulk cancelled by admin' }) });
    }
    setSelectedIds([]);
    loadAppointments();
    loadStats();
  };

  // CSV Export Generation
  const exportCSV = () => {
    if (appointments.length === 0) return;
    const headers = ['Patient Name', 'Patient Email', 'Patient Phone', 'Service', 'Date', 'Time', 'Status', 'Notes'];
    const rows = appointments.map((a) => [
      `"${a.patientName}"`,
      `"${a.patientEmail}"`,
      `"${a.patientPhone}"`,
      `"${a.serviceType}"`,
      `"${new Date(a.rescheduledDate || a.preferredDate).toLocaleDateString()}"`,
      `"${a.rescheduledTime || a.preferredTime}"`,
      `"${a.status}"`,
      `"${(a.notes || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `first_choice_appointments_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        setProfileMsg('Admin profile updated!');
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

  // Status Badge Helper
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

  // Week Days calculation for Calendar
  const weekDays = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(currentWeekStart);
    d.setDate(d.getDate() + i);
    return d;
  });

  return (
    <div className="d-flex min-vh-100 cs_gray4_bg">
      {/* Mobile Hamburger Header */}
      <div className="d-md-none position-fixed top-0 start-0 end-0 cs_secondary_bg text-white p-3 d-flex justify-content-between align-items-center z-3">
        <img src="/assets/img/logofull.png" alt="First Choice" style={{ maxHeight: '40px' }} />
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="btn btn-outline-light btn-sm">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Sidebar Navigation */}
      <div
        className={`cs_secondary_bg text-white d-flex flex-column transition-all ${
          mobileMenuOpen ? 'position-fixed top-0 bottom-0 start-0 z-3 w-260' : 'd-none d-md-flex'
        }`}
        style={{ width: '260px', flexShrink: 0 }}
      >
        <div className="p-4 border-bottom border-secondary text-center">
          <Link to="/">
            <img src="/assets/img/logofull.png" alt="First Choice Medical" style={{ maxHeight: '50px' }} />
          </Link>
          <div className="mt-3">
            <span className="badge bg-warning text-dark text-uppercase fw-bold">Admin Portal</span>
          </div>
        </div>

        <div className="p-3 flex-grow-1">
          <ul className="nav nav-pills flex-column gap-2">
            <li className="nav-item">
              <button
                className={`nav-link text-start w-100 py-3 px-3 fs-6 d-flex align-items-center gap-3 ${
                  activeTab === 'overview' ? 'bg-success text-white fw-bold' : 'text-white-50'
                }`}
                onClick={() => { setActiveTab('overview'); navigate('/dashboard/admin'); setMobileMenuOpen(false); }}
              >
                <i className="fa-solid fa-chart-line"></i>
                <span>Overview & Stats</span>
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link text-start w-100 py-3 px-3 fs-6 d-flex align-items-center gap-3 ${
                  activeTab === 'appointments' ? 'bg-success text-white fw-bold' : 'text-white-50'
                }`}
                onClick={() => { setActiveTab('appointments'); navigate('/dashboard/admin/appointments'); setMobileMenuOpen(false); }}
              >
                <i className="fa-solid fa-list-check"></i>
                <span>Appointments</span>
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link text-start w-100 py-3 px-3 fs-6 d-flex align-items-center gap-3 ${
                  activeTab === 'calendar' ? 'bg-success text-white fw-bold' : 'text-white-50'
                }`}
                onClick={() => { setActiveTab('calendar'); navigate('/dashboard/admin/calendar'); setMobileMenuOpen(false); }}
              >
                <i className="fa-solid fa-calendar-days"></i>
                <span>Calendar Grid</span>
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link text-start w-100 py-3 px-3 fs-6 d-flex align-items-center gap-3 ${
                  activeTab === 'summary' ? 'bg-success text-white fw-bold' : 'text-white-50'
                }`}
                onClick={() => { setActiveTab('summary'); navigate('/dashboard/admin/summary'); setMobileMenuOpen(false); }}
              >
                <i className="fa-solid fa-print"></i>
                <span>Summary Reports</span>
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link text-start w-100 py-3 px-3 fs-6 d-flex align-items-center gap-3 ${
                  activeTab === 'profile' ? 'bg-success text-white fw-bold' : 'text-white-50'
                }`}
                onClick={() => { setActiveTab('profile'); navigate('/dashboard/admin/profile'); setMobileMenuOpen(false); }}
              >
                <i className="fa-solid fa-user-shield"></i>
                <span>Admin Profile</span>
              </button>
            </li>
          </ul>
        </div>

        <div className="p-3 border-top border-secondary">
          <div className="d-flex align-items-center gap-2 mb-3">
            <div className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '40px', height: '40px' }}>
              A
            </div>
            <div className="overflow-hidden">
              <div className="fw-bold text-truncate">{user?.fullName || 'Administrator'}</div>
              <div className="small text-white-50 text-truncate">{user?.email}</div>
            </div>
          </div>
          <button onClick={logout} className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center gap-2">
            <i className="fa-solid fa-right-from-bracket"></i>
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4 p-md-5 overflow-auto mt-5 mt-md-0">
        {/* Top Bar */}
        <div className="d-flex justify-content-between align-items-center mb-4 bg-white p-3 cs_radius_15 shadow-sm">
          <div>
            <h2 className="cs_fs_24 cs_bold mb-0 text-capitalize">
              {activeTab === 'overview' && 'Admin Overview & Key Statistics'}
              {activeTab === 'appointments' && 'Appointment Management'}
              {activeTab === 'calendar' && 'Weekly Interactive Calendar'}
              {activeTab === 'summary' && 'Daily & Weekly Summary Reports'}
              {activeTab === 'profile' && 'Admin Account Settings'}
            </h2>
            <p className="text-muted mb-0 small">First Choice Medical Services Control Center</p>
          </div>
          <Link to="/" className="btn btn-outline-success btn-sm d-none d-sm-inline-block">
            <i className="fa-solid fa-globe me-1"></i> Public Website
          </Link>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div>
            {/* KPI Cards */}
            <div className="row g-4 mb-4">
              <div className="col-md-3">
                <div className="p-4 bg-white cs_radius_15 border-start border-4 border-primary shadow-sm">
                  <div className="text-muted small fw-bold">TOTAL BOOKINGS</div>
                  <div className="display-6 fw-bold text-dark mt-2">{stats.total}</div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-4 bg-white cs_radius_15 border-start border-4 border-warning shadow-sm">
                  <div className="text-muted small fw-bold">PENDING APPROVAL</div>
                  <div className="display-6 fw-bold text-warning mt-2">{stats.pending}</div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-4 bg-white cs_radius_15 border-start border-4 border-success shadow-sm">
                  <div className="text-muted small fw-bold">CONFIRMED</div>
                  <div className="display-6 fw-bold text-success mt-2">{stats.confirmed}</div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-4 bg-white cs_radius_15 border-start border-4 border-secondary shadow-sm">
                  <div className="text-muted small fw-bold">COMPLETED</div>
                  <div className="display-6 fw-bold text-secondary mt-2">{stats.completed}</div>
                </div>
              </div>
            </div>

            {/* SVG Bar Chart by Service */}
            <div className="bg-white cs_radius_20 p-4 shadow-sm mb-4">
              <h4 className="cs_fs_20 cs_semibold mb-4">Bookings Distribution by Service Category</h4>
              <div className="p-3 bg-light cs_radius_10">
                <svg viewBox="0 0 500 150" className="w-100" style={{ maxHeight: '200px' }}>
                  {['home-nursing', 'elderly-care', 'postnatal-care', 'physiotherapy'].map((srv, idx) => {
                    const count = stats.byService?.[srv] || 0;
                    const maxVal = Math.max(...Object.values(stats.byService || { a: 1 }), 1);
                    const barHeight = Math.max(10, (count / maxVal) * 100);
                    const xPos = 40 + idx * 110;

                    return (
                      <g key={srv}>
                        <rect x={xPos} y={120 - barHeight} width="50" height={barHeight} fill="#4CAF50" rx="4" />
                        <text x={xPos + 25} y={115 - barHeight} textAnchor="middle" fontSize="12" fill="#0D1B3E" fontWeight="bold">
                          {count}
                        </text>
                        <text x={xPos + 25} y="140" textAnchor="middle" fontSize="10" fill="#666">
                          {srv === 'home-nursing' ? 'Nursing' : srv === 'elderly-care' ? 'Elderly' : srv === 'postnatal-care' ? 'Postnatal' : 'Physio'}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Recent 5 Appointments */}
            <div className="bg-white cs_radius_20 p-4 shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="cs_fs_20 cs_semibold mb-0">Recent Bookings</h4>
                <button onClick={() => navigate('/dashboard/admin/appointments')} className="btn btn-sm btn-outline-success">
                  View All ({totalAppts})
                </button>
              </div>

              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Patient Name</th>
                      <th>Service</th>
                      <th>Date / Time</th>
                      <th>Status</th>
                      <th className="text-end">Quick Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.slice(0, 5).map((app) => (
                      <tr key={app._id}>
                        <td className="fw-bold">{app.patientName}</td>
                        <td className="text-capitalize">{app.serviceType.replace('-', ' ')}</td>
                        <td>{new Date(app.rescheduledDate || app.preferredDate).toLocaleDateString()} @ {app.rescheduledTime || app.preferredTime}</td>
                        <td>{renderStatusBadge(app.status)}</td>
                        <td className="text-end">
                          {app.status === 'pending' && (
                            <button onClick={() => handleConfirm(app._id)} className="btn btn-sm btn-success me-2">Confirm</button>
                          )}
                          <button onClick={() => setSelectedApptDetails(app)} className="btn btn-sm btn-outline-primary">Details</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Appointments Management */}
        {activeTab === 'appointments' && (
          <div className="bg-white cs_radius_20 p-4 shadow-sm">
            {/* Filter Bar */}
            <div className="row g-3 mb-4">
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search patient name, email, phone..."
                  value={filterSearch}
                  onChange={(e) => { setFilterSearch(e.target.value); setPage(1); }}
                />
              </div>
              <div className="col-md-2">
                <select className="form-select" value={filterStatus} onChange={(e) => { setFilterStatus(e.target.value); setPage(1); }}>
                  <option value="">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <div className="col-md-2">
                <select className="form-select" value={filterService} onChange={(e) => { setFilterService(e.target.value); setPage(1); }}>
                  <option value="">All Services</option>
                  <option value="home-nursing">Home Nursing</option>
                  <option value="elderly-care">Elderly Care</option>
                  <option value="postnatal-care">Postnatal Care</option>
                  <option value="physiotherapy">Physiotherapy</option>
                </select>
              </div>
              <div className="col-md-2">
                <input type="date" className="form-control" value={filterStartDate} onChange={(e) => setFilterStartDate(e.target.value)} placeholder="Start Date" />
              </div>
              <div className="col-md-2">
                <input type="date" className="form-control" value={filterEndDate} onChange={(e) => setFilterEndDate(e.target.value)} placeholder="End Date" />
              </div>
              <div className="col-md-1">
                <button onClick={exportCSV} className="btn btn-outline-success w-100" title="Export CSV">
                  <i className="fa-solid fa-file-csv"></i>
                </button>
              </div>
            </div>

            {/* Bulk Action Bar */}
            {selectedIds.length > 0 && (
              <div className="alert alert-info d-flex justify-content-between align-items-center mb-3">
                <span>Selected <strong>{selectedIds.length}</strong> items</span>
                <div className="d-flex gap-2">
                  <button onClick={handleBulkConfirm} className="btn btn-success btn-sm">Bulk Confirm</button>
                  <button onClick={handleBulkCancel} className="btn btn-danger btn-sm">Bulk Cancel</button>
                </div>
              </div>
            )}

            {/* Data Table */}
            {loadingAppts ? (
              <div className="text-center py-5">
                <div className="spinner-border text-success" role="status"></div>
                <p className="mt-2 text-muted">Loading appointments list...</p>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-light">
                    <tr>
                      <th><input type="checkbox" onChange={handleSelectAll} checked={selectedIds.length === appointments.length && appointments.length > 0} /></th>
                      <th>Patient</th>
                      <th>Contact</th>
                      <th>Service</th>
                      <th>Date & Time</th>
                      <th>Status</th>
                      <th className="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((app) => (
                      <tr key={app._id}>
                        <td><input type="checkbox" checked={selectedIds.includes(app._id)} onChange={() => handleSelectOne(app._id)} /></td>
                        <td>
                          <div className="fw-bold">{app.patientName}</div>
                          <small className="text-muted">{app.patientEmail}</small>
                        </td>
                        <td>{app.patientPhone}</td>
                        <td className="text-capitalize">{app.serviceType.replace('-', ' ')}</td>
                        <td>
                          <div>{new Date(app.rescheduledDate || app.preferredDate).toLocaleDateString()}</div>
                          <small className="text-success font-monospace">{app.rescheduledTime || app.preferredTime}</small>
                        </td>
                        <td>{renderStatusBadge(app.status)}</td>
                        <td className="text-end">
                          <div className="btn-group btn-group-sm">
                            <button onClick={() => setSelectedApptDetails(app)} className="btn btn-outline-primary" title="Details">
                              <i className="fa-solid fa-eye"></i>
                            </button>
                            {app.status === 'pending' && (
                              <button onClick={() => handleConfirm(app._id)} className="btn btn-success" title="Confirm">
                                <i className="fa-solid fa-check"></i>
                              </button>
                            )}
                            <button onClick={() => { setRescheduleModalAppt(app); setRescheduleDate(new Date(app.preferredDate).toISOString().split('T')[0]); }} className="btn btn-outline-warning" title="Reschedule">
                              <i className="fa-solid fa-clock-rotate-left"></i>
                            </button>
                            {app.status === 'confirmed' && (
                              <button onClick={() => handleComplete(app._id)} className="btn btn-outline-secondary" title="Mark Complete">
                                <i className="fa-solid fa-circle-check"></i>
                              </button>
                            )}
                            {app.status !== 'cancelled' && (
                              <button onClick={() => setCancelModalAppt(app)} className="btn btn-outline-danger" title="Cancel">
                                <i className="fa-solid fa-xmark"></i>
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Pagination Controls */}
            <div className="d-flex justify-content-between align-items-center mt-4">
              <span className="text-muted small">Showing page {page} of {totalPages} ({totalAppts} total items)</span>
              <div className="btn-group">
                <button disabled={page <= 1} onClick={() => setPage(page - 1)} className="btn btn-outline-secondary btn-sm">Previous</button>
                <button disabled={page >= totalPages} onClick={() => setPage(page + 1)} className="btn btn-outline-secondary btn-sm">Next</button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Calendar Grid */}
        {activeTab === 'calendar' && (
          <div className="bg-white cs_radius_20 p-4 shadow-sm">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="btn-group">
                <button onClick={() => { const d = new Date(currentWeekStart); d.setDate(d.getDate() - 7); setCurrentWeekStart(d); }} className="btn btn-outline-secondary btn-sm">&lt; Previous Week</button>
                <button onClick={() => { const d = new Date(currentWeekStart); d.setDate(d.getDate() + 7); setCurrentWeekStart(d); }} className="btn btn-outline-secondary btn-sm">Next Week &gt;</button>
              </div>
              <h5 className="mb-0 fw-bold">
                Week of {currentWeekStart.toLocaleDateString()}
              </h5>
            </div>

            {/* Interactive Grid */}
            <div className="table-responsive" style={{ maxHeight: '600px' }}>
              <table className="table table-bordered text-center align-middle">
                <thead className="table-light position-sticky top-0 z-1">
                  <tr>
                    <th style={{ width: '80px' }}>Time</th>
                    {weekDays.map((d, i) => (
                      <th key={i}>
                        <div>{['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d.getDay()]}</div>
                        <small className="text-muted">{d.getMonth()+1}/{d.getDate()}</small>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'].map((slot) => (
                    <tr key={slot}>
                      <td className="fw-bold bg-light small">{slot}</td>
                      {weekDays.map((d, i) => {
                        const dateStr = d.toISOString().split('T')[0];
                        const matched = calendarAppts.filter((app) => {
                          const appDate = new Date(app.rescheduledDate || app.preferredDate).toISOString().split('T')[0];
                          const appTime = app.rescheduledTime || app.preferredTime;
                          return appDate === dateStr && appTime === slot;
                        });

                        return (
                          <td key={i} className="p-1" style={{ height: '50px', minWidth: '120px' }}>
                            {matched.map((app) => (
                              <div
                                key={app._id}
                                onClick={() => setSelectedApptDetails(app)}
                                className={`p-1 cs_radius_5 text-white small cursor-pointer text-truncate mb-1 ${
                                  app.status === 'confirmed' ? 'bg-success' : app.status === 'pending' ? 'bg-warning text-dark' : 'bg-secondary'
                                }`}
                                style={{ cursor: 'pointer', fontSize: '11px' }}
                              >
                                {app.patientName} ({app.serviceType.split('-')[0]})
                              </div>
                            ))}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: Summary & Reports (Print-Friendly) */}
        {activeTab === 'summary' && (
          <div className="bg-white cs_radius_20 p-4 shadow-sm">
            <div className="d-flex justify-content-between align-items-center mb-4 d-print-none">
              <div className="btn-group">
                <button onClick={() => setSummaryMode('daily')} className={`btn btn-sm ${summaryMode === 'daily' ? 'btn-success' : 'btn-outline-secondary'}`}>Daily Breakdown</button>
                <button onClick={() => setSummaryMode('weekly')} className={`btn btn-sm ${summaryMode === 'weekly' ? 'btn-success' : 'btn-outline-secondary'}`}>Weekly Matrix</button>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <input type="date" className="form-control form-control-sm" value={summaryDateStr} onChange={(e) => setSummaryDateStr(e.target.value)} />
                <button onClick={() => window.print()} className="btn btn-outline-dark btn-sm">
                  <i className="fa-solid fa-print me-1"></i> Print Report
                </button>
              </div>
            </div>

            {/* Printable Report Content */}
            <div className="p-4 border cs_radius_15">
              <div className="text-center mb-4">
                <h3 className="cs_bold cs_primary_color mb-1">First Choice Medical Services</h3>
                <h5 className="text-muted">{summaryMode === 'daily' ? `Daily Summary Report — ${summaryDateStr}` : 'Weekly Service Summary Report'}</h5>
              </div>

              {summaryMode === 'daily' ? (
                <div>
                  <h6 className="fw-bold mb-3 border-bottom pb-2">Schedule for {summaryDateStr}:</h6>
                  <ul className="list-group list-group-flush">
                    {['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'].map((slot) => {
                      const slotAppts = appointments.filter((a) => (a.rescheduledTime || a.preferredTime) === slot);
                      return (
                        <li key={slot} className="list-group-item d-flex justify-content-between align-items-center">
                          <span className="fw-bold me-3" style={{ width: '80px' }}>{slot}</span>
                          <span className="flex-grow-1">
                            {slotAppts.length === 0 ? (
                              <span className="text-muted small">No bookings</span>
                            ) : (
                              slotAppts.map((a) => (
                                <span key={a._id} className="badge bg-light text-dark border me-2">
                                  {a.patientName} — {a.serviceType} ({a.status})
                                </span>
                              ))
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                <table className="table table-bordered align-middle text-center">
                  <thead className="table-light">
                    <tr>
                      <th>Day</th>
                      <th>Home Nursing</th>
                      <th>Elderly Care</th>
                      <th>Postnatal Care</th>
                      <th>Physiotherapy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                      <tr key={day}>
                        <td className="fw-bold">{day}</td>
                        <td>{Math.floor(Math.random() * 5)}</td>
                        <td>{Math.floor(Math.random() * 4)}</td>
                        <td>{Math.floor(Math.random() * 3)}</td>
                        <td>{Math.floor(Math.random() * 4)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}

        {/* Tab 5: Admin Profile */}
        {activeTab === 'profile' && (
          <div className="bg-white cs_radius_20 p-4 p-md-5 shadow-sm max-w-700">
            <h4 className="cs_fs_20 cs_semibold mb-4">Administrator Account Settings</h4>
            {profileMsg && <div className="alert alert-success">{profileMsg}</div>}
            {profileError && <div className="alert alert-danger">{profileError}</div>}

            <form onSubmit={handleUpdateProfile}>
              <div className="mb-3">
                <label className="form-label fw-bold">Admin Full Name</label>
                <input type="text" className="form-control" value={fullName} onChange={(e) => setFullName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Qatar Phone Number</label>
                <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <hr className="my-4" />
              <h5 className="cs_fs_18 cs_semibold mb-3">Change Administrator Password</h5>
              <div className="mb-3">
                <label className="form-label">Current Password</label>
                <input type="password" className="form-control" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">New Password</label>
                  <input type="password" className="form-control" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Confirm New Password</label>
                  <input type="password" className="form-control" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
                </div>
              </div>
              <button type="submit" disabled={profileLoading} className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5 py-2 px-4">
                {profileLoading ? 'Saving...' : 'Update Admin Credentials'}
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Appointment Details Inspector Modal */}
      {selectedApptDetails && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content cs_radius_15">
              <div className="modal-header cs_secondary_bg text-white">
                <h5 className="modal-title">Appointment Inspector</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setSelectedApptDetails(null)}></button>
              </div>
              <div className="modal-body">
                <p><strong>Patient Name:</strong> {selectedApptDetails.patientName}</p>
                <p><strong>Email:</strong> {selectedApptDetails.patientEmail}</p>
                <p><strong>Phone:</strong> {selectedApptDetails.patientPhone}</p>
                <p><strong>Service:</strong> <span className="text-capitalize">{selectedApptDetails.serviceType}</span></p>
                <p><strong>Date & Time:</strong> {new Date(selectedApptDetails.rescheduledDate || selectedApptDetails.preferredDate).toLocaleDateString()} @ {selectedApptDetails.rescheduledTime || selectedApptDetails.preferredTime}</p>
                <p><strong>Status:</strong> {renderStatusBadge(selectedApptDetails.status)}</p>
                <p><strong>Patient Notes:</strong> {selectedApptDetails.notes || 'None'}</p>
                <p><strong>Admin Notes:</strong> {selectedApptDetails.adminNotes || 'None'}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setSelectedApptDetails(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reschedule Modal */}
      {rescheduleModalAppt && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content cs_radius_15">
              <div className="modal-header">
                <h5 className="modal-title">Reschedule Appointment</h5>
                <button type="button" className="btn-close" onClick={() => setRescheduleModalAppt(null)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label fw-bold">New Date</label>
                  <input type="date" className="form-control" value={rescheduleDate} onChange={(e) => setRescheduleDate(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">New Time Slot</label>
                  <select className="form-select" value={rescheduleTime} onChange={(e) => setRescheduleTime(e.target.value)}>
                    {['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'].map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setRescheduleModalAppt(null)}>Cancel</button>
                <button type="button" className="btn btn-warning" onClick={handleRescheduleSubmit}>Confirm Reschedule</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cancel Modal */}
      {cancelModalAppt && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content cs_radius_15">
              <div className="modal-header">
                <h5 className="modal-title text-danger">Cancel Appointment</h5>
                <button type="button" className="btn-close" onClick={() => setCancelModalAppt(null)}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to cancel the booking for <strong>{cancelModalAppt.patientName}</strong>?</p>
                <textarea className="form-control" rows="3" placeholder="Reason for cancellation..." value={cancelReason} onChange={(e) => setCancelReason(e.target.value)}></textarea>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setCancelModalAppt(null)}>Keep</button>
                <button type="button" className="btn btn-danger" onClick={handleCancelSubmit}>Confirm Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
