import { useState } from 'react';
import { HomeMovieCard } from '../../components/HomeMovieCard/HomeMovieCard';
import styles from './Home.module.css';
import Carrusel from '../../components/Carrusel/Carrusel';

export const Home = () => {
    const [language, setLanguage] = useState('es-MX');

    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
        console.log(`Language changed to ${newLanguage}`);
    };

    return (
        <div className='HomeContainer'>
            <Carrusel />
            <div className='headerHomeContainer'>
                <h1 className={styles.title}>Nuevos Descubrimientos</h1>
                <div className={styles.languageSelectContainer}>
                    <label htmlFor='languageSelect'>
                        Selecciona un idioma:
                    </label>
                    <select
                        id='languageSelect'
                        className={styles.languageSelect}
                        value={language}
                        onChange={(e) => handleLanguageChange(e.target.value)}>
                        <option value='es-MX'>Español</option>
                        <option value='en-US'>English</option>
                        <option value='fr-FR'>Francés</option>
                        <option value='it-IT'>Italiano</option>
                        <option value='de-DE'>Alemán</option>
                        <option value='pt-BR'>Portugués</option>
                    </select>
                </div>
            </div>
            <HomeMovieCard language={language} />
        </div>
    );
};
