import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./Contact.css";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add actual form submission logic here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>{t("contact.title")}</h2>
          <p className="section-subtitle">{t("contact.subtitle")}</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>{t("contact.conversation.title")}</h3>
            <p>{t("contact.conversation.description")}</p>

            <div className="contact-methods">
              <div className="contact-method">
                <span className="method-icon">📧</span>
                <div className="method-info">
                  <h4>{t("contact.email.title")}</h4>
                  <p>hello@cybermate.com</p>
                  <span className="method-note">{t("contact.email.note")}</span>
                </div>
              </div>

              <div className="contact-method">
                <span className="method-icon">💬</span>
                <div className="method-info">
                  <h4>{t("contact.chat.title")}</h4>
                  <p>{t("contact.chat.availability")}</p>
                  <span className="method-note">{t("contact.chat.note")}</span>
                </div>
              </div>

              <div className="contact-method">
                <span className="method-icon">📱</span>
                <div className="method-info">
                  <h4>{t("contact.phone.title")}</h4>
                  <p>+1 (555) 123-CYBER</p>
                  <span className="method-note">{t("contact.phone.note")}</span>
                </div>
              </div>
            </div>

            <div className="response-time">
              <h4>{t("contact.response.title")}</h4>
              <p>{t("contact.response.description")}</p>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t("contact.form.name")} *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t("contact.form.namePlaceholder")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t("contact.form.email")} *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t("contact.form.emailPlaceholder")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">{t("contact.form.company")}</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t("contact.form.companyPlaceholder")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t("contact.form.message")} *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder={t("contact.form.messagePlaceholder")}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-large">
                {t("contact.form.send")}
              </button>
            </form>

            <div className="form-note">
              <p>
                <strong>Privacy Notice:</strong> Your information is secure with
                us. We use the same advanced encryption that powers CyberMate to
                protect your data.
              </p>
            </div>
          </div>
        </div>

        <div className="faq-section">
          <h3>{t("contact.faq.title")}</h3>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>{t("contact.faq.privacy.question")}</h4>
              <p>{t("contact.faq.privacy.answer")}</p>
            </div>
            <div className="faq-item">
              <h4>{t("contact.faq.compatibility.question")}</h4>
              <p>{t("contact.faq.compatibility.answer")}</p>
            </div>
            <div className="faq-item">
              <h4>{t("contact.faq.learning.question")}</h4>
              <p>{t("contact.faq.learning.answer")}</p>
            </div>
            <div className="faq-item">
              <h4>{t("contact.faq.difference.question")}</h4>
              <p>{t("contact.faq.difference.answer")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
