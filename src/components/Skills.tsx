import { useTranslation } from "react-i18next";

function Skills() {
    const { t } = useTranslation();
    return (
        <section>
            <h1>{t('skills.title')}</h1>
        </section>
    )
}

export default Skills