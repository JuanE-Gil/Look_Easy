/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { get } from '../../data/httpClient';
import { MovieCard } from '../MovieCard/MovieCard';
import styles from './UpcomingMovieCard.module.css';

export function UpcomingMovieCard({ language }) {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    const loadMoreMovies = () => {
        const nextPage = page + 1;
        get(`/movie/upcoming?page=${nextPage}&language=${language}`).then(
            (data) => {
                setMovies((prevMovies) => [...prevMovies, ...data.results]);
                setPage(nextPage);
            }
        );
    };

    useEffect(() => {
        get(`/movie/upcoming?language=${language}`).then((data) => {
            setMovies(data.results);
        });
    }, [language]);

    return (
        <div className={styles.MovieContainer}>
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
