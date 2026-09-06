import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { apiFetch } from '../../utils/api';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [showResend, setShowResend] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendMsg, setResendMsg] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('verified') === 'true') {
      setSuccessMsg('Your email has been verified! You can now log in.');
    }
    const msg = searchParams.get('message');
    if (msg) {
      setError(msg);
    }
  }, [searchParams]);

  const handleLogin = async (e) => {
    if (e) e.preventDefault();
    setError('');
    setSuccessMsg('');
    setShowResend(false);

    if (!email.trim() || !password) {
      setError('Please fill in email and password');
      return;
    }

    try {
      setLoading(true);
      const user = await login(email, password);
      if (user.role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/patient-dashboard');
      }
    } catch (err) {
      const msg = err.message || 'Login failed';
      setError(msg);
      if (msg.toLowerCase().includes('verify') || msg.toLowerCase().includes('unverified')) {
        setShowResend(true);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResendVerification = async () => {
    if (!email.trim()) {
      setResendMsg('Please enter your email address above first.');
      return;
    }

    setResendLoading(true);
    setResendMsg('');

    try {
      const res = await apiFetch('/auth/resend-verification', {
        method: 'POST',
        body: JSON.stringify({ email }),
      });
      setResendMsg(res.message || 'Verification email sent! Check your inbox.');
    } catch (err) {
      setResendMsg(err.message || 'Failed to resend verification email.');
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center cs_gray4_bg py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card border-0 shadow-lg cs_radius_20 overflow-hidden">
              <div className="card-header text-center cs_secondary_bg p-4 border-0">
                <Link to="/">
                  <img src="/assets/img/logofull.png" alt="First Choice Medical Services" style={{ maxHeight: '60px' }} />
                </Link>
                <h3 className="cs_fs_24 cs_semibold text-white mt-3 mb-0">Sign In to Your Account</h3>
                <p className="cs_fs_14 text-white-50 mb-0">Access Patient & Healthcare Dashboard</p>
              </div>

              <div className="card-body p-4 p-sm-5 bg-white">
                {successMsg && (
                  <div className="alert alert-success text-center cs_radius_10 mb-4" role="alert">
                    <i className="fa-solid fa-circle-check me-2"></i>
                    {successMsg}
                  </div>
                )}

                {error && (
                  <div className="alert alert-danger text-center cs_radius_10 mb-4" role="alert">
                    <i className="fa-solid fa-circle-exclamation me-2"></i>
                    {error}
                  </div>
                )}

                {showResend && (
                  <div className="alert alert-warning cs_radius_10 mb-4 text-center" role="alert">
                    <p className="mb-2 cs_fs_14">Need another verification link?</p>
                    <button
                      type="button"
                      onClick={handleResendVerification}
                      disabled={resendLoading}
                      className="btn btn-sm btn-outline-dark fw-bold"
                    >
                      {resendLoading ? 'Sending...' : 'Resend Verification Email'}
                    </button>
                    {resendMsg && <p className="mt-2 mb-0 cs_fs_13 text-dark font-monospace">{resendMsg}</p>}
                  </div>
                )}

                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label className="form-label cs_semibold cs_primary_color">Email Address</label>
                    <input
                      type="email"
                      className="form-control cs_gray2_bg border-0 cs_radius_10"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <label className="form-label cs_semibold cs_primary_color mb-0">Password</label>
                    </div>
                    <input
                      type="password"
                      className="form-control cs_gray2_bg border-0 cs_radius_10"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_10 w-100 justify-content-center py-3 mt-3"
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Signing In...
                      </>
                    ) : (
                      <span>Sign In</span>
                    )}
                  </button>

                  <div className="text-center mt-4 pt-2 border-top">
                    <p className="cs_fs_15 text-muted mb-0">
                      Don't have an account?{' '}
                      <Link to="/register" className="cs_accent_color fw-bold text-decoration-none">
                        Register Account
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
