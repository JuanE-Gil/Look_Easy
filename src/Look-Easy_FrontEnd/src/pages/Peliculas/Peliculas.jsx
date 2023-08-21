import { useState } from 'react';
import { NowPlayingMovieCard } from '../../components/NowPlayingMovieCard/NowPlayingMovieCard';
import { PopularMovieCard } from '../../components/PopularMovieCard/PopularMovieCard';
import { TopRatedMovieCard } from '../../components/TopRatedMovieCard/TopRatedMovieCard';
import styles from './Peliculas.module.css';

export const Movies = () => {
    const [language, setLanguage] = useState('es-MX');

    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
        console.log(`Language changed to ${newLanguage}`);
    };

    return (
        <div>
            <div className={styles.languageSelectContainer}>
                <label htmlFor='languageSelect'>Selecciona un idioma:</label>
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
            <div className='border border-dark'>
                <NowPlayingMovieCard language={language} />
            </div>
            <div className='border border-dark'>
                <PopularMovieCard language={language} />
            </div>
            <div className='border border-dark'>
                <TopRatedMovieCard language={language} />
            </div>
        </div>
    );
};
