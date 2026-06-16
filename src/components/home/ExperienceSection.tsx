import { EXPERIENCE } from '../../data/home'

function ExperienceSection() {
    return (
        <>
            <h2 className="section-title">Experience</h2>
            {EXPERIENCE.map((entry) => (
                <article key={`${entry.company}-${entry.role}`} className="experience">
                    <div className="experience-header">
                        <h3 className="experience-role">{entry.role}</h3>
                        <p className="experience-company">{entry.company}</p>
                        <p className="experience-period">{entry.period}</p>
                    </div>
                    <ul className="experience-points">
                        {entry.points.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                </article>
            ))}
        </>
    )
}

export default ExperienceSection
