"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  const isActive = (key: string, val: string) => focused === key || !!val;

  return (
    <main className="oryvell-auth">
      <div className="bg-layer" aria-hidden="true">
        <div className="bg-blob blob-1" />
        <div className="bg-blob blob-2" />
        <div className="bg-blob blob-3" />
      </div>

      {/* Left — Brand Panel */}
      <aside className="panel-brand">
        <div className="brand-inner">
          <div className="logo-mark">O</div>
          <div className="brand-text">
            <p className="brand-eyebrow">Maison de Parfum</p>
            <h1 className="brand-name">ORYVELL</h1>
            <div className="brand-rule" />
            <p className="brand-quote">
              &ldquo;Where silence holds<br />the weight of petals.&rdquo;
            </p>
          </div>
          <div className="brand-scents">
            {["Oud Saffron", "Rose Absolute", "Neroli Mist"].map((s) => (
              <span key={s} className="scent-tag">{s}</span>
            ))}
          </div>
        </div>
        <p className="brand-footer">Est. 2024 &middot; Crafted for the senses</p>
      </aside>

      {/* Right — Form Panel */}
      <section className="panel-form">
        <div className="form-card">

          {/* Mobile logo */}
          <div className="mobile-logo">
            <div className="logo-mark sm">O</div>
            <span className="mobile-brand-name">ORYVELL</span>
          </div>

          <div className="form-header">
            <h2 className="form-title">Welcome back</h2>
            <p className="form-subtitle">Sign in to your Oryvell account</p>
          </div>

          <div className="form-body">
            {/* Email */}
            <div className={`field-wrap ${isActive("email", email) ? "active" : ""}`}>
              <label htmlFor="email" className="field-label">Email address</label>
              <div className="field-box">
                <svg className="field-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4h12v9H2V4zm0 0l6 5 6-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input
                  id="email"
                  type="email"
                  className="field-input"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Password */}
            <div className={`field-wrap ${isActive("password", password) ? "active" : ""}`}>
              <label htmlFor="password" className="field-label">Password</label>
              <div className="field-box">
                <svg className="field-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="3" y="7" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M5 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="field-input"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocused("password")}
                  onBlur={() => setFocused(null)}
                  autoComplete="current-password"
                />
                <button
                  className="eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                  type="button"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 2l12 12M6.5 6.6A2 2 0 0 0 9.4 9.5M4.2 4.3C2.8 5.2 1.8 6.5 1.5 8c.8 3 3.5 5 6.5 5 1.3 0 2.5-.4 3.5-1M6 3.2C6.6 3.1 7.3 3 8 3c3 0 5.7 2 6.5 5-.3 1.1-.9 2.1-1.7 2.9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M1.5 8C2.3 5 5 3 8 3s5.7 2 6.5 5c-.8 3-3.5 5-6.5 5S2.3 11 1.5 8z" stroke="currentColor" strokeWidth="1.3"/>
                      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Meta */}
            <div className="form-meta">
              <label className="check-label">
                <input type="checkbox" className="check-native" />
                <span className="check-box" />
                Remember me
              </label>
              <Link href="/forgot-password" className="forgot-link">Forgot password?</Link>
            </div>

            {/* Submit */}
            <button className="btn-primary" onClick={handleSubmit}>
              Sign In
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Divider */}
            <div className="divider-row">
              <span className="divider-line" />
              <span className="divider-text">or continue with</span>
              <span className="divider-line" />
            </div>

            {/* Social */}
            <div className="social-row">
              <button className="btn-social">
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                  <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
                  <path d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" fill="#FBBC05"/>
                  <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
                </svg>
                Google
              </button>
              <button className="btn-social">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="#24292e">
                  <path d="M9 0C4.03 0 0 4.03 0 9c0 3.98 2.58 7.35 6.16 8.54.45.08.61-.19.61-.43v-1.5c-2.5.54-3.03-1.2-3.03-1.2-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.1.98 2.61.75.08-.58.31-.98.57-1.2-1.99-.23-4.08-1-4.08-4.43 0-.98.35-1.78.93-2.4-.09-.23-.4-1.14.09-2.37 0 0 .76-.24 2.48.93A8.64 8.64 0 0 1 9 4.36c.77 0 1.54.1 2.26.3 1.72-1.17 2.48-.93 2.48-.93.49 1.23.18 2.14.09 2.37.58.62.93 1.42.93 2.4 0 3.44-2.1 4.2-4.1 4.42.32.28.61.83.61 1.67v2.47c0 .24.16.52.62.43A9.01 9.01 0 0 0 18 9c0-4.97-4.03-9-9-9z"/>
                </svg>
                GitHub
              </button>
            </div>

            <p className="switch-auth">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="switch-link">Create one</Link>
            </p>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --white:         #ffffff;
          --off-white:     #faf9f7;
          --surface:       #f4f1ec;
          --accent:        #8b6c42;
          --accent-dark:   #6b5032;
          --accent-light:  #c4a882;
          --text-primary:  #1a1612;
          --text-body:     #3d352c;
          --text-muted:    #9c8e80;
          --border:        #e2dbd0;
          --border-focus:  #8b6c42;
        }

        body {
          background: var(--surface);
          font-family: 'DM Sans', sans-serif;
          color: var(--text-body);
        }

        .oryvell-auth {
          min-height: 100vh;
          display: flex;
          position: relative;
          overflow: hidden;
        }

        /* Blobs */
        .bg-layer { position: fixed; inset: 0; z-index: 0; pointer-events: none; }
        .bg-blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.6; }
        .blob-1 { width: 600px; height: 600px; top: -180px; left: -140px; background: radial-gradient(circle, #ede5d8 0%, transparent 70%); }
        .blob-2 { width: 420px; height: 420px; bottom: -120px; right: 420px; background: radial-gradient(circle, #e0d6c8 0%, transparent 70%); }
        .blob-3 { width: 320px; height: 320px; top: 45%; right: 18%; background: radial-gradient(circle, #ede8e0 0%, transparent 70%); }

        /* Brand Panel */
        .panel-brand {
          position: relative; z-index: 1; flex: 1;
          display: flex; flex-direction: column; justify-content: space-between;
          padding: 3.5rem;
          background: linear-gradient(155deg, #f0ebe1 0%, #e8dfd2 55%, #ddd3c2 100%);
          border-right: 1px solid #ddd5c8;
        }
        .brand-inner { display: flex; flex-direction: column; gap: 2.8rem; margin-top: 10vh; }

        .logo-mark {
          width: 58px; height: 58px; border-radius: 50%;
          border: 1.5px solid var(--accent);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem; font-weight: 500; color: var(--accent);
        }
        .logo-mark.sm { width: 38px; height: 38px; font-size: 1rem; }

        .brand-eyebrow {
          font-size: 0.64rem; font-weight: 400;
          letter-spacing: 0.32em; text-transform: uppercase;
          color: var(--accent); margin-bottom: 0.7rem;
        }
        .brand-name {
          font-family: 'Playfair Display', serif;
          font-weight: 500;
          font-size: clamp(3rem, 5vw, 4.8rem);
          letter-spacing: 0.18em; color: var(--text-primary); line-height: 1;
        }
        .brand-rule {
          width: 34px; height: 1.5px;
          background: var(--accent-light);
          margin: 1.3rem 0 1.5rem;
        }
        .brand-quote {
          font-family: 'Playfair Display', serif;
          font-style: italic; font-weight: 400;
          font-size: 1rem; line-height: 2;
          color: var(--text-muted);
        }
        .brand-scents { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .scent-tag {
          font-size: 0.63rem; font-weight: 400;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--accent-dark);
          background: rgba(139,108,66,0.08);
          border: 1px solid rgba(139,108,66,0.18);
          padding: 0.28rem 0.7rem; border-radius: 2px;
        }
        .brand-footer { font-size: 0.67rem; letter-spacing: 0.1em; color: var(--text-muted); }

        /* Form Panel */
        .panel-form {
          position: relative; z-index: 1; flex: 0 0 500px;
          display: flex; align-items: center; justify-content: center;
          padding: 3rem 2.5rem;
          background: var(--white);
          box-shadow: -4px 0 30px rgba(0,0,0,0.04);
        }
        .form-card { width: 100%; max-width: 390px; }

        .mobile-logo {
          display: none; align-items: center; gap: 0.75rem; margin-bottom: 2.5rem;
        }
        .mobile-brand-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem; font-weight: 500;
          letter-spacing: 0.2em; color: var(--text-primary);
        }

        .form-header { margin-bottom: 2rem; }
        .form-title {
          font-family: 'Playfair Display', serif;
          font-weight: 500; font-size: 1.8rem;
          color: var(--text-primary); margin-bottom: 0.3rem;
        }
        .form-subtitle {
          font-size: 0.83rem; font-weight: 300;
          color: var(--text-muted); letter-spacing: 0.02em;
        }

        /* Fields */
        .form-body { display: flex; flex-direction: column; gap: 1.3rem; }
        .field-wrap { display: flex; flex-direction: column; gap: 0.4rem; }
        .field-label {
          font-size: 0.7rem; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--text-muted); transition: color 0.2s;
        }
        .field-wrap.active .field-label { color: var(--accent); }

        .field-box {
          display: flex; align-items: center;
          border: 1.5px solid var(--border);
          border-radius: 6px;
          background: var(--off-white);
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .field-wrap.active .field-box {
          border-color: var(--border-focus);
          box-shadow: 0 0 0 3px rgba(139,108,66,0.09);
          background: var(--white);
        }

        .field-icon {
          flex-shrink: 0; margin-left: 0.9rem;
          color: var(--text-muted); transition: color 0.2s;
        }
        .field-wrap.active .field-icon { color: var(--accent); }

        .field-input {
          flex: 1; background: transparent; border: none; outline: none;
          padding: 0.78rem 0.9rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem; font-weight: 400;
          color: var(--text-primary);
          caret-color: var(--accent);
        }
        .field-input::placeholder { color: var(--text-muted); opacity: 0.55; }

        .eye-btn {
          background: none; border: none; cursor: pointer;
          padding: 0 0.9rem; color: var(--text-muted);
          display: flex; align-items: center; transition: color 0.2s;
        }
        .eye-btn:hover { color: var(--accent); }

        /* Meta */
        .form-meta {
          display: flex; justify-content: space-between; align-items: center;
          margin-top: -0.1rem;
        }
        .check-label {
          display: flex; align-items: center; gap: 0.5rem;
          font-size: 0.78rem; font-weight: 400;
          color: var(--text-muted); cursor: pointer;
        }
        .check-native { display: none; }
        .check-box {
          width: 15px; height: 15px;
          border: 1.5px solid var(--border);
          border-radius: 3px; flex-shrink: 0;
          position: relative; transition: all 0.2s;
        }
        .check-native:checked + .check-box { background: var(--accent); border-color: var(--accent); }
        .check-native:checked + .check-box::after {
          content: '';
          position: absolute; top: 2px; left: 4px;
          width: 5px; height: 8px;
          border: 1.5px solid white;
          border-top: none; border-left: none;
          transform: rotate(45deg);
        }
        .forgot-link {
          font-size: 0.78rem; font-weight: 400;
          color: var(--accent); text-decoration: none; transition: color 0.2s;
        }
        .forgot-link:hover { color: var(--accent-dark); }

        /* Buttons */
        .btn-primary {
          width: 100%;
          display: flex; align-items: center; justify-content: center; gap: 0.6rem;
          padding: 0.85rem 1.5rem;
          background: var(--accent);
          border: none; border-radius: 6px; cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem; font-weight: 500;
          letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--white);
          box-shadow: 0 2px 14px rgba(139,108,66,0.3);
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          margin-top: 0.1rem;
        }
        .btn-primary:hover {
          background: var(--accent-dark);
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(139,108,66,0.38);
        }
        .btn-primary:active { transform: translateY(0); }

        /* Divider */
        .divider-row { display: flex; align-items: center; gap: 0.9rem; }
        .divider-line { flex: 1; height: 1px; background: var(--border); }
        .divider-text {
          font-size: 0.7rem; font-weight: 400;
          letter-spacing: 0.07em; color: var(--text-muted); white-space: nowrap;
        }

        /* Social */
        .social-row { display: flex; gap: 0.75rem; }
        .btn-social {
          flex: 1;
          display: flex; align-items: center; justify-content: center; gap: 0.55rem;
          padding: 0.68rem 1rem;
          background: var(--white);
          border: 1.5px solid var(--border);
          border-radius: 6px; cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem; font-weight: 400;
          color: var(--text-body); letter-spacing: 0.03em;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
        }
        .btn-social:hover {
          border-color: var(--accent-light);
          background: var(--off-white);
          box-shadow: 0 1px 6px rgba(0,0,0,0.06);
        }

        /* Switch */
        .switch-auth {
          text-align: center;
          font-size: 0.8rem; font-weight: 400; color: var(--text-muted);
        }
        .switch-link {
          color: var(--accent); font-weight: 500; text-decoration: none; transition: color 0.2s;
        }
        .switch-link:hover { color: var(--accent-dark); }

        @media (max-width: 900px) {
          .panel-brand { display: none; }
          .panel-form { flex: 1; }
          .mobile-logo { display: flex; }
        }
      `}</style>
    </main>
  );
}