import { CONTACT_LINKS, CS_INTERESTS, EDUCATION, SKILLS } from '../../data/profile'

function ProfileInfo() {
    return (
        <section className="profile-info">
            <p className="info-label">Info</p>
            <div className="info-card">
                <h3 className="info-subtitle">Education</h3>
                <div className="education-list">
                    {EDUCATION.map((entry) => (
                        <div key={entry.school} className="education-entry">
                            <p className="education-degree">{entry.degree}</p>
                            <p className="education-school">{entry.school}</p>
                            <p className="education-period">{entry.period}</p>
                        </div>
                    ))}
                </div>

                <h3 className="info-subtitle">Contact</h3>
                <ul className="info-list info-list--contact">
                    {CONTACT_LINKS.map((link) => {
                        const Icon = link.icon
                        return (
                            <li key={link.label} className="info-list-spacer" aria-hidden="true">
                                <a
                                    href={link.href}
                                    className="contact-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon className="contact-icon" />
                                    <span>{link.label}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>

                <h3 className="info-subtitle">Skills</h3>
                <ul className="info-list info-list--contact">
                    {SKILLS.map((skill) => (
                        <li key={skill} className="info-list-spacer" aria-hidden="true">
                            <span>{skill}</span>
                        </li>
                    ))}
                </ul>

                <h3 className="info-subtitle">CS Interests</h3>
                <ul className="info-list info-list--contact">
                    {CS_INTERESTS.map((interest) => (
                        <li key={interest} className="info-list-spacer" aria-hidden="true">
                            <span>{interest}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ProfileInfo
