'use client';

// PLACEHOLDER za članski login.
// Trenutno samo UI — ne radi pravu autentikaciju.
// Kasnije se ovdje uvezuje auth servis (npr. Auth0, Clerk, Supabase, Firebase...).

import { useState } from 'react';
import Link from 'next/link';

export default function Clanovi() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="login-wrap">
      <div className="login-card">
        <h1>Prijava članova</h1>
        <p className="muted">Pristup samo za verifikovane članove reda.</p>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="ime@primjer.com" required />
          </div>
          <div className="field">
            <label htmlFor="password">Lozinka</label>
            <input id="password" type="password" placeholder="••••••••" required />
          </div>
          <button type="submit" className="btn-primary">
            Prijavi se
          </button>
        </form>

        {submitted && (
          <div className="notice">
            Login sistem još nije aktiviran. Ovo je priprema za buduću
            člansku prijavu.
          </div>
        )}

        <div className="notice" style={{ marginTop: submitted ? 12 : 20 }}>
          🔒 Članski portal je u pripremi.
        </div>

        <p style={{ textAlign: 'center', marginTop: 22 }}>
          <Link href="/" className="back-link">
            ← Nazad na početnu
          </Link>
        </p>
      </div>
    </div>
  );
}
