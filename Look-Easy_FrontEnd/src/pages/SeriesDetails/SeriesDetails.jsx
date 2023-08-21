import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../../data/httpClient';
import { getMovieImg } from '../../utils/getMovieImg';
import style from './SeriesDetails.module.css';
import VideoPlayer from '../../components/SeriesVideoPlayer/VideoPlayer';

export function SerieDetails() {
    const { serieId } = useParams();
    const [serie, setSerie] = useState([]);
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        get('/tv/' + serieId).then((data) => {
            setSerie(data);
            setGeneros(data.genres[0]);
        });
    }, [serieId]);

    const imageUrl = getMovieImg(serie.poster_path, 500);

    return (
        <>
            <div className={style.detailsContainer}>
                <div className={style.detalle}>
                    <div className={style.movieImage}>
                        <img
                            src={imageUrl}
                            alt={serie.title}
                            title={serie.tagline}
                            height={521.63}
                            width={397}
                        />
                    </div>
                    <div className={style.details}>
                        <div className={style.title}>
                            <p className='title'>
                                <strong>Titulo: </strong>
                                {serie.name}
                            </p>
                        </div>
                        <div className={style.movieDetails}>
                            <p>
                                <strong>Descripción: </strong>
                                {serie.overview}
                            </p>
                            <p>
                                <strong>Duración: </strong>
                                {serie.episode_run_time} min
                            </p>
                            <p>
                                <strong>Nro de Episodios: </strong>
                                {serie.number_of_episodes}
                            </p>
                            <p>
                                <strong>Nro de Temporadas: </strong>
                                {serie.number_of_seasons}
                            </p>
                            <p>
                                <strong>Fecha de Estreno: </strong>
                                {serie.first_air_date}
                            </p>
                            <p>
                                <strong>Puntuación: </strong>
                                {serie.vote_average}
                            </p>
                            <p>
                                <strong>Genero: </strong>
                                {generos.name}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.videoPlayerContainer}>
                <VideoPlayer SerieId={serie.id} />
            </div>
        </>
    );
}
