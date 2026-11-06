import Reveal from './Reveal.jsx';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <Reveal>
          <p className="eyebrow">About Us</p>
          <h2>Convenient, practical technology — under one roof</h2>
        </Reveal>
        <Reveal className="about-text">
          <p>Toptech Computers 2.0 is an IT solutions and technical service provider based in Arumbakkam, Chennai.</p>
          <p>We offer computer sales and services, laptop chip-level repairs, CCTV security systems, networking and AMC, web design and development, and data recovery assistance.</p>
          <p>Our objective is to provide convenient, practical technology solutions under one roof for individual customers and businesses.</p>
        </Reveal>
      </div>
    </section>
  );
}
