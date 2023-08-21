import React, { useState, useEffect } from "react";
import UsuarioService from "../../services/usuario.service";
import "../Diseño.css";
const UsuarioList = () => {
  const [Users, setUsers] = useState([]);
  const [searchUsername, setSearchUsername] = useState("");

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const onChangeSearchUsername = e => {
    const searchUsername = e.target.value;
    setSearchUsername(searchUsername);
  };

  const retrieveTutorials = () => {
    UsuarioService.getAll()
      .then(response => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByUsername = () => {
    UsuarioService.findByUsername(searchUsername)
      .then(response => {
        setUsers(response.data);
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
            value={searchUsername}
            onChange={onChangeSearchUsername}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByUsername}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Lista de Usuarios</h4>

        <ul className="list-group">
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Email</th>
      </tr>
    </thead>
    {Users &&
        Users.map((user) => (
    <tbody>
      
            <tr>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
            </tr> 
          </tbody>
        ))}
        </table>
        </ul>


      </div>
    </div>
  );
};

export default UsuarioList;
