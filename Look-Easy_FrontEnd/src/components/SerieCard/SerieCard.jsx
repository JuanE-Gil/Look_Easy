import styles from './SerieCard.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { get } from '../../data/httpClient';
export function SerieCard({ serie }) {
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        get('/tv/' + serie.id).then((data) => {
            setGeneros(data.genres[0]);
        });
    }, [serie.id]);

    const imageURl = 'https://image.tmdb.org/t/p/w300' + serie.poster_path;
    return (
        <li className={styles.serieCard}>
            <Link to={'/serie/' + serie.id}>
                <img
                    className={styles.movieImage}
                    width={230}
                    height={345}
                    src={imageURl}
                    alt={serie.name}
                    title={serie.name}
                />
            </Link>
            <div className={styles.serieDetails}>
                <p className={styles.serieTitle}>{serie.name}</p>
                <p>{generos.name}</p>

                <div className='rating'>
                    <i className='fas fa-star' aria-hidden='true' />
                    <i className='fas fa-star' aria-hidden='true' />
                    <i className='fas fa-star' aria-hidden='true' />
                    <i className='fas fa-star' aria-hidden='true' />
                    <i className='far fa-star' aria-hidden='true' /> 
                    <span> </span>
                    <span>{serie.vote_average} / 10</span>
                </div>
            </div>
        </li>
    );
}
