import { useLanguage } from "../context/LanguageContext";
import "./Hero.css";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="cyber-grid"></div>
        <div className="floating-elements">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              {t("hero.title")}{" "}
              <span className="highlight">{t("hero.titleHighlight")}</span>
            </h1>
            <p className="hero-subtitle">{t("hero.subtitle")}</p>
            <div className="hero-features">
              <div className="feature-badge">
                <span className="badge-icon">🤖</span>
                {t("hero.badge.aiPowered")}
              </div>
              <div className="feature-badge">
                <span className="badge-icon">⚡</span>
                {t("hero.badge.realtime")}
              </div>
              <div className="feature-badge">
                <span className="badge-icon">🎯</span>
                {t("hero.badge.personalized")}
              </div>
            </div>
            <div className="hero-actions">
              <button className="btn btn-primary btn-large">
                {t("hero.startTrial")}
              </button>
              <button className="btn btn-secondary btn-large">
                {t("hero.watchDemo")}
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="notification-demo">
                  <div className="notification threat-detected">
                    <span className="notification-icon">⚠️</span>
                    <div className="notification-content">
                      <strong>{t("hero.notification.threatDetected")}</strong>
                      <p>{t("hero.notification.threatBlocked")}</p>
                    </div>
                  </div>
                  <div className="notification safe">
                    <span className="notification-icon">✅</span>
                    <div className="notification-content">
                      <strong>{t("hero.notification.safeToProceeed")}</strong>
                      <p>{t("hero.notification.verifiedSender")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
