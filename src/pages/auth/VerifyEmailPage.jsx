import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { apiFetch } from '../../utils/api';

const VerifyEmailPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const id = searchParams.get('id');

  const [status, setStatus] = useState('loading'); // 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [resendEmail, setResendEmail] = useState('');
  const [resendLoading, setResendLoading] = useState(false);
  const [resendStatus, setResendStatus] = useState({ type: null, message: '' });

  useEffect(() => {
    const performVerification = async () => {
      if (!token) {
        setStatus('error');
        setErrorMessage('Verification token is missing.');
        return;
      }

      try {
        const queryStr = id ? `?token=${encodeURIComponent(token)}&id=${encodeURIComponent(id)}` : `?token=${encodeURIComponent(token)}`;
        const res = await apiFetch(`/auth/verify-email${queryStr}`, {
          headers: { Accept: 'application/json' },
        });

        if (res.success) {
          setStatus('success');
        } else {
          setStatus('error');
          setErrorMessage(res.message || 'Verification token is invalid or has expired.');
        }
      } catch (err) {
        setStatus('error');
        setErrorMessage(err.message || 'Verification token is invalid or has expired.');
      }
    };

    performVerification();
  }, [token, id]);

  const handleResend = async (e) => {
    e.preventDefault();
    if (!resendEmail.trim()) return;

    setResendLoading(true);
    setResendStatus({ type: null, message: '' });

    try {
      const res = await apiFetch('/auth/resend-verification', {
        method: 'POST',
        body: JSON.stringify({ email: resendEmail }),
      });
      if (res.success) {
        setResendStatus({
          type: 'success',
          message: res.message || 'Verification email sent! Please check your inbox.',
        });
      } else {
        setResendStatus({
          type: 'error',
          message: res.message || 'Failed to resend verification email.',
        });
      }
    } catch (err) {
      setResendStatus({
        type: 'error',
        message: err.message || 'Failed to resend verification email.',
      });
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center cs_gray4_bg py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="card border-0 shadow-lg cs_radius_20 overflow-hidden">
              <div className="card-header text-center cs_secondary_bg p-4 border-0">
                <Link to="/">
                  <img src="/assets/img/logofull.png" alt="First Choice Medical Services" style={{ maxHeight: '60px' }} />
                </Link>
                <h3 className="cs_fs_24 cs_semibold text-white mt-3 mb-0">Email Verification</h3>
              </div>

              <div className="card-body p-4 p-sm-5 bg-white text-center">
                {status === 'loading' && (
                  <div className="py-4">
                    <div className="spinner-border cs_accent_color mb-3" style={{ width: '3rem', height: '3rem' }} role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <h4 className="cs_fs_20 cs_semibold mb-2">Verifying your email address...</h4>
                    <p className="text-muted cs_fs_14">Please wait while we confirm your account details.</p>
                  </div>
                )}

                {status === 'success' && (
                  <div className="py-2">
                    <div className="cs_accent_bg text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '70px', height: '70px' }}>
                      <i className="fa-solid fa-circle-check fa-2x"></i>
                    </div>
                    <h3 className="cs_fs_24 cs_semibold text-success mb-2">Email Verified Successfully!</h3>
                    <p className="text-muted cs_fs_15 mb-4">
                      Thank you for verifying your email address. Your account is now fully active.
                    </p>
                    <Link
                      to="/login?verified=true"
                      className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_10 w-100 justify-content-center py-3 text-decoration-none"
                    >
                      Sign In Now
                    </Link>
                  </div>
                )}

                {status === 'error' && (
                  <div className="py-2">
                    <div className="bg-danger text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '70px', height: '70px' }}>
                      <i className="fa-solid fa-circle-xmark fa-2x"></i>
                    </div>
                    <h3 className="cs_fs_24 cs_semibold text-danger mb-2">Verification Failed</h3>
                    <p className="text-muted cs_fs_15 mb-4">
                      {errorMessage || 'The verification link is invalid or has expired.'}
                    </p>

                    <div className="card cs_gray4_bg border-0 p-4 cs_radius_10 text-start mb-4">
                      <h5 className="cs_fs_16 cs_semibold mb-2">Request a New Verification Link</h5>
                      {resendStatus.message && (
                        <div className={`alert ${resendStatus.type === 'success' ? 'alert-success' : 'alert-danger'} cs_fs_14 py-2 mb-3`} role="alert">
                          {resendStatus.message}
                        </div>
                      )}
                      <form onSubmit={handleResend}>
                        <div className="mb-3">
                          <input
                            type="email"
                            className="form-control bg-white border-0 cs_radius_10"
                            placeholder="Enter your email address"
                            value={resendEmail}
                            onChange={(e) => setResendEmail(e.target.value)}
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={resendLoading}
                          className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_10 w-100 justify-content-center py-2 text-decoration-none"
                        >
                          {resendLoading ? 'Sending link...' : 'Resend Verification Email'}
                        </button>
                      </form>
                    </div>

                    <Link to="/login" className="cs_accent_color fw-bold text-decoration-none">
                      Return to Login
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
