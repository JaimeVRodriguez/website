import {jobs} from "./ExperienceData";
import '../../styles/Experience.css'

export default function Experience() {
    return (
        <section id="experience" className="section experience">
            <div className="container">
                <div className="section-heading">
                    <h1>Work Experience</h1>
                    <h6>Past and Current Work</h6>
                </div>
                <a href="/path/to/your/resume.pdf" className="resume" download>Download Resume</a>
                <div className="job-timeline">
                    {jobs.map((job, index) => (
                        <div key={index}
                             className={`job-card ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="job-content">
                                <h2 className="job-title">{job.title}</h2>
                                <h3 className="job-company">{job.company}</h3>
                                <p className="job-description">{job.description}</p>
                                <span className="job-date">{job.date}</span>
                            </div>
                            {index < jobs.length - 1 && <div className="job-connector"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
