import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e) => {
    if (e) e.preventDefault();
    setError('');

    if (!email.trim() || !password) {
      setError('Please enter both email address and password');
      return;
    }

    try {
      setLoading(true);
      const user = await login(email, password);
      const from = location.state?.from?.pathname;
      if (from) {
        navigate(from, { replace: true });
      } else {
        navigate(user.role === 'admin' ? '/dashboard/admin' : '/dashboard/patient', { replace: true });
      }
    } catch (err) {
      setError(err.message || 'Failed to sign in. Please check your credentials.');
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
                <h3 className="cs_fs_24 cs_semibold text-white mt-3 mb-0">Sign In to Your Dashboard</h3>
                <p className="cs_fs_14 text-white-50 mb-0">First Choice Medical Services — Qatar</p>
              </div>
              <div className="card-body p-4 p-sm-5 bg-white">
                {error && (
                  <div className="alert alert-danger text-center cs_radius_10 mb-4" role="alert">
                    <i className="fa-solid fa-circle-exclamation me-2"></i>
                    {error}
                  </div>
                )}

                <div className="mb-3">
                  <label className="form-label cs_semibold cs_primary_color">Email Address</label>
                  <input
                    type="email"
                    className="form-control form-control-lg cs_gray2_bg border-0 cs_radius_10"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <label className="form-label cs_semibold cs_primary_color mb-0">Password</label>
                    <Link to="/forgot-password" className="cs_fs_14 cs_accent_color text-decoration-none">
                      Forgot Password?
                    </Link>
                  </div>
                  <input
                    type="password"
                    className="form-control form-control-lg cs_gray2_bg border-0 cs_radius_10"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  type="button"
                  onClick={handleLogin}
                  disabled={loading}
                  className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_10 w-100 justify-content-center py-3"
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
                      Register Now
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

export default LoginPage;
