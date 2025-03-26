import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span className="text-muted">© 2025 </span>
        <span className="text-muted"> | </span>
        <span className="text-muted">Dominic Brown </span>
        <span className="text-muted"> | </span>
        <a
          href="https://github.com/dombrown95"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted"
        >
          GitHub
        </a>
        <span className="text-muted"> | </span>
        <a
          href="https://www.linkedin.com/in/dominic-brown95/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;