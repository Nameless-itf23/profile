import { useTranslation } from "react-i18next";
import './Skills.css'
import Skill from "./Skill";
import Python from '../assets/Python.png'
import Unity from '../assets/Unity.png'
import HTML_CSS from '../assets/HTML_CSS.png'
import JavaScript from '../assets/JavaScript.png'
import _React from '../assets/React.png'
import AtCoder from '../assets/AtCoder.png'

function Skills() {
    const { t } = useTranslation();

    type type_skill = {
        key: number,
        img: string,
        title: string,
        date: string,
        description: string
    };

    const skills: type_skill[] = [
        {key: 0, img: Python, title: 'Python', date: '2020 / 05 ~', description: 'skills.skill.Python'},
        {key: 1, img: Unity, title: 'Unity C#', date: '2023 / 05 ~', description: 'skills.skill.Unity'},
        {key: 2, img: HTML_CSS, title: 'HTML / CSS', date: '2023 / 07 ~', description: 'skills.skill.HTML_CSS'},
        {key: 3, img: JavaScript, title: 'JavaScript', date: '2023 / 06 ~', description: 'skills.skill.JavaScript'},
        {key: 4, img: _React, title: 'React', date: '2023 / 07 ~', description: 'skills.skill.React'},
        {key: 5, img: AtCoder, title: 'AtCoder', date: '2023 / 06 ~', description: 'skills.skill.AtCoder'}
    ];
    
    return (
        <section>
            <h1>{t('skills.title')}</h1>
            <div className='Skills'>
                {skills.map((skill) => <Skill key={skill.key} img={skill.img} title={skill.title} date={skill.date} description={t(skill.description)}/>)}
            </div>
        </section>
    )
}

export default Skills