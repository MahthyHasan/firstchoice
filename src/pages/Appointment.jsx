import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import { useAuth } from '../context/AuthContext';

const Appointment = () => {
  const { user, fetchWithAuth } = useAuth();

  const [form, setForm] = useState({
    name: user?.fullName || '',
    phone: user?.phone || '',
    email: user?.email || '',
    serviceCategory: 'home-nursing',
    careDuration: '09:00',
    preferredDate: new Date().toISOString().split('T')[0],
    location: '',
    notes: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [successAppt, setSuccessAppt] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSubmitting(true);

    const payload = {
      patientName: form.name,
      patientEmail: form.email,
      patientPhone: form.phone,
      serviceType: form.serviceCategory,
      preferredDate: form.preferredDate,
      preferredTime: form.careDuration,
      location: form.location,
      notes: form.notes,
    };

    try {
      let res;
      if (user && user.token) {
        res = await fetchWithAuth('/api/appointments', {
          method: 'POST',
          body: JSON.stringify({
            serviceType: form.serviceCategory,
            preferredDate: form.preferredDate,
            preferredTime: form.careDuration,
            notes: [form.location ? `Location: ${form.location}` : '', form.notes || ''].filter(Boolean).join(' | '),
          }),
        });
      } else {
        res = await fetch('/api/appointments/public', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }

      const data = await res.json();
      if (data.success) {
        setSuccessAppt(data.data);
      } else {
        setErrorMsg(data.message || 'Failed to submit appointment request.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <main>
        {/* Start Page Header */}
        <PageHeader title="Book Home Healthcare Service" subTitle="Professional home nursing, elderly care & postnatal support across Qatar." breadcrumb={[{ label: 'Book Appointment' }]} />
        {/* End Page Header */}

        {/* Start Appointment Section */}
        <section className="cs_appointment_section_5 py-5">
          <div className="container">
            <div className="row cs_gap_y_30">
              <div className="col-lg-6">
                <div className="cs_appointment_content">
                  <div className="cs_section_heading_style_1 cs_mb_24">
                    <h2 className="cs_section_title cs_fs_40 cs_semibold cs_mb_6">Why Choose First Choice?</h2>
                    <p className="cs_section_desc mb-0">Directly Employed Staff • Strict Pre-Employment Training • 24/7 Home Nursing</p>
                  </div>
                  <ul className="cs_appountment_features cs_mb_58 cs_mb_lg_30 cs_mp_0">
                    <li>
                      <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                      <span><strong className="cs_semibold cs_primary_color">100% Direct Employment</strong> - No sub-contractors or independent contractors</span>
                    </li>
                    <li>
                      <img src="/assets/img/icons/nurse-line.svg" alt="Specialists icon" />
                      <span><strong className="cs_semibold cs_primary_color">Strict Recruitment & Training</strong> - Experienced & qualified caretakers</span>
                    </li>
                    <li>
                      <img src="/assets/img/icons/article-line.svg" alt="Document icon" />
                      <span><strong className="cs_semibold cs_primary_color">Individualized Attention</strong> - Tailored patient care and peace of mind</span>
                    </li>
                  </ul>
                  <div className="cs_content_bottom">
                    <div className="cs_appointment_img cs_parallax cs_radius_20 position-relative">
                      <img src="/assets/img/appointment_img_5.webp" alt="First Choice Nurse" />
                      <div className="cs_appointment_help_cta cs_fs_20 cs_semibold cs_white_color">
                        <span>Need Assistance? Call Us:</span>
                        <a href="tel:+97441402630" aria-label="Call +974 4140 2630">+974 4140 2630</a> / <a href="tel:+97450002334" aria-label="Call +974 5000 2334">+974 5000 2334</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cs_appointment_form_wrapper bg-white p-4 cs_radius_20 border shadow-sm">
                  <div className="cs_appointment_heading cs_mb_24">
                    <h3 className="cs_fs_32 cs_semibold cs_mb_6">Request Home Care Appointment</h3>
                    <p className="mb-0 text-muted">Fill out the details below. Our team in Doha will confirm your booking promptly.</p>
                  </div>

                  {errorMsg && <div className="alert alert-danger mb-4">{errorMsg}</div>}

                  {successAppt ? (
                    <div className="text-center py-4">
                      <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center p-3 mb-3" style={{ width: '70px', height: '70px' }}>
                        <i className="fa-solid fa-check fs-2"></i>
                      </div>
                      <h4 className="fw-bold mb-2">Appointment Request Submitted!</h4>
                      <p className="text-muted mb-3">Reference ID: <strong className="font-monospace text-dark">{successAppt._id}</strong></p>

                      <div className="card p-3 bg-light border text-start mb-4">
                        <p className="mb-1"><strong>Patient:</strong> {successAppt.patientName} ({successAppt.patientPhone})</p>
                        <p className="mb-1"><strong>Service:</strong> {successAppt.serviceType?.replace('-', ' ')}</p>
                        <p className="mb-1"><strong>Date & Time:</strong> {new Date(successAppt.preferredDate).toLocaleDateString()} at {successAppt.preferredTime}</p>
                        <p className="mb-0"><strong>Status:</strong> <span className="badge bg-warning text-dark">Pending Confirmation</span></p>
                      </div>

                      <div className="d-flex justify-content-center gap-2">
                        <button onClick={() => setSuccessAppt(null)} className="btn btn-outline-secondary btn-sm">
                          Book Another Appointment
                        </button>
                        <Link to="/login" className="btn btn-success btn-sm">
                          Sign In to Track Booking
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="cs_appointment_form_1 row cs_gap_y_24">
                      <div className="col-12">
                        <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                          <label htmlFor="name">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="cs_form_field"
                            placeholder="Enter patient / requester name"
                            value={form.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                          <label htmlFor="phone">Phone Number (Qatar) *</label>
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="cs_form_field"
                            placeholder="+974 XXXX XXXX"
                            value={form.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                          <label htmlFor="email">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="cs_form_field"
                            placeholder="patient@example.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                          <label htmlFor="serviceCategory">Service Category *</label>
                          <select
                            className="cs_form_field"
                            name="serviceCategory"
                            id="serviceCategory"
                            value={form.serviceCategory}
                            onChange={handleChange}
                          >
                            <option value="home-nursing">Home Nursing Care</option>
                            <option value="elderly-care">Elderly & Senior Care</option>
                            <option value="postnatal-care">Postnatal Confinement Care</option>
                            <option value="physiotherapy">Physiotherapy Services</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                          <label htmlFor="careDuration">Preferred Time Slot *</label>
                          <select
                            className="cs_form_field"
                            name="careDuration"
                            id="careDuration"
                            value={form.careDuration}
                            onChange={handleChange}
                          >
                            <option value="08:00">08:00 AM</option>
                            <option value="09:00">09:00 AM</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="14:00">02:00 PM</option>
                            <option value="15:00">03:00 PM</option>
                            <option value="16:00">04:00 PM</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="cs_input_wrap position-relative cs_gray2_bg cs_radius_5">
                          <label htmlFor="pref_date">Preferred Start Date *</label>
                          <input
                            type="date"
                            name="preferredDate"
                            id="pref_date"
                            className="cs_form_field"
                            min={new Date().toISOString().split('T')[0]}
                            value={form.preferredDate}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                          <label htmlFor="location_area">Location in Qatar</label>
                          <input
                            type="text"
                            name="location"
                            id="location_area"
                            className="cs_form_field"
                            placeholder="e.g. Doha, Al Rayyan, Pearl"
                            value={form.location}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                          <label htmlFor="patient_notes">Special Requirements / Notes</label>
                          <textarea
                            name="notes"
                            id="patient_notes"
                            rows="3"
                            className="cs_form_field"
                            placeholder="Please describe any medical conditions, mobility needs, or preferences."
                            value={form.notes}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5 w-100 justify-content-center"
                        >
                          <span>{submitting ? 'Submitting Request...' : 'Confirm Appointment Request'}</span>
                          <img src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Appointment;
