import { Link } from "react-router-dom";
import "./FooterStyles.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h1>Trippy</h1>
          <p>
            Explore the world with Trippy. Discover beautiful
            destinations and make unforgettable memories.
          </p>
        </div>

        <div className="footer-links">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h2>Contact Us</h2>
          <p>Email: info@trippy.com</p>
          <p>Phone: +92 300 1234567</p>
          <p>Location: Pakistan</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Trippy. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;