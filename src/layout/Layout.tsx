import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/skills/Skills';
import Portfolio from '../components/portfolio/Portfolio';
import Experience from '../components/experience/Experience';
import Contact from '../components/Contact';

export default function MainLayout() {
    return (
        <div className='App'>
            <Header/>
            <main>
                <section id='home'>
                </section>
                <About/>
                <Skills/>
                <Portfolio/>
                <Experience/>
                <Contact/>
            </main>
            {/*<Footer />*/}
        </div>
    );
};

