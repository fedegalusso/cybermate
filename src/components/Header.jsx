import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <span className="logo-icon">🛡️</span>
            <span className="logo-text">CyberMate</span>
          </div>

          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <a href="#home" onClick={() => scrollToSection("home")}>
              {t("nav.home")}
            </a>
            <a href="#features" onClick={() => scrollToSection("features")}>
              {t("nav.features")}
            </a>
            <a
              href="#how-it-works"
              onClick={() => scrollToSection("how-it-works")}
            >
              {t("nav.howItWorks")}
            </a>
            <a href="#team" onClick={() => scrollToSection("team")}>
              {t("nav.team")}
            </a>
            <a href="#contact" onClick={() => scrollToSection("contact")}>
              {t("nav.contact")}
            </a>
          </nav>

          <div className="nav-actions">
            <LanguageSwitcher />
            <button className="btn btn-primary">{t("nav.getStarted")}</button>
            <button
              className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
