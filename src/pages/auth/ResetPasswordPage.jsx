import React, { useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';

const ResetPasswordPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleReset = async (e) => {
    if (e) e.preventDefault();
    setError('');
    setMessage('');

    if (!token) {
      setError('Invalid or missing reset token');
      return;
    }

    if (!newPassword || newPassword.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, newPassword }),
      });
      const data = await res.json();

      if (data.success) {
        setMessage(data.message || 'Password reset successfully!');
        setTimeout(() => {
          navigate('/login');
        }, 2500);
      } else {
        setError(data.message || 'Failed to reset password');
      }
    } catch (err) {
      setError('Network error. Please try again.');
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
                <h3 className="cs_fs_24 cs_semibold text-white mt-3 mb-0">Set New Password</h3>
              </div>
              <div className="card-body p-4 p-sm-5 bg-white">
                {error && <div className="alert alert-danger text-center cs_radius_10 mb-4">{error}</div>}
                {message && <div className="alert alert-success text-center cs_radius_10 mb-4">{message}</div>}

                <div className="mb-3">
                  <label className="form-label cs_semibold cs_primary_color">New Password</label>
                  <input
                    type="password"
                    className="form-control form-control-lg cs_gray2_bg border-0 cs_radius_10"
                    placeholder="••••••••"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label cs_semibold cs_primary_color">Confirm New Password</label>
                  <input
                    type="password"
                    className="form-control form-control-lg cs_gray2_bg border-0 cs_radius_10"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  disabled={loading}
                  className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_10 w-100 justify-content-center py-3"
                >
                  {loading ? 'Updating Password...' : 'Reset Password'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
