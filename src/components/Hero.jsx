import { SERVICES, TEL_1 , asset } from '../data.js';

export default function Hero() {
  return (
    <>
      <section className="hero" id="home">
        <div className="wrap hero-in">
          <div className="hero-text">
            <p className="eyebrow">Your Trusted IT Partner</p>
            <h1>Complete IT Solutions<br /><span>Under One Roof!</span></h1>
            <p className="lead">From computer sales and services to advanced laptop chip-level repairs, networking, CCTV security, web development and data recovery — Toptech Computers 2.0 provides comprehensive IT solutions for individuals, homes, offices, educational institutions and businesses.</p>
            <div className="cta-row">
              <a className="btn btn-red" href={`tel:${TEL_1}`}>Call Now</a>
              <a className="btn btn-ghost" href="#services">Explore Our Services</a>
            </div>
            <ul className="hero-points">
              <li>Sales &amp; Service</li><li>Chip-Level Repair</li><li>CCTV</li><li>Networking &amp; AMC</li>
            </ul>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-card"><img src={asset("flyer.jpg")} alt="" /></div>
            <div className="art-badge"><strong>6</strong><span>services<br />one roof</span></div>
          </div>
        </div>
      </section>

      <section className="strip" aria-label="Services overview">
        <div className="wrap strip-in">
          {SERVICES.map(s => (
            <a key={s.id} href={`#${s.id}`} className={`chip ${s.color}`}>
              <i>{s.icon}</i>{s.short}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
