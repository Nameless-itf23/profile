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
            <h2>{title}</h2>
            <div>{date}</div>
            <div>{description}</div>
        </div>
    )
}

export default Skill