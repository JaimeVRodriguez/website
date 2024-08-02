import {Project} from "./Project";
import chatbot from '../../assets/chatbot.png'
import hacker from '../../assets/hacker.png'
import sof from '../../assets/sof.png'
import aswf from '../../assets/aswf.png'

export const projects: Project[] = [
    {
        title: "Coffee Cafe Chatbot",
        image: chatbot,
        description: "A console application that allows users to order multiple coffee drinks. Built to scale with a cafe's menu and options.",
        projectLink: "https://repl.it/@JaimeVRodriguez/CoffeeChatbot#.replit",
        repoLink: "https://github.com/JaimeVRodriguez/Coffee_Chatbot",
        language: "Python"
    },
    {
        title: "ATS Hacker",
        image: hacker,
        description: "A job posting keyword counter with command line and web interfaces. Maximize your application's chances by ensuring the most used words from the job posting are in your resume.",
        repoLink: "https://github.com/JaZa-Programming/ATS-Hacker",
        language: "Python"
    },
    {
        title: "Special Operations Recruiting Data Analysis",
        image: sof,
        description: "Analyzes Special Operations selection data for Special Forces and Psychological Operations. Includes a predictive model for selection results based on candidate attributes.",
        repoLink: "https://github.com/JaimeVRodriguez/sof_selection_analysis",
        language: "Python"
    },
    {
        title: 'Soldier Solutions',
        image: aswf,
        description: 'Homepage of the Army Software Factory that serves as a centralized' +
            ' location for applying, submitting Army problems, and information about the ASWF.',
        projectLink: 'https://soldiersolutions.swf.army.mil/',
        language: 'Typescript/React - Java/Spring'
    }
]
