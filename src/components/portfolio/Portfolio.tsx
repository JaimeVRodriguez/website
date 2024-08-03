import '../../styles/Portfolio.css'
import ProjectCard from './ProjectCard';
import {projects} from './ProjectData';

export default function Portfolio() {
    return (
        <section id='portfolio' className='section projects'>
            <div className='container'>
                <div className={'section-heading'}>
                    <h1>Projects</h1>
                    <h6>View my recent work</h6>
                </div>
                <div className={'project-grid'}>
                    {projects.map((project) => (
                        <ProjectCard {...project}/>
                    ))}
                </div>
            </div>
        </section>
    )
}




