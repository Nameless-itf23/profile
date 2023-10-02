import { useTranslation } from "react-i18next";
import './Profile.css'

function Profile() {
    const { t } = useTranslation();
    return (
        <section>
            <h1>{t('profile.title')}</h1>
            <table>
                <tbody>
                    <tr>
                        <td>{t('profile.name.q')}</td><td>{t('profile.name.a')}</td>
                    </tr>
                    <tr>
                        <td>{t('profile.age.q')}</td><td>{t('profile.age.a')}</td>
                    </tr>
                    <tr>
                        <td>{t('profile.birth.q')}</td><td>{t('profile.birth.a')}</td>
                    </tr>
                    <tr>
                        <td>{t('profile.school.q')}</td><td>{t('profile.school.a')}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default Profile