/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { get } from '../../data/httpClient';
import { SerieCard } from '../SerieCard/SerieCard';
import styles from './ContextSeriesCard.module.css';

export function ContextSeriesCard({ language }) {
    const [series, setSeries] = useState([]);
    const [page, setPage] = useState(1);

    const loadMoreSeries = () => {
        const nextPage = page + 1;
        get(`/tv/top_rated?page=${nextPage}&language=${language}`).then(
            (data) => {
                setSeries((prevMovies) => [...prevMovies, ...data.results]);
                setPage(nextPage);
            }
        );
    };

    useEffect(() => {
        get(`/tv/top_rated?language=${language}`).then((data) => {
            setSeries(data.results);
            console.log(data)
        });
    }, [language]);

    return (
        <div className={styles.MovieContainer}>
            <div>
                <ul className={styles.contextMovieContainer}>
                    {series.map((serie) => (
                        <SerieCard serie={serie} key={serie.id} />
                    ))}
                </ul>
            </div>
            <button className='loadMoreButton' onClick={loadMoreSeries}>
                Cargar más
            </button>
        </div>
    );
}
