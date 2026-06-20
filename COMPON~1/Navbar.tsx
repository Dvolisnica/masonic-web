'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE, navLinks } from '@/lib/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">{SITE.shortName}</span>
          <span>{SITE.name}</span>
        </Link>

        <button
          className="nav-toggle"
          aria-label="Meni"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/clanovi" className="btn-login" onClick={() => setOpen(false)}>
            Prijava članova
          </Link>
        </div>
      </div>
    </nav>
  );
}
