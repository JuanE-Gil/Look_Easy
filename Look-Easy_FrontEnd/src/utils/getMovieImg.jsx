import logo from '../assets/img/Imagen1.png';

export function getMovieImg(path, width) {
    return path ? `https://image.tmdb.org/t/p/w${width}${path}` : logo;
}

// const imageURl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
