import { useState } from 'react';
import { SERVICES, PHONE_1, PHONE_2, TEL_1, TEL_2, WA_NUMBER, EMAIL, INSTAGRAM_URL, WEBSITE, MAPS_URL } from '../data.js';
import Reveal from './Reveal.jsx';

function QuoteForm() {
  const [f, setF] = useState({ name: '', phone: '', service: SERVICES[0].title, message: '' });
  const [errs, setErrs] = useState({});
  const set = k => e => setF({ ...f, [k]: e.target.value });

  const submit = e => {
    e.preventDefault();
    const bad = { name: !f.name.trim(), phone: !f.phone.trim() };
    setErrs(bad);
    if (bad.name || bad.phone) return;
    const text =
      `Hello Toptech Computers 2.0,\nName: ${f.name.trim()}\nPhone: ${f.phone.trim()}\nService: ${f.service}` +
      (f.message.trim() ? `\nMessage: ${f.message.trim()}` : '');
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  };

  return (
    <Reveal as="form" className="quote" onSubmit={submit} noValidate>
      <h3>Get a Quote</h3>
      <label>Your name
        <input type="text" className={errs.name ? 'err' : ''} value={f.name} onChange={set('name')} autoComplete="name" placeholder="Your name" />
      </label>
      <label>Phone number
        <input type="tel" className={errs.phone ? 'err' : ''} value={f.phone} onChange={set('phone')} autoComplete="tel" placeholder="e.g. 98413 71813" />
      </label>
      <label>Service needed
        <select value={f.service} onChange={set('service')}>
          {SERVICES.map(s => <option key={s.id}>{s.title}</option>)}
        </select>
      </label>
      <label>Message
        <textarea rows="4" value={f.message} onChange={set('message')} placeholder="Describe your requirement" />
      </label>
      <button className="btn btn-red" type="submit">Send via WhatsApp</button>
      <p className="form-note">This opens WhatsApp with your message ready to send to us.</p>
    </Reveal>
  );
}

export default function Contact() {
  return (
    <section className="section alt" id="contact">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Contact Us</p>
          <h2>Get in touch</h2>
          <p>Tell us what you need and we'll get back to you.</p>
        </Reveal>
        <div className="contact-grid">
          <Reveal className="contact-info">
            <h3>TOPTECH COMPUTERS 2.0</h3>
            <p className="muted">Your Trusted IT Partner</p>
            <ul className="info-list">
              <li><span>👤</span><div><b>Contact Person</b>J. Selvaraj</div></li>
              <li><span>📞</span><div><b>Phone / WhatsApp</b><a href={`tel:${TEL_1}`}>{PHONE_1}</a> &nbsp;|&nbsp; <a href={`tel:${TEL_2}`}>{PHONE_2}</a></div></li>
              <li><span>📍</span><div><b>Address</b>No. 134, Vinayagapuram Main Road,<br />MMDA Colony, Arumbakkam,<br />Chennai – 600106, Tamil Nadu, India.</div></li>
              <li><span>✉️</span><div><b>Email</b><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div></li>
              <li><span>📷</span><div><b>Instagram</b><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">@toptechcomputers_chennai</a></div></li>
              <li><span>🌐</span><div><b>Website</b><a href={`https://${WEBSITE}`}>{WEBSITE}</a></div></li>
            </ul>
            <div className="cta-row">
              <a className="btn btn-red" href={`tel:${TEL_1}`}>Call Now</a>
              <a className="btn btn-ghost" href={MAPS_URL} target="_blank" rel="noopener noreferrer">Open in Maps</a>
            </div>
          </Reveal>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
