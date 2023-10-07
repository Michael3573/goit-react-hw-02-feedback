const Section = ({ title, children }) => (
  <div>
    <h2 className="hero-text">{title}</h2>
    {children}
  </div>
);

export default Section;
