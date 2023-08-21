import React, { useState, useEffect } from "react";
import VistaDataService from "../../services/Vista.service";
import "../Diseño.css";


const ReclamosList = () => {
  const [vistas, setVistas] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveTutorials = () => {
    VistaDataService.getAll()
      .then(response => {
        setVistas(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };


  const findByTitle = () => {
    VistaDataService.findByTitle(searchTitle)
      .then(response => {
        setVistas(response.data);
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
      <h4>Lista de Vistas</h4>

<ul className="list-group">
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>viewers</th>
        <th>Pelicula</th>
      </tr>
    </thead>
    {vistas &&
        vistas.map((vista) => (
    <tbody>
      
            <tr>
              <td>{vista.id}</td>
              <td>{vista.viewers}</td>
              <td>{vista.pelicula}</td>
            </tr>
            
          </tbody>
        ))}
        </table>
        </ul>

      </div>
    </div>
  );
};

export default ReclamosList;
