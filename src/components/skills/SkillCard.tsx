import {IconType} from "react-icons";
import React from "react";

interface SkillCardProps {
    icon: IconType;
    title: string;
    description: string;
    delay: string;
}

export default function SkillCard({icon: Icon, title, description, delay}: SkillCardProps) {
    return(
        <div className={'skill'} data-aos={'fade-in'} data-aos-delay={delay}>
            <div className={'icon-container'}>
                <Icon />
            </div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}
