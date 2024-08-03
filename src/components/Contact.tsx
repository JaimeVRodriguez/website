import '../styles/Contact.css'
import {FaEnvelope, FaGithub, FaLinkedin, FaPhone} from 'react-icons/fa';

export default function Contact() {

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="section-heading">
                    <h1>Contact</h1>
                    <h6>Let's get connected</h6>
                </div>
                <div className="contact-content">
                    <div className="contact-img">
                        <img src="/images/profile2.jpeg" alt="Profile" />
                    </div>
                    <div className="contact-details">
                        <p>
                            I enjoy expanding my network and creating new relationships. If you have
                            any questions, would like to connect regarding an opportunity, or simply
                            want to expand your network feel free to reach out using one of the
                            methods below!
                        </p>
                        <div className="contact-media">
                            <a href="mailto:jaime.v.rodriguez@outlook.com?subject=Website%20Connection" className="icon-link">
                                <FaEnvelope />
                            </a>
                            <a href="tel:+12063999083" className="icon-link">
                                <FaPhone />
                            </a>
                        </div>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/jaime-v-rodriguez/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/JaimeVRodriguez" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
