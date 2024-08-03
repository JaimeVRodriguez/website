import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/skills/Skills';
import Portfolio from '../components/portfolio/Portfolio';
import Experience from '../components/experience/Experience';

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
            </main>
            {/*<Footer />*/}
        </div>
    );
};

