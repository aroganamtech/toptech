import { SERVICES, PHONE_1, PHONE_2, TEL_1, TEL_2, EMAIL, INSTAGRAM_URL, WA_NUMBER , asset } from '../data.js';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="wrap footer-in">
          <div className="f-brand">
            <img src={asset("logo-mark.jpg")} alt="Toptech Computers 2.0" width="180" height="58" />
            <p><b>Toptech Computers 2.0 — Your Trusted IT Partner</b></p>
            <p>Chennai, Tamil Nadu, India.</p>
            <a className="viz" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <img src={asset("toptechviz.jpg")} alt="Toptech Viz – Surveillance & Security Solutions" width="130" height="100" />
            </a>
          </div>
          <div>
            <h4>Services</h4>
            <ul>{SERVICES.map(s => <li key={s.id}><a href={`#${s.id}`}>{s.short.replace(' & Security', '')}</a></li>)}</ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`tel:${TEL_1}`}>+91 {PHONE_1}</a></li>
              <li><a href={`tel:${TEL_2}`}>+91 {PHONE_2}</a></li>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram: toptechcomputers_chennai</a></li>
              <li>No. 134, Vinayagapuram Main Road, MMDA Colony, Arumbakkam, Chennai – 600106</li>
            </ul>
          </div>
        </div>
        <div className="copy">© {new Date().getFullYear()} Toptech Computers 2.0. All rights reserved.</div>
      </footer>

      <a className="wa-float" href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true"><path fill="#fff" d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.3.6 4.4 1.7 6.3L3 29l7.4-1.9c1.8 1 3.8 1.5 5.6 1.5 7 0 12.6-5.600 12.600-12.500S23 3 16 3zm0 22.800c-1.800 0-3.500-.5-5-1.400l-.4-.2-4.400 1.100 1.200-4.300-.3-.4a10.300 10.300 0 0 1-1.600-5.500C5.500 9.800 10.200 5.200 16 5.200s10.500 4.600 10.500 10.300S21.800 25.800 16 25.800zm5.700-7.700c-.3-.2-1.800-.9-2.100-1s-.5-.2-.7.200-.8 1-1 1.200-.4.200-.7.100c-1.900-.9-3.100-1.700-4.300-3.700-.3-.5.300-.5.900-1.600.1-.2 0-.4 0-.5l-1-2.300c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.100-.8.400-.3.300-1.100 1.100-1.100 2.600s1.100 3 1.300 3.200c.2.200 2.200 3.400 5.300 4.700 2 .8 2.700.9 3.700.7.600-.1 1.800-.7 2-1.400.3-.7.300-1.300.2-1.400-.1-.1-.3-.2-.6-.4z" /></svg>
      </a>
    </>
  );
}
