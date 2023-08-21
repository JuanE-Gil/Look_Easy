import React, { useState, useEffect } from "react";
import ReclamoDataService from "../../services/Reclamo.service";
import "../Diseño.css";

const ReclamosList = () => {
  const [reclamos, setReclamos] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveTutorials();
  }, []);

/*buscador*/ 
  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };
/*Listar los datos */ 
  const retrieveTutorials = () => {
    ReclamoDataService.getAll()
      .then(response => {
        setReclamos(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

/*Para mostrar informacion luego de la busqueda*/ 
  const findByTitle = () => {
    ReclamoDataService.findByTitle(searchTitle)
      .then(response => {
        setReclamos(response.data);
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
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Defecto</th>
        <th>Asunto</th>
        <th>User</th>
      </tr>
    </thead>
    {reclamos &&
        reclamos.map((tutorial) => (
    <tbody>
      
            <tr>
              <td>{tutorial.id}</td>
              <td>{tutorial.defecto}</td>
              <td>{tutorial.asunto}</td>
              <td>{tutorial.user}</td>
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
