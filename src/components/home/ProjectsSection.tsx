import { PROJECTS } from '../../data/home'

function ProjectsSection() {
    return (
        <>
            <h2 className="section-title">Projects</h2>
            {PROJECTS.map((project) => (
                <article key={project.name} className="project">
                    <h3
                        className={
                            project.emphasized
                                ? 'project-name project-name--emphasis'
                                : 'project-name'
                        }
                    >
                        {project.name}
                    </h3>
                    <ul className="project-points">
                        {project.points.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                </article>
            ))}
        </>
    )
}

export default ProjectsSection
