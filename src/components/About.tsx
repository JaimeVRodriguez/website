import React from 'react';
import '../styles/About.css'
import profile from '../assets/profile.jpeg'

export default function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="profile-img" data-aos="fade-right" data-aos-delay="300">
                    <img src={profile} alt="Profile" />
                </div>
                <div className="about-details" data-aos="fade-left" data-aos-delay="600">
                    <div className="about-heading">
                        <h1>About</h1>
                        <h6>Myself</h6>
                    </div>
                    <p>
                        Dedicated professional passionate about designing and building scalable software solutions that would serve the Army of today and the future.
                    </p>
                    <p>
                        I have served in the U.S. Army for the past 13 years. The last 6 of which have been in Special Operations as a Market Research Analyst and Talent Acquisition Specialist. I have served on small collaborative teams in ambiguous missions across the world to include the U.S. Embassy Kiev, Ukraine. As I pursue a career in software development I am looking to combine my passion for programming with my 13 years of military experience in order to serve with a team on the leading edge of technology.
                    </p>
                    <p>
                        I am currently pursuing my Master of Science in Data Science from <a href="https://www.eastern.edu/academics/graduate-programs/ms-data-science" className="courses">Eastern University</a> as well as supplementing my learning with additional online resources.
                    </p>
                    <div className="social-media">
                        <a href="https://www.linkedin.com/in/jaime-v-rodriguez/" className="icon-link"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/JaimeVRodriguez?tab=repositories" className="icon-link"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};
