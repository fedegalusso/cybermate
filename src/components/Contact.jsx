import { useState } from "react";
import { useLanguage } from '../context/LanguageContext';
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
          <h2>{t('contact.title')}</h2>
          <p className="section-subtitle">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>{t('contact.conversation.title')}</h3>
            <p>
              {t('contact.conversation.description')}
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <span className="method-icon">📧</span>
                <div className="method-info">
                  <h4>{t('contact.email.title')}</h4>
                  <p>hello@cybermate.com</p>
                  <span className="method-note">
                    {t('contact.email.note')}
                  </span>
                </div>
              </div>

              <div className="contact-method">
                <span className="method-icon">💬</span>
                <div className="method-info">
                  <h4>{t('contact.chat.title')}</h4>
                  <p>{t('contact.chat.availability')}</p>
                  <span className="method-note">
                    {t('contact.chat.note')}
                  </span>
                </div>
              </div>

              <div className="contact-method">
                <span className="method-icon">📱</span>
                <div className="method-info">
                  <h4>{t('contact.phone.title')}</h4>
                  <p>+1 (555) 123-CYBER</p>
                  <span className="method-note">{t('contact.phone.note')}</span>
                </div>
              </div>
            </div>

            <div className="response-time">
              <h4>{t('contact.response.title')}</h4>
              <p>
                {t('contact.response.description')}
              </p>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t('contact.form.name')} *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('contact.form.email')} *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company (Optional)</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us about your cybersecurity needs or ask any questions you have about CyberMate..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-large">
                Send Message
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
          <h3>Frequently Asked Questions</h3>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How does CyberMate protect my privacy?</h4>
              <p>
                CyberMate processes your behavioral data locally on your device.
                Personal information never leaves your device unless you
                explicitly choose to share it.
              </p>
            </div>
            <div className="faq-item">
              <h4>Is CyberMate compatible with my device?</h4>
              <p>
                CyberMate works on iOS, Android, Windows, and macOS. We're
                constantly expanding our platform support.
              </p>
            </div>
            <div className="faq-item">
              <h4>How quickly does CyberMate learn my patterns?</h4>
              <p>
                CyberMate begins providing basic protection immediately and
                reaches full effectiveness within 7-14 days of normal usage.
              </p>
            </div>
            <div className="faq-item">
              <h4>
                What makes CyberMate different from traditional antivirus?
              </h4>
              <p>
                Unlike reactive antivirus software, CyberMate proactively learns
                your behavior to predict and prevent threats before they occur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
