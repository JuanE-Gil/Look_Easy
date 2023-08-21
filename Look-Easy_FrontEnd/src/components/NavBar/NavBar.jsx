import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../../assets/img/logo.svg';
import React from 'react';
import Dentro from '../../Auth/dentro/dentro';

export const NavBar = () => {

    return (
        <>
            <header className='sticky-top'>
                <nav className='navbar navbar-expand-lg '>
                    <div className='container-fluid'>
                        <Link className='navbar-brand text-white' to='/'>
                            <img src={logo} alt='logo' className='logo p-2' />
                            Look Easy
                        </Link>
                        <button
                            className='navbar-toggler'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#navbarScroll'
                            aria-controls='navbarScroll'
                            aria-expanded='false'
                            aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div
                            className='collapse navbar-collapse'
                            id='navbarScroll'>
                            <ul
                                className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll '
                                style={{ '--bs-scroll-height': '100px' }}>
                                <div className='tipos'>
                                    <li className='nav-item hover-underline-animation'>
                                        <NavLink
                                            className='nav-link text-white'
                                            to='/movies'>
                                            <i className='bi bi-film p-1'></i>
                                            Películas
                                        </NavLink>
                                    </li>
                                    <li className='nav-item hover-underline-animation'>
                                        <NavLink
                                            className='nav-link text-white'
                                            to='/series'>
                                            <i className='bi bi-tv'></i> Series
                                        </NavLink>
                                    </li>
                                    <li className='nav-item hover-underline-animation'>
                                        <NavLink
                                            className='nav-link text-white'
                                            to='/estrenos'>
                                            <i className='bi bi-play-btn'></i>{' '}
                                            Próximos Estrenos
                                        </NavLink>
                                    </li>

                                    <li className='nav-item'>
                                        <NavLink
                                            className='btn btn-outline-success'
                                            to='/buscador'>
                                            Buscador
                                        </NavLink>
                                    </li>
                                </div>
                            </ul>
                           
                        </div>
                        <Dentro/>
                    </div>
                </nav>
            </header>
        </>
    );
};
