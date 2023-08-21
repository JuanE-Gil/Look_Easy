/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { get } from '../../data/httpClient';
import { MovieCard } from '../MovieCard/MovieCard';
import styles from './TopRatedMovieCard.module.css';

export function TopRatedMovieCard({ language }) {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    const loadMoreMovies = () => {
        const nextPage = page + 1;
        get(`/movie/top_rated?page=${nextPage}&language=${language}`).then(
            (data) => {
                setMovies((prevMovies) => [...prevMovies, ...data.results]);
                setPage(nextPage);
            }
        );
    };

    useEffect(() => {
        get(`/movie/top_rated?language=${language}`).then((data) => {
            setMovies(data.results);
        });
    }, [language]);

    return (
        <div className={styles.MovieContainer}>
            <div className={styles.headerMovieContainer}>
                <h1 className={styles.title}>Mejor Valoradas</h1>
            </div>
            <div>
                <ul className={styles.contextMovieContainer}>
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </ul>
            </div>
            <button className='loadMoreButton' onClick={loadMoreMovies}>
                Cargar más
            </button>
        </div>
    );
}
