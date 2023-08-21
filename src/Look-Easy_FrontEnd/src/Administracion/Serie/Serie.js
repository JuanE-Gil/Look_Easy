import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import SerieDataService from "../../services/SerieService";
import { Link } from "react-router-dom";
import "../Diseño.css";
const Serie = props => {
  const { id }= useParams();

  const initialTutorialState = {
    id: null,
    titulo: "",
    descripcion: "",
    anio: false,
    duracion: false,
    episodios: false,
    genero: "",
    imagen: ""
  };
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [message, setMessage] = useState("");

  const getTutorial = id => {
    SerieDataService.get(id)
      .then(response => {
        setCurrentTutorial(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getTutorial(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };


  const updateTutorial = () => {
    SerieDataService.update(currentTutorial.id, currentTutorial)
      .then(response => {
        console.log(response.data);
        setMessage("The tutorial was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
    {currentTutorial ? (
      <div className="edit-form">
        <h4>Serie</h4>
        <div className="d-flex">
          <div className="form-group">
            <label htmlFor="titulo">titulo</label>
            <input
              type="text"
              className="form-control"
              id="titulo"
              name="titulo"
              value={currentTutorial.titulo}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="descripcion">Descripcion</label>
            <input
              type="text"
              className="form-control"
              id="descripcion"
              name="descripcion"
              value={currentTutorial.descripcion}
              onChange={handleInputChange}
            />
          </div>
          </div>

          <div className="d-flex">
          <div className="form-group">
            <label htmlFor="anio">Año</label>
            <input
              type="number"
              className="form-control"
              id="anio"
              name="anio"
              value={currentTutorial.anio}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="duracion">duracion</label>
            <input
              type="number"
              className="form-control"
              id="duracion"
              name="duracion"
              value={currentTutorial.duracion}
              onChange={handleInputChange}
            />
          </div>
          </div>

          <div className="d-flex">
          <div className="form-group">
            <label htmlFor="genero">Genero</label>
            <input
              type="text"
              className="form-control"
              id="genero"
              name="genero"
              value={currentTutorial.genero}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
              <label htmlFor="episodios">Episodios</label>
              <input
                type="number"
                className="form-control"
                id="episodios"
                name="episodios"
                value={currentTutorial.episodios}
                onChange={handleInputChange}
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="imagen">Imagen</label>
            <input
              type="text"
              className="form-control"
              id="imagen"
              name="imagen"
              value={currentTutorial.imagen}
              onChange={handleInputChange}
            />
          </div>
          

        <div className="opciones">
        <div className="d-flex">
        <div className="atras">
        <Link
              to={"/seriesList/"}
              className="badge badge-warning"
            >
              Atras
          </Link>
        </div>
        <div className="actual">
        <button
          type="submit"
          className="badge badge-success"
          onClick={updateTutorial}
          to={"/series/"}
        >
          Update
        </button>
        </div>
        </div>
        </div>
        
        
        <p>{message}</p>
      </div>
    ) : (
      <div>
        <br />
        <p>Please click on a Tutorial...</p>
      </div>
    )}
  </div>
);
};

export default Serie;
