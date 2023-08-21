import { Link, NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import AuthService from '../../services/auth.service';
import EventBus from '../../common/EventBus';
import Dentro from '../dentro/dentro';
import * as FaIcons from 'react-icons/fa';
import "./LoginPublic.css";
import logo from "../assets/projects.svg";

export const NavbarAdmin = () => {
    const [showModeratorBoard,setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
            setShowModeratorBoard(user.roles.includes('ROLE_MODERATOR'));
            setShowAdminBoard(user.roles.includes('ROLE_ADMIN'));
        }

        EventBus.on('logout', () => {
            logOut();
        });

        return () => {
            EventBus.remove('logout');
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
      <div className='sidebar'>
      <ul>
          <li className='opciones'>
              <NavLink to={"/peliculas"} className='text-dark'>
                  <FaIcons.FaVideo className='me-2' />
                  Peliculas
              </NavLink>
          </li> 
          <li className='opciones'>
              <NavLink to={"/seriesList"}  exact className='text-dark'>
                  <FaIcons.FaFilm className='me-2' />
                  Series
              </NavLink>
          </li>

          <li className='opciones'>
              <NavLink to={"/users"}  exact className='text-dark rounded py-2 w-100 d-inline-block px-1' activeClassName="active">
                  <FaIcons.FaUser className='me-2' />
                  Usuarios
              </NavLink>
          </li>

          <li className='opciones'>
          <li class="dropdown__list">
                    <a href="#" class="dropdown__link">
                        <FaIcons.FaVideo className="me-2" />AgregarContenido
                        <img src="./assets/down.svg" class="dropdown__arrow" />
                        <input type="checkbox" class="dropdown__check" />
                    </a>

                    <div class="dropdown__content">

                        <ul class="dropdown__sub">
                            <li class="dropdown__li">
                                <Link to={"/addPelicula"} className="dropdown__anchor">
                                    Pelicula
                                </Link>
                            </li>     
                            <li class="dropdown__li">
                                <Link to={"/addSerie"} className="dropdown__anchor">
                                    Serie
                                </Link>
                            </li>   

                        </ul>

                    </div>
        </li>
        </li>
    
        <li className='opciones'>
              <NavLink to={"/reclamosList"}  exact className='text-dark'>
                  <FaIcons.FaExclamation className='me-2' />
                  Reclamos
              </NavLink>
          </li>
          <li className='opciones'>
              <NavLink to={"/vistas"}  exact className='text-dark'>
                  <FaIcons.FaEye className='me-2' />
                  Vistas
              </NavLink>
          </li>
            <li className='opciones'>
                <Dentro/>
            </li>     
        </ul>
    </div>
</div>
  
    );
};
export default NavbarAdmin;
