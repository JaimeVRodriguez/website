interface PortfolioCardProps {
    title: string;
    image: string;
    description: string;
    projectLink?: string;
    repoLink?: string;
    language: string;
}

export default function ProjectCard({
                                        title,
                                        image,
                                        description,
                                        projectLink,
                                        repoLink,
                                        language
                                    }: PortfolioCardProps) {
    return (
        <div className='project-card'>
            <img src={image} alt={title} className='project-image'/>
            <div className='project-title'>{title}</div>
            <div className='project-overlay'>
                <div className='project-details'>
                    <h6>{language}</h6>
                    <p>{description}</p>
                    <div className='project-links'>
                        {projectLink && <a href={projectLink} className='cta'>View Project</a>}
                        {repoLink && <a href={repoLink} className='cta'>View Code</a>}
                    </div>
                </div>
            </div>
        </div>
    )
}
