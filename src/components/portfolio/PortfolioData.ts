import {PortfolioType} from "./PortfolioType";

export const portfolioData: PortfolioType[] = [
    {
        id: 1,
        delayOne: '300',
        language: 'Python',
        title: 'Coffee Cafe Chatbot',
        description: 'Utilizing the Python programming language, Coffee Cafe Chatbot is a\n' +
            '                            console application that allows users to order multiple coffee drinks.\n' +
            '                            Based on users input choices, multiple options will be expanded. The\n' +
            '                            chatbot is built to scale with a cafe\'s menu and options.',
        delayTwo: '600',
        repoLink: 'https://github.com/JaimeVRodriguez/Coffee_Chatbot',
        image: 'images/coffeebot_mock.png'
    },
    {
        id: 2,
        delayOne: '1800',
        language: 'Python',
        title: 'Special Operations Recruiting Data Analysis',
        description: 'Culminating project as a part of the Galvanize Data Analytics Immersive\n' +
            'Course. Analyzes Special Operations selection data for the Special\n' +
            'Forces and Psychological Operations Career fields. After conducting\n' +
            'exploratory data analysis, further work was done to create a selection\n' +
            'result predictive model based on the available attributes of prospective\n' +
            'candidates.',
        delayTwo: '1500',
        repoLink: 'https://github.com/JaimeVRodriguez/sof_selection_analysis',
        image: 'images/dai_mock.png'
    }
]