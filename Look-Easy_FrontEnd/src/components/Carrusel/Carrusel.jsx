import { useEffect, useState, } from 'react';
import styles from './Carrusel.module.css'
import { Link } from 'react-router-dom';
const Carrusel = () => {
    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const respuesta = await fetch(
                    'https://api.themoviedb.org/3/movie/now_playing?api_key=&language=es-MX'
                );
                const datos = await respuesta.json();
                setPeliculas(datos.results.slice(0, 3));
            } catch (error) {
                console.error('Error al cargar los datos del carrusel', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div id='carrusel' className='carousel slide' data-bs-ride='carousel'>
            <div className='carousel-inner'>
                {peliculas.map((pelicula, index) => (
                    <div
                        key={pelicula.id}
                        className={`carousel-item ${
                            index === 0 ? 'active' : ''
                        }`}>
                        <div className={styles['image-container']}>
                            <img
                                className={styles['carousel-image']}
                                src={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}
                                alt={pelicula.title}
                            />
                        </div>
                        <div className='carousel-caption text-start'>
                            <h1 className='text-white'>{pelicula.title}</h1>
                            <p className='text-white'>{pelicula.overview}</p>
                            <p>
                                <Link
                                    to={'/movies/' + pelicula.id}
                                    className='btn btn-lg btn-primary'>
                                    <svg
                                        width='20'
                                        height='20'
                                        viewBox='0 0 20 20'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <g id='Play'>
                                            <path
                                                id='Icon'
                                                fillRule='evenodd'
                                                clipRule='evenodd'
                                                d='M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z'
                                                fill='white'
                                            />
                                        </g>
                                    </svg>
                                    Ver ahora
                                </Link>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className='carousel-control-prev'
                type='button'
                data-bs-target='#carrusel'
                data-bs-slide='prev'>
                <span
                    className='carousel-control-prev-icon'
                    aria-hidden='true'></span>
                <span className='visually-hidden'>Anterior</span>
            </button>
            <button
                className='carousel-control-next'
                type='button'
                data-bs-target='#carrusel'
                data-bs-slide='next'>
                <span
                    className='carousel-control-next-icon'
                    aria-hidden='true'></span>
                <span className='visually-hidden'>Siguiente</span>
            </button>
        </div>
    );
};

export default Carrusel;
