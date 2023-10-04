import './SNS.css'
import X from '../assets/sns/X.jpg'
import GitHub from '../assets/sns/GutHub.png'
import AtCoder from '../assets/sns/AtCoder.png'

function SNS() {
    return (
        <div className='SNS'>
            <a href='https://twitter.com/Nameless_itf'><img src={X} className='sns-icon' /></a>
            <a href='https://github.com/Nameless-itf23'><img src={GitHub} className='sns-icon' /></a>
            <a href='https://atcoder.jp/users/Nameless_itf'><img src={AtCoder} className='sns-icon' /></a>
        </div>
    )
}

export default SNS