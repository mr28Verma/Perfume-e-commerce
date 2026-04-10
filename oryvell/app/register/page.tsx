"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    password: "", confirm: "",
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);

  const update = (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const isActive = (key: string) => focused === key || !!form[key as keyof typeof form];

  const passwordStrength = (): { label: string; width: string; color: string } => {
    const len = form.password.length;
    if (!len) return { label: "", width: "0%", color: "transparent" };
    if (len < 6) return { label: "Weak", width: "28%", color: "#c0392b" };
    if (len < 10) return { label: "Fair", width: "60%", color: "#d68910" };
    return { label: "Strong", width: "100%", color: "#2e7d32" };
  };
  const strength = passwordStrength();

  const EyeIcon = ({ visible }: { visible: boolean }) =>
    visible ? (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 2l12 12M6.5 6.6A2 2 0 0 0 9.4 9.5M4.2 4.3C2.8 5.2 1.8 6.5 1.5 8c.8 3 3.5 5 6.5 5 1.3 0 2.5-.4 3.5-1M6 3.2C6.6 3.1 7.3 3 8 3c3 0 5.7 2 6.5 5-.3 1.1-.9 2.1-1.7 2.9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ) : (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M1.5 8C2.3 5 5 3 8 3s5.7 2 6.5 5c-.8 3-3.5 5-6.5 5S2.3 11 1.5 8z" stroke="currentColor" strokeWidth="1.3"/>
        <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    );

  return (
    <main className="oryvell-auth">
      <div className="bg-layer" aria-hidden="true">
        <div className="bg-blob blob-1" />
        <div className="bg-blob blob-2" />
        <div className="bg-blob blob-3" />
      </div>

      {/* Brand Panel */}
      <aside className="panel-brand">
        <div className="brand-inner">
          <div className="logo-mark">O</div>
          <div className="brand-text">
            <p className="brand-eyebrow">Maison de Parfum</p>
            <h1 className="brand-name">ORYVELL</h1>
            <div className="brand-rule" />
          </div>
          <div className="perks">
            <p className="perks-heading">Your membership includes</p>
            {[
              { icon: "◈", text: "Early access to limited editions" },
              { icon: "◈", text: "Curated scent discovery boxes" },
              { icon: "◈", text: "Invitations to private events" },
              { icon: "◈", text: "Personalised fragrance consultations" },
            ].map((p) => (
              <div key={p.text} className="perk-item">
                <span className="perk-icon">{p.icon}</span>
                <span>{p.text}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="brand-footer">Est. 2024 &middot; Crafted for the senses</p>
      </aside>

      {/* Form Panel */}
      <section className="panel-form">
        <div className="form-card">

          {/* Mobile logo */}
          <div className="mobile-logo">
            <div className="logo-mark sm">O</div>
            <span className="mobile-brand-name">ORYVELL</span>
          </div>

          {/* Step bar */}
          <div className="step-bar">
            <div className="step-item">
              <div className={`step-dot ${step >= 1 ? "on" : ""}`}>1</div>
              <span className={`step-label ${step === 1 ? "active" : ""}`}>Your details</span>
            </div>
            <div className={`step-connector ${step === 2 ? "on" : ""}`} />
            <div className="step-item">
              <div className={`step-dot ${step === 2 ? "on" : ""}`}>2</div>
              <span className={`step-label ${step === 2 ? "active" : ""}`}>Set password</span>
            </div>
          </div>

          <div className="form-header">
            <h2 className="form-title">
              {step === 1 ? "Create account" : "Secure your account"}
            </h2>
            <p className="form-subtitle">
              {step === 1
                ? "Join Oryvell — a world of rare fragrances"
                : "Almost there. Choose a strong password"}
            </p>
          </div>

          <div className="form-body">
            {step === 1 ? (
              <>
                {/* Name row */}
                <div className="field-row">
                  <div className={`field-wrap ${isActive("firstName") ? "active" : ""}`}>
                    <label htmlFor="firstName" className="field-label">First name</label>
                    <div className="field-box">
                      <input
                        id="firstName" type="text" className="field-input"
                        placeholder="Jane"
                        value={form.firstName}
                        onChange={update("firstName")}
                        onFocus={() => setFocused("firstName")}
                        onBlur={() => setFocused(null)}
                        autoComplete="given-name"
                      />
                    </div>
                  </div>
                  <div className={`field-wrap ${isActive("lastName") ? "active" : ""}`}>
                    <label htmlFor="lastName" className="field-label">Last name</label>
                    <div className="field-box">
                      <input
                        id="lastName" type="text" className="field-input"
                        placeholder="Doe"
                        value={form.lastName}
                        onChange={update("lastName")}
                        onFocus={() => setFocused("lastName")}
                        onBlur={() => setFocused(null)}
                        autoComplete="family-name"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className={`field-wrap ${isActive("email") ? "active" : ""}`}>
                  <label htmlFor="email" className="field-label">Email address</label>
                  <div className="field-box">
                    <svg className="field-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 4h12v9H2V4zm0 0l6 5 6-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input
                      id="email" type="email" className="field-input"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={update("email")}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <button
                  className="btn-primary"
                  onClick={() => { if (form.firstName && form.lastName && form.email) setStep(2); }}
                  disabled={!form.firstName || !form.lastName || !form.email}
                >
                  Continue
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <div className="divider-row">
                  <span className="divider-line" />
                  <span className="divider-text">or sign up with</span>
                  <span className="divider-line" />
                </div>

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
              </>
            ) : (
              <>
                {/* Password */}
                <div className={`field-wrap ${isActive("password") ? "active" : ""}`}>
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
                      placeholder="Min. 8 characters"
                      value={form.password}
                      onChange={update("password")}
                      onFocus={() => setFocused("password")}
                      onBlur={() => setFocused(null)}
                      autoComplete="new-password"
                    />
                    <button className="eye-btn" type="button" onClick={() => setShowPassword(!showPassword)} tabIndex={-1}>
                      <EyeIcon visible={showPassword} />
                    </button>
                  </div>
                  {form.password && (
                    <div className="strength-row">
                      <div className="strength-track">
                        <div className="strength-fill" style={{ width: strength.width, background: strength.color }} />
                      </div>
                      <span className="strength-label" style={{ color: strength.color }}>{strength.label}</span>
                    </div>
                  )}
                </div>

                {/* Confirm */}
                <div className={`field-wrap ${isActive("confirm") ? "active" : ""}`}>
                  <label htmlFor="confirm" className="field-label">Confirm password</label>
                  <div className={`field-box ${form.confirm && form.password !== form.confirm ? "error" : ""}`}>
                    <svg className="field-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect x="3" y="7" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                      <path d="M5 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                    <input
                      id="confirm"
                      type={showConfirm ? "text" : "password"}
                      className="field-input"
                      placeholder="Repeat password"
                      value={form.confirm}
                      onChange={update("confirm")}
                      onFocus={() => setFocused("confirm")}
                      onBlur={() => setFocused(null)}
                      autoComplete="new-password"
                    />
                    <button className="eye-btn" type="button" onClick={() => setShowConfirm(!showConfirm)} tabIndex={-1}>
                      <EyeIcon visible={showConfirm} />
                    </button>
                  </div>
                  {form.confirm && form.password !== form.confirm && (
                    <p className="field-error">Passwords do not match</p>
                  )}
                </div>

                {/* Terms */}
                <label className="terms-label">
                  <input
                    type="checkbox"
                    className="check-native"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                  />
                  <span className="check-box" />
                  <span className="terms-text">
                    I agree to the{" "}
                    <Link href="/terms" className="terms-link">Terms of Service</Link>
                    {" "}and{" "}
                    <Link href="/privacy" className="terms-link">Privacy Policy</Link>
                  </span>
                </label>

                {/* Buttons */}
                <div className="btn-group">
                  <button className="btn-back" type="button" onClick={() => setStep(1)} aria-label="Go back">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button
                    className="btn-primary btn-flex"
                    onClick={(e) => { e.preventDefault(); console.log({ ...form, agreed }); }}
                    disabled={!form.password || form.password !== form.confirm || !agreed}
                  >
                    Create Account
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </>
            )}

            <p className="switch-auth">
              Already have an account?{" "}
              <Link href="/login" className="switch-link">Sign in</Link>
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
          --accent:        #8b6c42;
          --accent-dark:   #6b5032;
          --accent-light:  #c4a882;
          --text-primary:  #1a1612;
          --text-body:     #3d352c;
          --text-muted:    #9c8e80;
          --border:        #e2dbd0;
          --border-focus:  #8b6c42;
          --border-error:  #c0392b;
        }

        body {
          background: #f4f1ec;
          font-family: 'DM Sans', sans-serif;
          color: var(--text-body);
        }

        .oryvell-auth { min-height: 100vh; display: flex; position: relative; overflow: hidden; }

        .bg-layer { position: fixed; inset: 0; z-index: 0; pointer-events: none; }
        .bg-blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.6; }
        .blob-1 { width: 600px; height: 600px; top: -180px; left: -140px; background: radial-gradient(circle, #ede5d8 0%, transparent 70%); }
        .blob-2 { width: 420px; height: 420px; bottom: -120px; right: 420px; background: radial-gradient(circle, #e0d6c8 0%, transparent 70%); }
        .blob-3 { width: 320px; height: 320px; top: 45%; right: 18%; background: radial-gradient(circle, #ede8e0 0%, transparent 70%); }

        /* Brand */
        .panel-brand {
          position: relative; z-index: 1; flex: 1;
          display: flex; flex-direction: column; justify-content: space-between;
          padding: 3.5rem;
          background: linear-gradient(155deg, #f0ebe1 0%, #e8dfd2 55%, #ddd3c2 100%);
          border-right: 1px solid #ddd5c8;
        }
        .brand-inner { display: flex; flex-direction: column; gap: 2.5rem; margin-top: 8vh; }

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
          font-family: 'Playfair Display', serif; font-weight: 500;
          font-size: clamp(3rem, 5vw, 4.8rem);
          letter-spacing: 0.18em; color: var(--text-primary); line-height: 1;
        }
        .brand-rule { width: 34px; height: 1.5px; background: var(--accent-light); margin: 1.3rem 0 0; }

        .perks-heading {
          font-size: 0.65rem; font-weight: 500;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--text-muted); margin-bottom: 1.1rem;
        }
        .perk-item {
          display: flex; align-items: baseline; gap: 0.75rem;
          font-size: 0.84rem; font-weight: 300;
          color: var(--text-body); margin-bottom: 0.85rem;
        }
        .perk-icon { font-size: 0.55rem; color: var(--accent); flex-shrink: 0; }
        .brand-footer { font-size: 0.67rem; letter-spacing: 0.1em; color: var(--text-muted); }

        /* Form */
        .panel-form {
          position: relative; z-index: 1; flex: 0 0 500px;
          display: flex; align-items: center; justify-content: center;
          padding: 3rem 2.5rem;
          background: var(--white);
          box-shadow: -4px 0 30px rgba(0,0,0,0.04);
        }
        .form-card { width: 100%; max-width: 390px; }

        .mobile-logo { display: none; align-items: center; gap: 0.75rem; margin-bottom: 2rem; }
        .mobile-brand-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem; font-weight: 500;
          letter-spacing: 0.2em; color: var(--text-primary);
        }

        /* Step bar */
        .step-bar {
          display: flex; align-items: center; gap: 0;
          margin-bottom: 2rem;
        }
        .step-item { display: flex; align-items: center; gap: 0.5rem; }
        .step-dot {
          width: 26px; height: 26px; border-radius: 50%;
          border: 1.5px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.68rem; font-weight: 500;
          color: var(--text-muted);
          transition: all 0.3s;
        }
        .step-dot.on { background: var(--accent); border-color: var(--accent); color: white; }
        .step-label {
          font-size: 0.72rem; font-weight: 400;
          letter-spacing: 0.05em; color: var(--text-muted);
          transition: color 0.2s;
        }
        .step-label.active { color: var(--accent); font-weight: 500; }
        .step-connector {
          flex: 1; height: 1px; background: var(--border);
          margin: 0 0.75rem; max-width: 48px;
          transition: background 0.3s;
        }
        .step-connector.on { background: var(--accent); }

        .form-header { margin-bottom: 1.8rem; }
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
        .form-body { display: flex; flex-direction: column; gap: 1.2rem; }
        .field-row { display: flex; gap: 0.8rem; }
        .field-row .field-wrap { flex: 1; }
        .field-wrap { display: flex; flex-direction: column; gap: 0.38rem; }
        .field-label {
          font-size: 0.7rem; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--text-muted); transition: color 0.2s;
        }
        .field-wrap.active .field-label { color: var(--accent); }

        .field-box {
          display: flex; align-items: center;
          border: 1.5px solid var(--border); border-radius: 6px;
          background: var(--off-white);
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .field-box.error { border-color: var(--border-error); }
        .field-wrap.active .field-box {
          border-color: var(--border-focus);
          box-shadow: 0 0 0 3px rgba(139,108,66,0.09);
          background: var(--white);
        }

        .field-icon {
          flex-shrink: 0; margin-left: 0.85rem;
          color: var(--text-muted); transition: color 0.2s;
        }
        .field-wrap.active .field-icon { color: var(--accent); }

        .field-input {
          flex: 1; background: transparent; border: none; outline: none;
          padding: 0.75rem 0.85rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem; font-weight: 400;
          color: var(--text-primary); caret-color: var(--accent);
        }
        .field-input::placeholder { color: var(--text-muted); opacity: 0.55; }

        .eye-btn {
          background: none; border: none; cursor: pointer;
          padding: 0 0.85rem; color: var(--text-muted);
          display: flex; align-items: center; transition: color 0.2s;
        }
        .eye-btn:hover { color: var(--accent); }

        .field-error { font-size: 0.7rem; color: var(--border-error); margin-top: 0.1rem; }

        /* Strength */
        .strength-row {
          display: flex; align-items: center; gap: 0.7rem; margin-top: 0.3rem;
        }
        .strength-track { flex: 1; height: 3px; background: var(--border); border-radius: 99px; overflow: hidden; }
        .strength-fill { height: 100%; border-radius: 99px; transition: width 0.4s ease, background 0.4s ease; }
        .strength-label { font-size: 0.68rem; font-weight: 500; white-space: nowrap; }

        /* Terms */
        .terms-label {
          display: flex; align-items: flex-start; gap: 0.6rem; cursor: pointer;
        }
        .check-native { display: none; }
        .check-box {
          width: 16px; height: 16px; flex-shrink: 0; margin-top: 1px;
          border: 1.5px solid var(--border); border-radius: 3px;
          position: relative; transition: all 0.2s;
        }
        .check-native:checked + .check-box { background: var(--accent); border-color: var(--accent); }
        .check-native:checked + .check-box::after {
          content: '';
          position: absolute; top: 2px; left: 4.5px;
          width: 5px; height: 8px;
          border: 1.5px solid white;
          border-top: none; border-left: none;
          transform: rotate(45deg);
        }
        .terms-text {
          font-size: 0.77rem; font-weight: 400;
          line-height: 1.6; color: var(--text-muted);
        }
        .terms-link { color: var(--accent); text-decoration: none; font-weight: 500; }

        /* Buttons */
        .btn-group { display: flex; gap: 0.75rem; }
        .btn-back {
          flex-shrink: 0; width: 46px; height: 46px;
          display: flex; align-items: center; justify-content: center;
          background: var(--white); border: 1.5px solid var(--border);
          border-radius: 6px; cursor: pointer; color: var(--text-muted);
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .btn-back:hover { border-color: var(--accent-light); color: var(--accent); background: var(--off-white); }
        .btn-flex { flex: 1; }

        .btn-primary {
          width: 100%;
          display: flex; align-items: center; justify-content: center; gap: 0.6rem;
          padding: 0.85rem 1.5rem;
          background: var(--accent); border: none; border-radius: 6px; cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem; font-weight: 500;
          letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--white);
          box-shadow: 0 2px 14px rgba(139,108,66,0.28);
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
        }
        .btn-primary:hover:not(:disabled) {
          background: var(--accent-dark);
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(139,108,66,0.38);
        }
        .btn-primary:active:not(:disabled) { transform: translateY(0); }
        .btn-primary:disabled { opacity: 0.45; cursor: not-allowed; }

        /* Divider */
        .divider-row { display: flex; align-items: center; gap: 0.9rem; }
        .divider-line { flex: 1; height: 1px; background: var(--border); }
        .divider-text { font-size: 0.7rem; font-weight: 400; letter-spacing: 0.07em; color: var(--text-muted); white-space: nowrap; }

        /* Social */
        .social-row { display: flex; gap: 0.75rem; }
        .btn-social {
          flex: 1;
          display: flex; align-items: center; justify-content: center; gap: 0.55rem;
          padding: 0.68rem 1rem;
          background: var(--white); border: 1.5px solid var(--border);
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
        .switch-auth { text-align: center; font-size: 0.8rem; font-weight: 400; color: var(--text-muted); }
        .switch-link { color: var(--accent); font-weight: 500; text-decoration: none; transition: color 0.2s; }
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