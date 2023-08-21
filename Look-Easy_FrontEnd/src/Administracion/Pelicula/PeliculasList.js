import React, { useState, useEffect } from "react";
import TutorialDataService from "../../services/Pelicula.Service";
import { Link } from "react-router-dom";
import "../Diseño.css";

const PeliculasList = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveTutorials = () => {
    TutorialDataService.getAll()
      .then(response => {
        setPeliculas(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveTutorials();
    setCurrentTutorial(null);
    setCurrentIndex(-1);
  };

  const setActiveTutorial = (tutorial, index) => {
    setCurrentTutorial(tutorial);
    setCurrentIndex(index);
  };


  const deleteTutorial = () => {
    TutorialDataService.remove(currentTutorial.id)
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    TutorialDataService.findByTitle(searchTitle)
      .then(response => {
        setPeliculas(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by titutlo"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <h4>Lista de Peliculas</h4>

        <ul className="list-group">
          {peliculas &&
            peliculas.map((tutorial, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveTutorial(tutorial, index)}
                key={index}
              >
                {tutorial.titulo}
              </li>
            ))}
        </ul>
        <div className="delete">
        <button className="badge badge-danger mr-2" onClick={deleteTutorial}>
            Delete
          </button>
        </div>

      </div>
      <div className="col-md-6">
        {currentTutorial ? (
          <div>
            <h4>Pelicula</h4>
            <div>
              <label>
                <strong>titulo:</strong>
              </label>{" "}
              {currentTutorial.titulo}
            </div>
            <div>
              <label>
                <strong>Descripcion:</strong>
              </label>{" "}
              {currentTutorial.descripcion}
            </div>
            <div className="d-flex">
            <div className="anio">
              <label>
                <strong>Año:</strong>
              </label>{" "}
              {currentTutorial.anio}
              <label>
                <strong>Duracion:</strong>
              </label>{" "}
              {currentTutorial.duracion}
              <label>
                <strong>Genero:</strong>
              </label>{" "}
              {currentTutorial.genero}
            
            <div className="editar">
              <Link  to={"/peliculas/" + currentTutorial.id}
              className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
            </div>
            <div className="imagen">
              <label>
                <strong>Imagen:</strong>
              </label>{" "}
              <img src={currentTutorial.imagen} style={{height:"200px", width: "300px"}}></img>
            </div>
            <div className="espacio"></div>
            </div>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
      </div>
  );
};

export default PeliculasList;
