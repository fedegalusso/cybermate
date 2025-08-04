import { useLanguage } from '../context/LanguageContext';
import "./Features.css";

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: "🧠",
      title: t('features.aiBehavioral.title'),
      description: t('features.aiBehavioral.description'),
      details: [
        t('features.aiBehavioral.detail1'),
        t('features.aiBehavioral.detail2'),
      ],
    },
    {
      icon: "⚡",
      title: t('features.realtime.title'),
      description: t('features.realtime.description'),
      details: [
        t('features.realtime.detail1'),
        t('features.realtime.detail2'),
        t('features.realtime.detail3'),
      ],
    },
    {
      icon: "🛡️",
      title: t('features.proactive.title'),
      description: t('features.proactive.description'),
      details: [
        t('features.proactive.detail1'),
        t('features.proactive.detail2'),
        t('features.proactive.detail3'),
      ],
    },
    {
      icon: "💬",
      title: t('features.assistant.title'),
      description: t('features.assistant.description'),
      details: [
        t('features.assistant.detail1'),
        t('features.assistant.detail2'),
        t('features.assistant.detail3'),
      ],
    },
    {
      icon: "📊",
      title: t('features.risk.title'),
      description: t('features.risk.description'),
      details: [
        t('features.risk.detail1'),
        t('features.risk.detail2'),
        t('features.risk.detail3'),
      ],
    },
    {
      icon: "🔄",
      title: t('features.adaptive.title'),
      description: t('features.adaptive.description'),
      details: [
        t('features.adaptive.detail1'),
        t('features.adaptive.detail2'),
        t('features.adaptive.detail3'),
      ],
    },
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-title">
          <h2>{t('features.title')}</h2>
          <p className="section-subtitle">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <ul className="feature-details">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="features-highlight">
          <div className="highlight-content">
            <div className="highlight-text">
              <h3>{t('features.highlight.title')}</h3>
              <p>
                {t('features.highlight.description')}
              </p>
              <div className="stats">
                <div className="stat">
                  <strong>99.7%</strong>
                  <span>{t('features.stat.detection')}</span>
                </div>
                <div className="stat">
                  <strong>0.1s</strong>
                  <span>{t('features.stat.response')}</span>
                </div>
                <div className="stat">
                  <strong>24/7</strong>
                  <span>{t('features.stat.protection')}</span>
                </div>
              </div>
            </div>
            <div className="highlight-visual">
              <div className="protection-shield">
                <div className="shield-layer"></div>
                <div className="shield-layer"></div>
                <div className="shield-layer"></div>
                <div className="shield-center">🛡️</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
