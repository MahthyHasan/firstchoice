import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const EmailVerificationPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const [status, setStatus] = useState('verifying'); // verifying, success, error
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!token) {
      setStatus('error');
      setMessage('Missing verification token');
      return;
    }

    const verify = async () => {
      try {
        const res = await fetch(`/api/auth/verify-email?token=${token}`);
        const data = await res.json();
        if (data.success) {
          setStatus('success');
          setMessage(data.message || 'Email verified successfully!');
        } else {
          setStatus('error');
          setMessage(data.message || 'Email verification failed');
        }
      } catch (err) {
        setStatus('error');
        setMessage('Network error during verification');
      }
    };

    verify();
  }, [token]);

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center cs_gray4_bg py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-5 text-center">
            <div className="card border-0 shadow-lg cs_radius_20 overflow-hidden p-5 bg-white">
              <div className="mb-4">
                <Link to="/">
                  <img src="/assets/img/logofull.png" alt="First Choice Medical Services" style={{ maxHeight: '60px' }} />
                </Link>
              </div>

              {status === 'verifying' && (
                <div>
                  <div className="spinner-border text-success mb-3" style={{ width: '3rem', height: '3rem' }} role="status"></div>
                  <h3 className="cs_fs_24 cs_semibold">Verifying Your Email Address...</h3>
                  <p className="text-muted">Please wait while we confirm your account.</p>
                </div>
              )}

              {status === 'success' && (
                <div>
                  <div className="display-1 text-success mb-3">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <h3 className="cs_fs_24 cs_semibold text-success mb-2">Email Verified!</h3>
                  <p className="cs_fs_16 text-muted mb-4">{message}</p>
                  <Link to="/login" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_10 px-4 py-2">
                    Proceed to Sign In
                  </Link>
                </div>
              )}

              {status === 'error' && (
                <div>
                  <div className="display-1 text-danger mb-3">
                    <i className="fa-solid fa-circle-xmark"></i>
                  </div>
                  <h3 className="cs_fs_24 cs_semibold text-danger mb-2">Verification Failed</h3>
                  <p className="cs_fs_16 text-muted mb-4">{message}</p>
                  <Link to="/login" className="cs_btn_style_1 cs_secondary_bg cs_white_color cs_semibold cs_radius_10 px-4 py-2">
                    Back to Sign In
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationPage;
