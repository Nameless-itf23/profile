import './Footer.css'
import SNS from './SNS'

function Footer() {
    return (
        <footer>
            <div className='follow-me'>
                <h1 className='follow-content'><div className='gradation'>Follow me !</div></h1>
                <SNS />
            </div>
        </footer>
    )
}

export default Footer