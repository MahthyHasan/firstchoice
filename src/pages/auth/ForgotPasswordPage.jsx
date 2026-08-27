import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setError('');
    setMessage('');

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setMessage(data.message || 'Password reset link sent!');
    } catch (err) {
      setError('Request failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center cs_gray4_bg py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-5">
            <div className="card border-0 shadow-lg cs_radius_20 overflow-hidden">
              <div className="card-header text-center cs_secondary_bg p-4 border-0">
                <Link to="/">
                  <img src="/assets/img/logofull.png" alt="First Choice Medical Services" style={{ maxHeight: '60px' }} />
                </Link>
                <h3 className="cs_fs_24 cs_semibold text-white mt-3 mb-0">Reset Password</h3>
                <p className="cs_fs_14 text-white-50 mb-0">Enter your email to receive recovery instructions</p>
              </div>
              <div className="card-body p-4 p-sm-5 bg-white">
                {error && (
                  <div className="alert alert-danger text-center cs_radius_10 mb-4">
                    {error}
                  </div>
                )}
                {message && (
                  <div className="alert alert-success text-center cs_radius_10 mb-4">
                    {message}
                  </div>
                )}

                <div className="mb-4">
                  <label className="form-label cs_semibold cs_primary_color">Email Address</label>
                  <input
                    type="email"
                    className="form-control form-control-lg cs_gray2_bg border-0 cs_radius_10"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_10 w-100 justify-content-center py-3"
                >
                  {loading ? 'Sending Reset Link...' : 'Send Reset Link'}
                </button>

                <div className="text-center mt-4 pt-2 border-top">
                  <p className="cs_fs_15 text-muted mb-0">
                    Remembered your password?{' '}
                    <Link to="/login" className="cs_accent_color fw-bold text-decoration-none">
                      Back to Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
