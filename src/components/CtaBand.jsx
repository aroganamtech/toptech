import { TEL_1, WA_NUMBER } from '../data.js';

export default function CtaBand() {
  const wa = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hello Toptech Computers 2.0, I would like to discuss my IT requirement.')}`;
  return (
    <section className="cta-band">
      <div className="wrap cta-in">
        <div>
          <h2>Need IT Support? Contact Us Today!</h2>
          <p>Whether you need a new computer, a laptop motherboard repair, CCTV installation, networking support, website development or data recovery assistance, contact Toptech Computers 2.0 to discuss your requirements.</p>
        </div>
        <div className="cta-row">
          <a className="btn btn-white" href={`tel:${TEL_1}`}>Call Now</a>
          <a className="btn btn-wa" href={wa} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
          <a className="btn btn-ghost-w" href="#contact">Get a Quote</a>
        </div>
      </div>
    </section>
  );
}
