import { useLanguage } from "../context/LanguageContext";
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      className="language-switcher"
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === "en" ? "Spanish" : "English"}`}
    >
      <span className="flag-icon">{language === "en" ? "🇪🇸" : "🇺🇸"}</span>
      <span className="language-text">{language === "en" ? "ES" : "EN"}</span>
    </button>
  );
};

export default LanguageSwitcher;
