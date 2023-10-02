import './Skill.css'

type Props = {
img: string,
    title: string,
    date: string,
    description: string
}

function Skill({img, title, date, description}: Props) {
    return (
        <div className='Skill'>
            <img src={img} className='skill-img'></img>
            <h2 className='skill-title'>{title}</h2>
            <div className='skill-date'>{date}</div>
            <div className='skill-description'>{description}</div>
        </div>
    )
}

export default Skill