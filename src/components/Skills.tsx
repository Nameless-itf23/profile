import { useTranslation } from "react-i18next";
import './Skills.css'
import Skill from "./Skill";
import Python from '../assets/Python.png'

type type_skill = {
    img: string,
    title: string,
    date: string,
    description: string
};

const skills: type_skill[] = [
    {img: Python, title: 'Python', date: '2020 / 05 ~', description: 'これは説明です。これは説明です。これは説明です。'},
    {img: Python, title: 'Python', date: '2020 / 05 ~', description: 'これは説明です。これは説明です。これは説明です。'},
    {img: Python, title: 'Python', date: '2020 / 05 ~', description: 'これは説明です。これは説明です。これは説明です。'}
];

function Skills() {
    const { t } = useTranslation();
    return (
        <section>
            <h1>{t('skills.title')}</h1>
            <div className='Skills'>
                {skills.map((skill) => <Skill img={skill.img} title={skill.title} date={skill.date} description={skill.description}/>)}
            </div>
        </section>
    )
}

export default Skills