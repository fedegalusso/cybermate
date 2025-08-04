import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-icon">🛡️</span>
                <span className="logo-text">CyberMate</span>
              </div>
              <p className="footer-description">
                Your intelligent cybersecurity companion, powered by AI to
                protect what matters most - your digital life.
              </p>
              <div className="social-links">
                <a href="#" aria-label="LinkedIn">
                  💼
                </a>
                <a href="#" aria-label="Twitter">
                  🐦
                </a>
                <a href="#" aria-label="GitHub">
                  🔗
                </a>
                <a href="#" aria-label="Email">
                  📧
                </a>
              </div>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4>Product</h4>
                <ul>
                  <li>
                    <a href="#features">Features</a>
                  </li>
                  <li>
                    <a href="#how-it-works">How It Works</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Security</a>
                  </li>
                </ul>
              </div>

              <div className="link-group">
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="#team">About Us</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Press</a>
                  </li>
                  <li>
                    <a href="#">Partners</a>
                  </li>
                </ul>
              </div>

              <div className="link-group">
                <h4>Resources</h4>
                <ul>
                  <li>
                    <a href="#">Documentation</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                  <li>
                    <a href="#">Community</a>
                  </li>
                </ul>
              </div>

              <div className="link-group">
                <h4>Legal</h4>
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#">Cookie Policy</a>
                  </li>
                  <li>
                    <a href="#">Compliance</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-newsletter">
            <h4>Stay Protected</h4>
            <p>
              Get the latest cybersecurity insights and CyberMate updates
              delivered to your inbox.
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 CyberMate. All rights reserved. Built with ❤️ for a safer
              digital world.
            </p>
            <div className="footer-badges">
              <span className="badge">🔒 SOC 2 Compliant</span>
              <span className="badge">🛡️ ISO 27001 Certified</span>
              <span className="badge">🌍 GDPR Ready</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
