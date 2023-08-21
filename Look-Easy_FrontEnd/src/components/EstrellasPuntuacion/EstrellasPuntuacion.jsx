import React, { useState, useEffect } from 'react';
import { get } from '../../data/httpClient';

const EstrellasPuntuacion = ({ puntuacion, movie }) => {
    const maxEstrellas = 10; // Máximo de estrellas a mostrar
    const estrellaLlena = <i className='fas fa-star' aria-hidden='true'></i>;
    const estrellaVacia = <i className='far fa-star' aria-hidden='true'></i>;

    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        get('/movie/' + movie.id).then((data) => {
            setMovieDetails(data); // Guardar los detalles de la película en el estado
        });
    }, [movie.id]);

    const elementosEstrellas = [];
    for (let i = 0; i < maxEstrellas; i++) {
        elementosEstrellas.push(i < puntuacion ? estrellaLlena : estrellaVacia);
    }

    return (
        <div>
            {elementosEstrellas}
            {movieDetails && <span> {movieDetails.vote_average} / 5</span>}
        </div>
    );
};

export default EstrellasPuntuacion;
