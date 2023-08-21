import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../../data/httpClient';
import { getMovieImg } from '../../utils/getMovieImg';
import style from './MovieDetails.module.css';
import VideoPlayer from '../../components/MovieVideoPlayer/VideoPlayer';

export function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        get('/movie/' + movieId).then((data) => {
            setMovie(data);
            setGeneros(data.genres[0]);
        });
    }, [movieId]);

    const imageUrl = getMovieImg(movie.poster_path, 500);

    return (
        <>
            <div className={style.detailsContainer}>
                <div className={style.detalle}>
                    <div className={style.movieImage}>
                        <img
                            src={imageUrl}
                            alt={movie.title}
                            title={movie.tagline}
                            height={521.63}
                            width={397}
                        />
                    </div>
                    <div className={style.details}>
                        <div className={style.title}>
                            <p className='title'>
                                <strong>Título: </strong>
                                {movie.title}
                            </p>
                        </div>
                        <div className={style.movieDetails}>
                            <p>
                                <strong>Descripción: </strong>
                                {movie.overview}
                            </p>
                            <p>
                                <strong>Duración: </strong>
                                {movie.runtime} min
                            </p>
                            <p>
                                <strong>Fecha de Estreno: </strong>
                                {movie.release_date}
                            </p>
                            <p>
                                <strong>Puntuación: </strong>
                                {movie.vote_average}
                            </p>
                            <p>
                                <strong>Género: </strong>
                                {generos.name}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.videoPlayerContainer}>
                <VideoPlayer movieId={movie.id} />
            </div>
        </>
    );
}
