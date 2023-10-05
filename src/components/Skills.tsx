import { useTranslation } from "react-i18next";
import './Skills.css'
import Skill from "./Skill";
import Python from '../assets/skills/Python.png'
import Unity from '../assets/skills/Unity.png'
import Blender from '../assets/skills/Blender.png'
import HTML_CSS from '../assets/skills/HTML_CSS.png'
import JavaScript from '../assets/skills/JavaScript.png'
import _React from '../assets/skills/React.png'
import AtCoder from '../assets/skills/AtCoder.png'

function Skills() {
    const { t } = useTranslation();

    type type_skill = {
        img: string,
        title: string,
        date: string,
        description: string
    };

    const skills: type_skill[] = [
        {img: Python, title: 'Python', date: '2020 / 05 ~', description: 'skills.skill.Python'},
        {img: Unity, title: 'Unity C#', date: '2023 / 05 ~', description: 'skills.skill.Unity'},
        {img: Blender, title: 'Blender', date: '2021 / 07 ~', description: 'skills.skill.Blender'},
        {img: HTML_CSS, title: 'HTML / CSS', date: '2023 / 07 ~', description: 'skills.skill.HTML_CSS'},
        {img: JavaScript, title: 'JavaScript', date: '2023 / 06 ~', description: 'skills.skill.JavaScript'},
        {img: _React, title: 'React', date: '2023 / 07 ~', description: 'skills.skill.React'},
        {img: AtCoder, title: 'AtCoder', date: '2023 / 06 ~', description: 'skills.skill.AtCoder'}
    ];
    
    return (
        <section>
            <h1>{t('skills.title')}</h1>
            <div className='Skills'>
                {skills.map((skill, index) => <Skill key={index} img={skill.img} title={skill.title} date={skill.date} description={t(skill.description)}/>)}
            </div>
        </section>
    )
}

export default Skills