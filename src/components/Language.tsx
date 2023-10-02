import i18n from 'i18next'
import './Language.css'

function Language() {
    return (
        <div className='Language'>
            <button className='lang-btn' onClick={() => i18n.changeLanguage('ja')}>JA</button>
            <p>/</p>
            <button className='lang-btn' onClick={() => i18n.changeLanguage('en')}>EN</button>
        </div>
    )
}

export default Language