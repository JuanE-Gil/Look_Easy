import React, { useState } from "react";
import SerieDataService from "../../services/SerieService";
import "../Diseño.css";
const AddSerie = () => {
  const initialTutorialState = {
    id: null,
    titulo: "",
    descripcion: "",
    anio: "",
    duracion: "",
    episodios:"",
    genero: "",
    imagen: ""
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      titulo: tutorial.titulo,
      descripcion: tutorial.descripcion,
      anio: tutorial.anio,
      duracion: tutorial.duracion,
      episodios: tutorial.episodios,
      genero: tutorial.genero,
      imagen: tutorial.imagen
    };

    SerieDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          titulo: response.data.titulo,
          descripcion: response.data.descripcion,
          anio: response.data.anio,
          duracion: response.data.duracion,
          episodios: response.data.episodios,
          genero: response.data.genero,
          imagen: response.data.imagen
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Add
          </button>
        </div>
      ) : (
        <div className="Agregar">
          <div className="form-group">
            <label htmlFor="titulo">titulo</label>
            <input
              type="text"
              className="form-control"
              id="titulo"
              required
              value={tutorial.titulo}
              onChange={handleInputChange}
              name="titulo"
            />
          </div>

          <div className="form-group">
            <label htmlFor="descripcion">Descripcion</label>
            <input
              type="text"
              className="form-control"
              id="descripcion"
              required
              value={tutorial.descripcion}
              onChange={handleInputChange}
              name="descripcion"
            />
          </div>

          <div className="form-group">
            <label htmlFor="anio">Año</label>
            <input
              type="number"
              className="form-control"
              id="anio"
              required
              value={tutorial.anio}
              onChange={handleInputChange}
              name="anio"
            />
          </div>

          <div className="form-group">
            <label htmlFor="duracion">duracion</label>
            <input
              type="number"
              className="form-control"
              id="duracion"
              required
              value={tutorial.duracion}
              onChange={handleInputChange}
              name="duracion"
            />
          </div>

          <div className="form-group">
            <label htmlFor="episodios">Episodios</label>
            <input
              type="number"
              className="form-control"
              id="episodios"
              required
              value={tutorial.episodios}
              onChange={handleInputChange}
              name="episodios"
            />
          </div>

          <div className="form-group">
            <label htmlFor="genero">genero</label>
            <input
              type="text"
              className="form-control"
              id="genero"
              required
              value={tutorial.genero}
              onChange={handleInputChange}
              name="genero"
            />
          </div>

          <div className="form-group">
            <label htmlFor="imagen">Imagen</label>
            <input
              type="text"
              className="form-control"
              id="imagen"
              required
              value={tutorial.imagen}
              onChange={handleInputChange}
              name="imagen"
            />
          </div>
          <div className="guarda">
          <button onClick={saveTutorial} className="btn btn-success">
            Submit
          </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddSerie;
