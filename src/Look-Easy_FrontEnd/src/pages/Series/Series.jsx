import { useState } from 'react';
import { ContextSeriesCard } from '../../components/ContextSeriesCard/ContextSeriesCard';
import styles from './Series.module.css';

export const Series = () => {
    const [language, setLanguage] = useState('es-MX');

    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
        console.log(`Language changed to ${newLanguage}`);
    };

    return (
        <div>
            <div className={styles.seriesContainer}>
                <div className='headerSeriesContainer'>
                    <h1 className={styles.title}>Series</h1>
                    <div className={styles.languageSelectContainer}>
                        <label htmlFor='languageSelect'>
                            Selecciona un idioma:
                        </label>
                        <select
                            id='languageSelect'
                            className={styles.languageSelect}
                            value={language}
                            onChange={(e) =>
                                handleLanguageChange(e.target.value)
                            }>
                            <option value='es-MX'>Español</option>
                            <option value='en-US'>English</option>
                            <option value='fr-FR'>Francés</option>
                            <option value='it-IT'>Italiano</option>
                            <option value='de-DE'>Alemán</option>
                            <option value='pt-BR'>Portugués</option>
                        </select>
                    </div>
                </div>
            </div>
            <ContextSeriesCard language={language} />
        </div>
    );
};
