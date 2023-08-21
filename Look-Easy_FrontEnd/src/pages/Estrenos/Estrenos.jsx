import { useState } from 'react';
import { UpcomingMovieCard } from '../../components/UpcomingMovieCard/UpcomingMovieCard';
import styles from './Estrenos.module.css';

export const Estrenos = () => {
    const [language, setLanguage] = useState('es-MX');

    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
        console.log(`Language changed to ${newLanguage}`);
    };

    return (
        <div>
            <div className={styles.estrenosContainer}>
                <div className='headerEstrenosContainer'>
                    <h1 className={styles.title}>Próximamente</h1>
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
            <UpcomingMovieCard language={language} />
        </div>
    );
};
