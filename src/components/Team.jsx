import { useLanguage } from '../context/LanguageContext';
import "./Team.css";

const Team = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: "Macarena Alvarez",
      role: t('team.macarena.role'),
      description: t('team.macarena.description'),
      expertise: [
        "Machine Learning",
        "Data Science",
        "AI Architecture",
        "Behavioral Analytics",
      ],
      image: "/api/placeholder/300/300", // Placeholder - you can replace with actual image
      linkedin: "#",
      github: "#",
    },
    {
      name: "Federico Galusso",
      role: t('team.federico.role'),
      description: t('team.federico.description'),
      expertise: [
        "Full-Stack Development",
        "System Architecture",
        "Cybersecurity",
        "Cloud Infrastructure",
      ],
      image: "/api/placeholder/300/300", // Placeholder - you can replace with actual image
      linkedin: "#",
      github: "#",
    },
    {
      name: "Mateo Seijo",
      role: t('team.mateo.role'),
      description: t('team.mateo.description'),
      expertise: [
        "Product Strategy",
        "UX Design",
        "Business Development",
        "Market Research",
      ],
      image: "/api/placeholder/300/300", // Placeholder - you can replace with actual image
      linkedin: "#",
      github: "#",
    },
  ];

  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-title">
          <h2>{t('team.title')}</h2>
          <p className="section-subtitle">
            {t('team.subtitle')}
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
                <div className="image-overlay">
                  <div className="social-links">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="social-icon">💼</span>
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="social-icon">🔗</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>

                <div className="member-expertise">
                  <h4>{t('team.expertise')}</h4>
                  <div className="expertise-tags">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="expertise-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="team-values">
          <h3>{t('team.mission.title')}</h3>
          <div className="values-grid">
            <div className="value-item">
              <span className="value-icon">🎯</span>
              <h4>{t('team.value.innovation.title')}</h4>
              <p>
                {t('team.value.innovation.description')}
              </p>
            </div>
            <div className="value-item">
              <span className="value-icon">🤝</span>
              <h4>{t('team.value.collaboration.title')}</h4>
              <p>
                {t('team.value.collaboration.description')}
              </p>
            </div>
            <div className="value-item">
              <span className="value-icon">🔒</span>
              <h4>{t('team.value.privacy.title')}</h4>
              <p>
                {t('team.value.privacy.description')}
              </p>
            </div>
          </div>
        </div>

        <div className="join-team">
          <div className="join-content">
            <h3>{t('team.join.title')}</h3>
            <p>
              {t('team.join.description')}
            </p>
            <button className="btn btn-primary">{t('team.join.button')}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
