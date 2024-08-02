import '../styles/Portfolio.css'

export default function Portfolio() {
    return (

        <section id="portfolio" className="section projects">
            <div className="container">
                <div className="section-heading">
                    <h1>Projects</h1>
                    <h6>View my recent work</h6>
                </div>

                <div className="portfolio-item">
                    <div className="portfolio-img has-margin-right" data-aos="fade-right"
                         data-aos-delay="300">
                        <img src="images/coffeebot_mock.png" alt="Coffee Bot"/>
                    </div>
                    <div className="portfolio-description" data-aos="fade-left"
                         data-aos-delay="600">
                        <h6>Python</h6>
                        <h1>Coffee Cafe Chatbot</h1>
                        <p>Utilizing the Python programming language, Coffee Cafe Chatbot is a
                            console application that allows users to order multiple coffee drinks.
                            Based on users input choices, multiple options will be expanded. The
                            chatbot is built to scale with a cafe's menu and options.</p>
                        <a href="https://repl.it/@JaimeVRodriguez/CoffeeChatbot#.replit"
                           className="cta">View Project</a>
                        <a href="https://github.com/JaimeVRodriguez/Coffee_Chatbot" className="cta">View
                            Code</a>
                    </div>
                </div>

                <div className="portfolio-item">
                    <div className="portfolio-description has-margin-right" data-aos="fade-right"
                         data-aos-delay="900">
                        <h6>Python</h6>
                        <h1>ATS Hacker</h1>
                        <p>ATS-Hacker is a job posting keyword counter with command line and web
                            (coming soon!) interfaces. Maximize your application's chances by making
                            sure the most used words from the job posting are included in your
                            resume. Counting these words manually is tedious, however, that's where
                            ATS-Hacker comes to the rescue!</p>
                        <a href="https://github.com/JaZa-Programming/ATS-Hacker" className="cta">View
                            Code</a>
                    </div>
                    <div className="portfolio-img" data-aos="fade-left" data-aos-delay="1200">
                        <img src="images/ats_mock.jpg" alt="ATS Hacker"/>
                    </div>
                </div>

                <div className="portfolio-item">
                    <div className="portfolio-img has-margin-right" data-aos="fade-right"
                         data-aos-delay="1500">
                        <img src="images/dai_mock.png" alt="Data Analysis"/>
                    </div>
                    <div className="portfolio-description" data-aos="fade-left"
                         data-aos-delay="1800">
                        <h6>Python</h6>
                        <h1>Special Operations Recruiting Data Analysis</h1>
                        <p>Culminating project as a part of the Galvanize Data Analytics Immersive
                            Course. Analyzes Special Operations selection data for the Special
                            Forces and Psychological Operations Career fields. After conducting
                            exploratory data analysis, further work was done to create a selection
                            result predictive model based on the available attributes of prospective
                            candidates.</p>
                        <a href="https://github.com/JaimeVRodriguez/sof_selection_analysis"
                           className="cta">View Project/Code</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
