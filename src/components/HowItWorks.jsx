import { useLanguage } from '../context/LanguageContext';
import "./HowItWorks.css";

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
      icon: "📱",
      details: [
        t('howItWorks.step1.detail1'),
        t('howItWorks.step1.detail2'),
        t('howItWorks.step1.detail3'),
      ],
    },
    {
      number: "02",
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
      icon: "🧠",
      details: [
        t('howItWorks.step2.detail1'),
        t('howItWorks.step2.detail2'),
        t('howItWorks.step2.detail3'),
      ],
    },
    {
      number: "03",
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
      icon: "🔍",
      details: [
        t('howItWorks.step3.detail1'),
        t('howItWorks.step3.detail2'),
        t('howItWorks.step3.detail3'),
      ],
    },
    {
      number: "04",
      title: t('howItWorks.step4.title'),
      description: t('howItWorks.step4.description'),
      icon: "🛡️",
      details: [
        t('howItWorks.step4.detail1'),
        t('howItWorks.step4.detail2'),
        t('howItWorks.step4.detail3'),
      ],
    },
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-title">
          <h2>{t('howItWorks.title')}</h2>
          <p className="section-subtitle">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <ul className="step-details">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line"></div>
                  <div className="connector-arrow">→</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="process-visual">
          <div className="visual-container">
            <div className="data-flow">
              <div className="flow-item user">
                <span className="flow-icon">👤</span>
                <span className="flow-label">{t('howItWorks.flow.userActivity')}</span>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-item ai">
                <span className="flow-icon">🤖</span>
                <span className="flow-label">{t('howItWorks.flow.aiAnalysis')}</span>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-item protection">
                <span className="flow-icon">🛡️</span>
                <span className="flow-label">{t('howItWorks.flow.protection')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="technology-showcase">
          <h3>{t('howItWorks.tech.title')}</h3>
          <div className="tech-grid">
            <div className="tech-item">
              <span className="tech-icon">🧠</span>
              <h4>{t('howItWorks.tech.ml.title')}</h4>
              <p>{t('howItWorks.tech.ml.description')}</p>
            </div>
            <div className="tech-item">
              <span className="tech-icon">🔐</span>
              <h4>{t('howItWorks.tech.encryption.title')}</h4>
              <p>{t('howItWorks.tech.encryption.description')}</p>
            </div>
            <div className="tech-item">
              <span className="tech-icon">☁️</span>
              <h4>{t('howItWorks.tech.cloud.title')}</h4>
              <p>{t('howItWorks.tech.cloud.description')}</p>
            </div>
            <div className="tech-item">
              <span className="tech-icon">⚡</span>
              <h4>{t('howItWorks.tech.edge.title')}</h4>
              <p>{t('howItWorks.tech.edge.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
