
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import EventBus from "../common/EventBus";
import AuthService from "../services/auth.service";
import React, { useState, useEffect } from "react";
import Login from '../Auth/Login/Login';
import Registrarse from '../Auth/Registro/Registration';
import Profile from "../Auth/Board/Profile";
import AddPelicula from "../Administracion/Pelicula/AddPelicula";
import PeliculasList  from "../Administracion/Pelicula/PeliculasList";
import Pelicula from "../Administracion/Pelicula/Pelicula";
import AddSerie from "../Administracion/Serie/AddSerie";
import SeriesList from "../Administracion/Serie/SerieList";
import Serie  from "../Administracion/Serie/Serie";
import Reclamo from "../Administracion/Lista/ReclamoList";
import User from "../Administracion/Usuario/UsuarioList";
import Vista from "../Administracion/Lista/VistasList";


export const Admin = () => {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);
  
    useEffect(() => {
      const user = AuthService.getCurrentUser();
  
      if (user) {
        setCurrentUser(user);
        setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
        setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      }
  
      EventBus.on("logout", () => {
        logOut();
      });
  
      return () => {
        EventBus.remove("logout");
      };
    }, []);
  
    const logOut = () => {
      AuthService.logout();
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
      setCurrentUser(undefined);
    };

  return (
    <div>
          <Routes>
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/singup' element={<Registrarse />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/" element={<PeliculasList/>} />
                <Route path="/peliculas" element={<PeliculasList/>} />
                <Route path="/addPelicula" element={<AddPelicula/>} />
                <Route path="/peliculas/:id" element={<Pelicula/>} />
                <Route path="/" element={<SeriesList/>} />
                <Route path="/seriesList" element={<SeriesList/>} />
                <Route path="/addSerie" element={<AddSerie/>} />
                <Route path="/series/:id" element={<Serie/>} />
                <Route path="/reclamosList" element={<Reclamo/>} />
                <Route path="/users" element={<User/>} />
                <Route path="/vistas" element={<Vista/>} />
          </Routes>
      </div>
      
  );
};

export default Admin;
