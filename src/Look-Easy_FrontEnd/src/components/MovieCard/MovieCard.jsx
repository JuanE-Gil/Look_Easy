import styles from './MovieCard.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { get } from '../../data/httpClient';

export function MovieCard({ movie }) {
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        get('/movie/' + movie.id).then((data) => {
            setGeneros(data.genres[0]);
            console.log(data.genres[0]);
        });
    }, [movie.id]);

    const imageURl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
    return (
        <li className={styles.movieCard}>
            <Link to={'/movies/' + movie.id}>
                <img
                    className={styles.movieImage}
                    width={230}
                    height={345}
                    src={imageURl}
                    alt={movie.title}
                    title={movie.title}
                />
            </Link>
            <div className={styles.movieTitle}>
                <p>{movie.title}</p>
            </div>
            <div className={styles.movieDetails}>
                <p>{generos.name}</p>

                <div className='rating'>
                    <i className='fas fa-star' aria-hidden='true' />
                    <i className='fas fa-star' aria-hidden='true' />
                    <i className='fas fa-star' aria-hidden='true' />
                    <i className='fas fa-star' aria-hidden='true' />
                    <i className='far fa-star' aria-hidden='true' />
                    <span> </span>
                    <span>{movie.vote_average} / 10</span>
                </div>
            </div>
        </li>
    );
}
