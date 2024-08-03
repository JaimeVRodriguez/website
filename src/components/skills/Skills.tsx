import React from 'react';
import '../../styles/Skills.css'
import {skills} from './SkillsData';
import SkillCard from './SkillCard';

export default function Skills() {
    return (
        <section id='skills' className='skills'>
            <div className='container'>
                <div className='section-heading'>
                    <h1>Skills</h1>
                    <h6>What I offer you</h6>
                </div>
                <div className={'my-skills'}>
                    {skills.map((skill) => (
                        <SkillCard
                            icon={skill.icon}
                            title={skill.title}
                            description={skill.description}
                            delay={skill.delay}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};


