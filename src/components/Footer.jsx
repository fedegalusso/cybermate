import { useLanguage } from "../context/LanguageContext";
import "./Footer.css";

const Footer = () => {
  const { t } = useLanguage();

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
              <p className="footer-description">{t("footer.description")}</p>
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
                <h4>{t("footer.product")}</h4>
                <ul>
                  <li>
                    <a href="#features">{t("footer.product.features")}</a>
                  </li>
                  <li>
                    <a href="#how-it-works">{t("footer.product.howItWorks")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footer.product.pricing")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footer.product.security")}</a>
                  </li>
                </ul>
              </div>

              <div className="link-group">
                <h4>{t("footer.company")}</h4>
                <ul>
                  <li>
                    <a href="#team">{t("footer.company.about")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footer.company.careers")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footer.company.press")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footer.company.partners")}</a>
                  </li>
                </ul>
              </div>

              <div className="link-group">
                <h4>{t("footer.resources")}</h4>
                <ul>
                  <li>
                    <a href="#">{t("footer.resources.documentation")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footer.resources.blog")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footer.resources.help")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footer.resources.community")}</a>
                  </li>
                </ul>
              </div>

              <div className="link-group">
                <h4>{t("footer.legal")}</h4>
                <ul>
                  <li>
                    <a href="#">{t("footer.legal.privacy")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footer.legal.terms")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footer.legal.cookies")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footer.legal.compliance")}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-newsletter">
            <h4>{t("footer.newsletter.title")}</h4>
            <p>{t("footer.newsletter.description")}</p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder={t("footer.newsletter.placeholder")}
                className="newsletter-input"
              />
              <button className="btn btn-primary">
                {t("footer.newsletter.subscribe")}
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">{t("footer.copyright")}</p>
            <div className="footer-badges">
              <span className="badge">{t("footer.badge.soc2")}</span>
              <span className="badge">{t("footer.badge.iso")}</span>
              <span className="badge">{t("footer.badge.gdpr")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
