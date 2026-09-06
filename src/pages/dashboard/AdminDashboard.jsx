import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard = () => {
  const { user, logout, fetchWithAuth, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const getInitialTab = () => {
    if (location.pathname.includes('/staff')) return 'staff';
    if (location.pathname.includes('/appointments')) return 'appointments';
    if (location.pathname.includes('/calendar')) return 'calendar';
    if (location.pathname.includes('/intake')) return 'intake';
    if (location.pathname.includes('/profile')) return 'profile';
    return 'overview';
  };

  const [activeTab, setActiveTab] = useState(getInitialTab());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Analytics & Stats State
  const [stats, setStats] = useState({ total: 0, pending: 0, confirmed: 0, completed: 0, cancelled: 0, lateCancellations: 0, byService: {} });
  const [heatmapMatrix, setHeatmapMatrix] = useState([]);

  // Staff Management State
  const [staffList, setStaffList] = useState([]);
  const [staffModalOpen, setStaffModalOpen] = useState(false);
  const [editingStaff, setEditingStaff] = useState(null);
  const [staffForm, setStaffForm] = useState({
    name: '',
    serviceTypes: ['home-nursing'],
    workingDays: [1, 2, 3, 4, 5],
    workingHours: { start: '08:00', end: '17:00' },
    isActive: true,
  });

  // Appointments Table State
  const [appointments, setAppointments] = useState([]);
  const [totalAppts, setTotalAppts] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loadingAppts, setLoadingAppts] = useState(false);
  const [expandedRowId, setExpandedRowId] = useState(null);

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
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  });
  const [calendarAppts, setCalendarAppts] = useState([]);
  const [draggedAppt, setDraggedAppt] = useState(null);

  // Intake Form Schema Editor State
  const [selectedIntakeService, setSelectedIntakeService] = useState('home-nursing');
  const [intakeFields, setIntakeFields] = useState([]);
  const [intakeSavedMsg, setIntakeSavedMsg] = useState('');

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

  // Load summary stats & heatmap
  const loadStats = async () => {
    try {
      const res = await fetchWithAuth('/api/appointments/summary');
      const data = await res.json();
      if (data.success) setStats(data.data);

      const heatRes = await fetchWithAuth('/api/appointments/heatmap');
      const heatData = await heatRes.json();
      if (heatData.success) setHeatmapMatrix(heatData.data);
    } catch (e) {
      console.error('Failed to load stats:', e);
    }
  };

  // Load staff list
  const loadStaff = async () => {
    try {
      const res = await fetchWithAuth('/api/staff');
      const data = await res.json();
      if (data.success) setStaffList(data.data || []);
    } catch (e) {
      console.error('Failed to load staff:', e);
    }
  };

  // Load appointments list
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

  // Load Intake Form Schema for selected service
  const loadIntakeForm = async (service) => {
    try {
      const res = await fetch(`/api/intake-forms/${service}`);
      const data = await res.json();
      if (data.success && data.data?.fields) {
        setIntakeFields(data.data.fields);
      } else {
        setIntakeFields([]);
      }
    } catch (err) {
      console.error('Failed to load intake schema:', err);
    }
  };

  useEffect(() => {
    loadStats();
    loadStaff();
  }, []);

  useEffect(() => {
    if (activeTab === 'appointments' || activeTab === 'overview') {
      loadAppointments();
    }
    if (activeTab === 'intake') {
      loadIntakeForm(selectedIntakeService);
    }
  }, [activeTab, page, filterStatus, filterService, filterSearch, filterStartDate, filterEndDate, selectedIntakeService]);

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
        if (data.success) setCalendarAppts(data.data.items || []);
      };
      loadWeekAppts();
    }
  }, [activeTab, currentWeekStart]);

  // Real-time quiet polling loop (30s)
  useEffect(() => {
    const interval = setInterval(() => {
      loadStats();
      if (activeTab === 'appointments') loadAppointments();
    }, 30000);
    return () => clearInterval(interval);
  }, [activeTab]);

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

  const handleAdminNotesChange = async (id, adminNotes) => {
    try {
      await fetchWithAuth(`/api/appointments/${id}/confirm`, {
        method: 'PATCH',
        body: JSON.stringify({ adminNotes }),
      });
    } catch (e) {
      console.error('Failed to save notes');
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

  // Staff Roster Form Actions
  const handleSaveStaff = async (e) => {
    e.preventDefault();
    try {
      if (editingStaff) {
        await fetchWithAuth(`/api/staff/${editingStaff._id}`, {
          method: 'PATCH',
          body: JSON.stringify(staffForm),
        });
      } else {
        await fetchWithAuth('/api/staff', {
          method: 'POST',
          body: JSON.stringify(staffForm),
        });
      }
      setStaffModalOpen(false);
      setEditingStaff(null);
      loadStaff();
    } catch (err) {
      alert('Failed to save staff');
    }
  };

  const toggleStaffStatus = async (staffMember) => {
    try {
      await fetchWithAuth(`/api/staff/${staffMember._id}`, {
        method: 'PATCH',
        body: JSON.stringify({ isActive: !staffMember.isActive }),
      });
      loadStaff();
    } catch (err) {
      alert('Failed to update status');
    }
  };

  // Intake Form Schema Field Actions
  const handleSaveIntakeSchema = async () => {
    try {
      const res = await fetchWithAuth(`/api/intake-forms/${selectedIntakeService}`, {
        method: 'PATCH',
        body: JSON.stringify({ fields: intakeFields }),
      });
      const data = await res.json();
      if (data.success) {
        setIntakeSavedMsg('Intake form schema saved successfully!');
        setTimeout(() => setIntakeSavedMsg(''), 3000);
      }
    } catch (err) {
      alert('Failed to save intake schema');
    }
  };

  const handleAddIntakeField = () => {
    const newField = {
      id: `field_${Date.now()}`,
      label: 'New Health Question',
      type: 'text',
      options: [],
      required: false,
    };
    setIntakeFields([...intakeFields, newField]);
  };

  const handleRemoveIntakeField = (idx) => {
    setIntakeFields(intakeFields.filter((_, i) => i !== idx));
  };

  const handleFieldChange = (idx, key, val) => {
    const updated = [...intakeFields];
    updated[idx][key] = val;
    setIntakeFields(updated);
  };

  // Drag and Drop for Calendar Reschedule
  const handleDragStart = (appt) => {
    setDraggedAppt(appt);
  };

  const handleDropSlot = async (dateStr, timeSlot) => {
    if (!draggedAppt) return;
    try {
      const res = await fetchWithAuth(`/api/appointments/${draggedAppt._id}/reschedule`, {
        method: 'PATCH',
        body: JSON.stringify({
          rescheduledDate: dateStr,
          rescheduledTime: timeSlot,
          adminNotes: `Rescheduled via Calendar Drag & Drop to ${dateStr} ${timeSlot}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        const start = new Date(currentWeekStart);
        const end = new Date(currentWeekStart);
        end.setDate(end.getDate() + 6);

        const query = new URLSearchParams({
          startDate: start.toISOString().split('T')[0],
          endDate: end.toISOString().split('T')[0],
          limit: '100',
        });
        const refRes = await fetchWithAuth(`/api/appointments?${query.toString()}`);
        const refData = await refRes.json();
        if (refData.success) setCalendarAppts(refData.data.items || []);
      }
    } catch (err) {
      alert('Failed to reschedule via drag and drop');
    } finally {
      setDraggedAppt(null);
    }
  };

  // Bulk Actions
  const handleSelectAll = (e) => {
    if (e.target.checked) setSelectedIds(appointments.map((a) => a._id));
    else setSelectedIds([]);
  };

  const handleSelectOne = (id) => {
    if (selectedIds.includes(id)) setSelectedIds(selectedIds.filter((item) => item !== id));
    else setSelectedIds([...selectedIds, id]);
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

  // CSV Export
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
        setProfileMsg('Admin profile updated successfully!');
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

  const renderStatusBadge = (status, lateCancel) => {
    if (lateCancel) return <span className="badge bg-danger px-3 py-2">Late Cancel</span>;
    switch (status) {
      case 'confirmed': return <span className="badge bg-success px-3 py-2">Confirmed</span>;
      case 'pending': return <span className="badge bg-warning text-dark px-3 py-2">Pending</span>;
      case 'completed': return <span className="badge bg-secondary px-3 py-2">Completed</span>;
      case 'cancelled': return <span className="badge bg-danger px-3 py-2">Cancelled</span>;
      default: return <span className="badge bg-light text-dark px-3 py-2">{status}</span>;
    }
  };

  const weekDays = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(currentWeekStart);
    d.setDate(d.getDate() + i);
    return d;
  });

  return (
    <div className="d-flex min-vh-100 bg-light">
      {/* Mobile Top Header */}
      <div className="d-md-none position-fixed top-0 start-0 end-0 bg-dark text-white p-3 d-flex justify-content-between align-items-center z-3">
        <img src="/assets/img/logofull.png" alt="First Choice" style={{ maxHeight: '35px' }} />
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="btn btn-outline-light btn-sm">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Sidebar Navigation */}
      <div
        className={`bg-dark text-white d-flex flex-column ${
          mobileMenuOpen ? 'position-fixed top-0 bottom-0 start-0 z-3 w-260' : 'd-none d-md-flex'
        }`}
        style={{ width: '260px', flexShrink: 0, minHeight: '100vh' }}
      >
        <div className="p-4 border-bottom border-secondary text-center">
          <Link to="/">
            <img src="/assets/img/logofull.png" alt="First Choice Medical" style={{ maxHeight: '48px' }} />
          </Link>
          <div className="mt-3">
            <span className="badge bg-warning text-dark text-uppercase fw-bold">Admin Control Center</span>
          </div>
        </div>

        <div className="p-3 flex-grow-1">
          <ul className="nav nav-pills flex-column gap-2">
            <li className="nav-item">
              <button
                className={`nav-link text-start w-100 py-3 px-3 fs-6 d-flex align-items-center gap-3 ${activeTab === 'overview' ? 'bg-success text-white fw-bold' : 'text-white-50'}`}
                onClick={() => { setActiveTab('overview'); navigate('/dashboard/admin'); setMobileMenuOpen(false); }}
              >
                <i className="fa-solid fa-chart-line"></i>
                <span>Analytics & Heatmap</span>
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link text-start w-100 py-3 px-3 fs-6 d-flex align-items-center gap-3 ${activeTab === 'staff' ? 'bg-success text-white fw-bold' : 'text-white-50'}`}
                onClick={() => { setActiveTab('staff'); navigate('/dashboard/admin/staff'); setMobileMenuOpen(false); }}
              >
                <i className="fa-solid fa-user-nurse"></i>
                <span>Staff Management</span>
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link text-start w-100 py-3 px-3 fs-6 d-flex align-items-center gap-3 ${activeTab === 'appointments' ? 'bg-success text-white fw-bold' : 'text-white-50'}`}
                onClick={() => { setActiveTab('appointments'); navigate('/dashboard/admin/appointments'); setMobileMenuOpen(false); }}
              >
                <i className="fa-solid fa-list-check"></i>
                <span>Appointments</span>
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link text-start w-100 py-3 px-3 fs-6 d-flex align-items-center gap-3 ${activeTab === 'calendar' ? 'bg-success text-white fw-bold' : 'text-white-50'}`}
                onClick={() => { setActiveTab('calendar'); navigate('/dashboard/admin/calendar'); setMobileMenuOpen(false); }}
              >
                <i className="fa-solid fa-calendar-days"></i>
                <span>Drag & Drop Grid</span>
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link text-start w-100 py-3 px-3 fs-6 d-flex align-items-center gap-3 ${activeTab === 'intake' ? 'bg-success text-white fw-bold' : 'text-white-50'}`}
                onClick={() => { setActiveTab('intake'); navigate('/dashboard/admin/intake'); setMobileMenuOpen(false); }}
              >
                <i className="fa-solid fa-file-signature"></i>
                <span>Intake Form Editor</span>
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link text-start w-100 py-3 px-3 fs-6 d-flex align-items-center gap-3 ${activeTab === 'profile' ? 'bg-success text-white fw-bold' : 'text-white-50'}`}
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

      {/* Main Content Area */}
      <div className="flex-grow-1 p-4 p-md-5 overflow-auto mt-5 mt-md-0">
        <div className="d-flex justify-content-between align-items-center mb-4 bg-white p-3 rounded shadow-sm border">
          <div>
            <h2 className="fs-4 fw-bold mb-0 text-capitalize text-dark">
              {activeTab === 'overview' && 'System Analytics & Demand Heatmap'}
              {activeTab === 'staff' && 'Healthcare Staff Roster & Capacity Management'}
              {activeTab === 'appointments' && 'Appointment Management & Intake Viewer'}
              {activeTab === 'calendar' && 'Interactive Drag & Drop Schedule Grid'}
              {activeTab === 'intake' && 'Pre-Appointment Intake Form Schema Editor'}
              {activeTab === 'profile' && 'Admin Profile Settings'}
            </h2>
            <p className="text-muted mb-0 small">First Choice Enterprise Management Platform</p>
          </div>
          <Link to="/" className="btn btn-outline-success btn-sm d-none d-sm-inline-block">
            <i className="fa-solid fa-globe me-1"></i> Public Site
          </Link>
        </div>

        {/* Tab 1: Overview & Heatmap */}
        {activeTab === 'overview' && (
          <div>
            <div className="row g-4 mb-4">
              <div className="col-md-3">
                <div className="p-4 bg-white rounded border-start border-4 border-primary shadow-sm">
                  <div className="text-muted small fw-bold">TOTAL BOOKINGS</div>
                  <div className="display-6 fw-bold text-dark mt-2">{stats.total}</div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-4 bg-white rounded border-start border-4 border-warning shadow-sm">
                  <div className="text-muted small fw-bold">PENDING APPROVAL</div>
                  <div className="display-6 fw-bold text-warning mt-2">{stats.pending}</div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-4 bg-white rounded border-start border-4 border-success shadow-sm">
                  <div className="text-muted small fw-bold">CONFIRMED</div>
                  <div className="display-6 fw-bold text-success mt-2">{stats.confirmed}</div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-4 bg-white rounded border-start border-4 border-danger shadow-sm">
                  <div className="text-muted small fw-bold">LATE CANCELLATIONS</div>
                  <div className="display-6 fw-bold text-danger mt-2">{stats.lateCancellations || 0}</div>
                </div>
              </div>
            </div>

            {/* SVG 30-Day Trend Chart */}
            <div className="bg-white rounded p-4 shadow-sm mb-4 border">
              <h4 className="fs-5 fw-bold mb-4">30-Day Booking Velocity Trend</h4>
              <div className="p-3 bg-light rounded">
                <svg viewBox="0 0 600 150" className="w-100" style={{ maxHeight: '180px' }}>
                  <polyline
                    fill="none"
                    stroke="#2e7d32"
                    strokeWidth="3"
                    points="0,120 50,110 100,90 150,95 200,60 250,75 300,40 350,55 400,30 450,45 500,20 550,25 600,10"
                  />
                  <circle cx="600" cy="10" r="5" fill="#1b5e20" />
                </svg>
              </div>
            </div>

            {/* 7x24 Peak Hours Heatmap Grid */}
            <div className="bg-white rounded p-4 shadow-sm mb-4 border">
              <h4 className="fs-5 fw-bold mb-3">Peak Booking Hours Heatmap (7 Days × 24 Hours)</h4>
              <p className="text-muted small mb-3">Color intensity indicates volume of appointment requests.</p>

              <div className="table-responsive">
                <table className="table table-bordered text-center align-middle" style={{ fontSize: '11px' }}>
                  <thead className="table-light">
                    <tr>
                      <th>Day</th>
                      {Array.from({ length: 24 }).map((_, h) => (
                        <th key={h}>{h}h</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((dayName, dayIdx) => (
                      <tr key={dayName}>
                        <td className="fw-bold bg-light">{dayName}</td>
                        {Array.from({ length: 24 }).map((_, hourIdx) => {
                          const count = heatmapMatrix[dayIdx]?.[hourIdx] || 0;
                          const bgAlpha = Math.min(1, count * 0.3);
                          const bgColor = count > 0 ? `rgba(46, 125, 50, ${0.2 + bgAlpha * 0.8})` : '#f8f9fa';

                          return (
                            <td key={hourIdx} style={{ backgroundColor: bgColor, color: count > 0 ? '#fff' : '#aaa', fontWeight: count > 0 ? 'bold' : 'normal' }}>
                              {count || '-'}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Staff Roster Management */}
        {activeTab === 'staff' && (
          <div className="bg-white rounded p-4 shadow-sm border">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="fs-5 fw-bold mb-0">Healthcare Staff Roster</h4>
              <button
                onClick={() => {
                  setEditingStaff(null);
                  setStaffForm({ name: '', serviceTypes: ['home-nursing'], workingDays: [1,2,3,4,5], workingHours: { start: '08:00', end: '17:00' }, isActive: true });
                  setStaffModalOpen(true);
                }}
                className="btn btn-success"
              >
                + Add Staff Member
              </button>
            </div>

            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Name</th>
                    <th>Supported Services</th>
                    <th>Working Days</th>
                    <th>Working Hours</th>
                    <th>Status</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {staffList.map((staff) => (
                    <tr key={staff._id}>
                      <td className="fw-bold">{staff.name}</td>
                      <td>
                        {staff.serviceTypes?.map((s) => (
                          <span key={s} className="badge bg-light text-dark border me-1 text-capitalize">{s.replace('-', ' ')}</span>
                        ))}
                      </td>
                      <td>{staff.workingDays?.map((d) => ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d]).join(', ')}</td>
                      <td>{staff.workingHours?.start} - {staff.workingHours?.end}</td>
                      <td>
                        <span className={`badge ${staff.isActive ? 'bg-success' : 'bg-secondary'}`}>
                          {staff.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="text-end">
                        <button onClick={() => toggleStaffStatus(staff)} className="btn btn-sm btn-outline-warning me-2">
                          Toggle Active
                        </button>
                        <button
                          onClick={() => {
                            setEditingStaff(staff);
                            setStaffForm({
                              name: staff.name,
                              serviceTypes: staff.serviceTypes,
                              workingDays: staff.workingDays,
                              workingHours: staff.workingHours || { start: '08:00', end: '17:00' },
                              isActive: staff.isActive,
                            });
                            setStaffModalOpen(true);
                          }}
                          className="btn btn-sm btn-outline-primary"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Appointments List & Intake Viewer */}
        {activeTab === 'appointments' && (
          <div className="bg-white rounded p-4 shadow-sm border">
            <div className="row g-3 mb-4">
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search patient, email, phone..."
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
              <div className="col-md-5 text-end">
                <button onClick={exportCSV} className="btn btn-outline-success">
                  <i className="fa-solid fa-file-csv me-1"></i> Export CSV
                </button>
              </div>
            </div>

            {selectedIds.length > 0 && (
              <div className="alert alert-info d-flex justify-content-between align-items-center mb-3">
                <span>Selected <strong>{selectedIds.length}</strong> items</span>
                <div className="d-flex gap-2">
                  <button onClick={handleBulkConfirm} className="btn btn-success btn-sm">Bulk Confirm</button>
                  <button onClick={handleBulkCancel} className="btn btn-danger btn-sm">Bulk Cancel</button>
                </div>
              </div>
            )}

            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th><input type="checkbox" onChange={handleSelectAll} checked={selectedIds.length === appointments.length && appointments.length > 0} /></th>
                    <th>Patient</th>
                    <th>Assigned Staff</th>
                    <th>Service</th>
                    <th>Date & Time</th>
                    <th>Status</th>
                    <th>Admin Notes</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((app) => (
                    <React.Fragment key={app._id}>
                      <tr>
                        <td><input type="checkbox" checked={selectedIds.includes(app._id)} onChange={() => handleSelectOne(app._id)} /></td>
                        <td>
                          <div className="fw-bold">{app.patientName}</div>
                          <small className="text-muted">{app.patientPhone}</small>
                        </td>
                        <td>
                          {app.staffId?.name ? (
                            <span className="badge bg-info text-dark">{app.staffId.name}</span>
                          ) : (
                            <span className="text-muted small">Auto-Assigned</span>
                          )}
                        </td>
                        <td className="text-capitalize">{app.serviceType.replace('-', ' ')}</td>
                        <td>
                          <div>{new Date(app.rescheduledDate || app.preferredDate).toLocaleDateString()}</div>
                          <small className="text-success font-monospace">{app.rescheduledTime || app.preferredTime}</small>
                        </td>
                        <td>{renderStatusBadge(app.status, app.lateCancellation)}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            defaultValue={app.adminNotes || ''}
                            onBlur={(e) => handleAdminNotesChange(app._id, e.target.value)}
                            placeholder="Add note..."
                          />
                        </td>
                        <td className="text-end">
                          <div className="btn-group btn-group-sm">
                            <button
                              onClick={() => setExpandedRowId(expandedRowId === app._id ? null : app._id)}
                              className="btn btn-outline-info"
                              title="View Intake Responses"
                            >
                              <i className="fa-solid fa-file-medical"></i>
                            </button>
                            {app.status === 'pending' && (
                              <button onClick={() => handleConfirm(app._id)} className="btn btn-success" title="Confirm">
                                <i className="fa-solid fa-check"></i>
                              </button>
                            )}
                            {app.status === 'confirmed' && (
                              <button onClick={() => handleComplete(app._id)} className="btn btn-outline-secondary" title="Complete">
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

                      {/* Expanded Intake Responses Row */}
                      {expandedRowId === app._id && (
                        <tr>
                          <td colSpan="8" className="bg-light p-3">
                            <div className="border rounded p-3 bg-white">
                              <h6 className="fw-bold text-success mb-2">Pre-Appointment Health Intake Responses:</h6>
                              {app.intakeResponses && Object.keys(app.intakeResponses).length > 0 ? (
                                <div className="row g-2">
                                  {Object.entries(app.intakeResponses).map(([k, v]) => (
                                    <div key={k} className="col-md-4">
                                      <small className="text-muted text-uppercase d-block">{k}</small>
                                      <strong>{String(v)}</strong>
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <p className="text-muted small mb-0">No intake responses submitted.</p>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-4">
              <span className="text-muted small">Page {page} of {totalPages} ({totalAppts} total)</span>
              <div className="btn-group">
                <button disabled={page <= 1} onClick={() => setPage(page - 1)} className="btn btn-outline-secondary btn-sm">Previous</button>
                <button disabled={page >= totalPages} onClick={() => setPage(page + 1)} className="btn btn-outline-secondary btn-sm">Next</button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Interactive Drag & Drop Calendar */}
        {activeTab === 'calendar' && (
          <div className="bg-white rounded p-4 shadow-sm border">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="btn-group">
                <button onClick={() => { const d = new Date(currentWeekStart); d.setDate(d.getDate() - 7); setCurrentWeekStart(d); }} className="btn btn-outline-secondary btn-sm">&lt; Prev Week</button>
                <button onClick={() => { const d = new Date(currentWeekStart); d.setDate(d.getDate() + 7); setCurrentWeekStart(d); }} className="btn btn-outline-secondary btn-sm">Next Week &gt;</button>
              </div>
              <h5 className="mb-0 fw-bold">Week of {currentWeekStart.toLocaleDateString()} (Drag & Drop to Reschedule)</h5>
            </div>

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
                          <td
                            key={i}
                            className="p-1"
                            style={{ height: '55px', minWidth: '120px', backgroundColor: matched.length > 0 ? '#e8f5e9' : 'white' }}
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={() => handleDropSlot(dateStr, slot)}
                          >
                            {matched.map((app) => (
                              <div
                                key={app._id}
                                draggable
                                onDragStart={() => handleDragStart(app)}
                                onClick={() => setSelectedApptDetails(app)}
                                className={`p-1 rounded text-white small text-truncate mb-1 ${
                                  app.status === 'confirmed' ? 'bg-success' : app.status === 'pending' ? 'bg-warning text-dark' : 'bg-secondary'
                                }`}
                                style={{ cursor: 'grab', fontSize: '11px' }}
                              >
                                🖐 {app.patientName} ({app.serviceType.split('-')[0]})
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

        {/* Tab 5: Intake Form Editor */}
        {activeTab === 'intake' && (
          <div className="bg-white rounded p-4 shadow-sm border">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="fs-5 fw-bold mb-0">Pre-Appointment Health Questionnaire Schema</h4>
              <button onClick={handleSaveIntakeSchema} className="btn btn-success">
                <i className="fa-solid fa-floppy-disk me-2"></i> Save Questionnaire Schema
              </button>
            </div>

            {intakeSavedMsg && <div className="alert alert-success">{intakeSavedMsg}</div>}

            <div className="mb-4">
              <label className="form-label fw-bold">Select Service to Edit:</label>
              <select
                className="form-select w-auto"
                value={selectedIntakeService}
                onChange={(e) => setSelectedIntakeService(e.target.value)}
              >
                <option value="home-nursing">Home Nursing Care</option>
                <option value="elderly-care">Elderly Care</option>
                <option value="postnatal-care">Postnatal Care</option>
                <option value="physiotherapy">Physiotherapy</option>
              </select>
            </div>

            <div className="card p-4 bg-light mb-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold mb-0">Question Fields ({intakeFields.length})</h6>
                <button onClick={handleAddIntakeField} className="btn btn-sm btn-outline-success">
                  + Add Question Field
                </button>
              </div>

              {intakeFields.map((field, idx) => (
                <div key={field.id || idx} className="card p-3 mb-3 bg-white border">
                  <div className="row g-3 align-items-center">
                    <div className="col-md-3">
                      <label className="form-label small fw-bold">Question ID</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        value={field.id}
                        onChange={(e) => handleFieldChange(idx, 'id', e.target.value)}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label small fw-bold">Field Label / Prompt</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        value={field.label}
                        onChange={(e) => handleFieldChange(idx, 'label', e.target.value)}
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label small fw-bold">Input Type</label>
                      <select
                        className="form-select form-select-sm"
                        value={field.type}
                        onChange={(e) => handleFieldChange(idx, 'type', e.target.value)}
                      >
                        <option value="text">Text Input</option>
                        <option value="number">Number Input</option>
                        <option value="select">Dropdown Select</option>
                        <option value="textarea">Textarea</option>
                        <option value="checkbox">Checkbox</option>
                      </select>
                    </div>
                    <div className="col-md-2 text-end">
                      <button onClick={() => handleRemoveIntakeField(idx)} className="btn btn-sm btn-outline-danger mt-4">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 6: Admin Profile */}
        {activeTab === 'profile' && (
          <div className="bg-white rounded p-4 shadow-sm border max-w-700">
            <h4 className="fs-5 fw-bold mb-4">Admin Profile Settings</h4>

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
                {profileLoading ? 'Saving...' : 'Update Admin Profile'}
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Staff Modal */}
      {staffModalOpen && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded">
              <form onSubmit={handleSaveStaff}>
                <div className="modal-header">
                  <h5 className="modal-title">{editingStaff ? 'Edit Staff Member' : 'Add New Staff Member'}</h5>
                  <button type="button" className="btn-close" onClick={() => setStaffModalOpen(false)}></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label fw-bold">Full Name & Credentials</label>
                    <input
                      type="text"
                      className="form-control"
                      value={staffForm.name}
                      onChange={(e) => setStaffForm({ ...staffForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Supported Services</label>
                    {['home-nursing', 'elderly-care', 'postnatal-care', 'physiotherapy'].map((srv) => (
                      <div key={srv} className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          checked={staffForm.serviceTypes.includes(srv)}
                          onChange={(e) => {
                            if (e.target.checked) setStaffForm({ ...staffForm, serviceTypes: [...staffForm.serviceTypes, srv] });
                            else setStaffForm({ ...staffForm, serviceTypes: staffForm.serviceTypes.filter((x) => x !== srv) });
                          }}
                        />
                        <label className="form-check-label text-capitalize">{srv.replace('-', ' ')}</label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setStaffModalOpen(false)}>Cancel</button>
                  <button type="submit" className="btn btn-success">Save Staff Member</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
