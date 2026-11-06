import { useState } from 'react';
import { NAV, PHONE_1, PHONE_2, TEL_1, TEL_2 , asset } from '../data.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header" id="top">
      <div className="topbar">
        <div className="wrap topbar-in">
          <span>📍 Arumbakkam, Chennai – 600106</span>
          <span className="tb-right">
            <a href={`tel:${TEL_1}`}>📞 {PHONE_1}</a>
            <a href={`tel:${TEL_2}`}>{PHONE_2}</a>
          </span>
        </div>
      </div>
      <div className="wrap nav-in">
        <a href="#top" className="brand" aria-label="Toptech Computers 2.0 home">
          <img src={asset("logo-mark.jpg")} alt="Toptech Computers 2.0 – Your Trusted IT Partner" width="200" height="65" />
        </a>
        <button className="menu-btn" aria-label="Toggle menu" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(o => !o)}>
          <span /><span /><span />
        </button>
        <nav id="nav" className={`nav${open ? ' open' : ''}`} onClick={e => e.target.tagName === 'A' && setOpen(false)}>
          {NAV.map(n => <a key={n.href} href={n.href}>{n.label}</a>)}
          <a className="btn btn-red nav-cta" href={`tel:${TEL_1}`}>Call Now</a>
        </nav>
      </div>
    </header>
  );
}
