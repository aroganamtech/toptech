import { WHY } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Why() {
  return (
    <section className="section" id="why">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Why Choose Us</p>
          <h2>Why Choose Toptech Computers 2.0?</h2>
        </Reveal>
        <div className="why-grid">
          {WHY.map(w => (
            <Reveal key={w.title} className="why">
              <div className="why-ico">{w.icon}</div>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
