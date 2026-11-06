import { SERVICES , asset } from '../data.js';
import Reveal from './Reveal.jsx';

function ServiceCard({ s }) {
  return (
    <Reveal as="article" className="card" id={s.id}>
      <div className={`ico ${s.color}`}>{s.icon}</div>
      <h3>{s.title}</h3>
      <p>{s.desc}</p>
      {s.vizBadge && (
        <img className="viz-badge" src={asset("toptechviz.jpg")} alt="Toptech Viz – Surveillance & Security Solutions" width="120" height="92" />
      )}
      <ul>{s.items.map(i => <li key={i}>{i}</li>)}</ul>
      {s.note && <p className="note">{s.note}</p>}
    </Reveal>
  );
}

export default function Services() {
  return (
    <section className="section alt" id="services">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">What We Do</p>
          <h2>Our Services</h2>
          <p>Six services, one trusted team — for homes, offices, schools and businesses.</p>
        </Reveal>
        <div className="cards">
          {SERVICES.map(s => <ServiceCard key={s.id} s={s} />)}
        </div>
      </div>
    </section>
  );
}
