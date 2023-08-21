import React, { useState } from 'react'
import './Buscador.css'
import { Link } from 'react-router-dom'

const Buscador = () => {
  const urlBase = 'https://api.themoviedb.org/3/search/multi'
  const API_KEY = '0e239e659ae4c0579b4593c035642123'

  const [busqueda, setBusqueda] = useState('')
  const [peliculas, setPeliculas] = useState([])
  const [series, setSeries] = useState([])

  const handleInputChange = e => {
    setBusqueda(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await fetchPeliculas()
  }

  const fetchPeliculas = async () => {
    try {
      const response = await fetch(
        `${urlBase}?query=${busqueda}&api_key=${API_KEY}&language=es-MX`
      )
      const data = await response.json()

      // Separar películas y series en diferentes arreglos
      const peliculasResult = data.results.filter(
        item => item.media_type === 'movie'
      )

      const seriesResult = data.results.filter(item => item.media_type === 'tv')

      setPeliculas(peliculasResult)
      setSeries(seriesResult)
    } catch (error) {
      console.error('Ha ocurrido un error: ', error)
    }
  }

  return (
    <div className='container'>
      <h1 className='title'>Buscador de Películas y Series</h1>
      <form onSubmit={handleSubmit} className='search-form'>
        <input
          type='text'
          placeholder='Escribe el título de una película o serie'
          value={busqueda}
          onChange={handleInputChange}
          className='search-input'
        />
        <button type='submit' className='search-button'>
          Buscar
        </button>
      </form>

      <div className='movie-list'>
        <h2>Películas</h2>
        <div className='movie-section'>
          {peliculas.map(pelicula => (
            <div key={pelicula.id} className='movie-card'>
              <Link to={'/movies/' + pelicula.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                  alt={pelicula.title || pelicula.name}
                  className='movie-poster'
                />
                <h2 className='movie-title'>
                  {pelicula.title || pelicula.name}
                </h2>
              </Link>
            </div>
          ))}
        </div>

        <h2>Series</h2>
        <div className='series-section'>
          {series.map(serie => (
            <div key={serie.id} className='movie-card'>
              <Link to={'/serie/' + serie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                  alt={serie.title || serie.name}
                  className='movie-poster'
                />
                <h2 className='movie-title'>{serie.title || serie.name}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Buscador
