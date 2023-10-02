import icon from '../assets/icon.png'
import './HeroArea.css'

function HeroArea() {
    return (
        <div className='HeroArea'>
            <img src={icon} className='icon'/>
            <p className='name'>Nameless</p>
        </div>
    )
}

export default HeroArea