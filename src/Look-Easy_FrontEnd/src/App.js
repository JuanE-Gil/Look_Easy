import { NavBar } from './components/NavBar/NavBar';
import { MyRoutes } from './routers/routes';
import Footer from './components/Footer/Footer';
import Admin from './Admin/Admin';
import NavbarAdmin from './Auth/UsuarioPublic/NavbarAdmin';
import Dentro from './Auth/dentro/dentro';

import AuthService from './services/auth.service';
import React, { useState, useEffect } from 'react';
import EventBus from './common/EventBus';

import './App.css';
import { render } from '@testing-library/react';
export const App = () => {
    const [showModeratorBoard, setShowModeratorBoard] = useState(true);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(true);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user.roles.includes('ROLE_USER'));
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
        setCurrentUser(true);
    };
    return (
        <>
            {currentUser && (
                <>
                    <NavBar />
                    <MyRoutes />
                    <Footer />
                </>
            )}
            <div className='d-flex'>
            {showAdminBoard && (
                <>
                    <NavbarAdmin/>
                    <Admin />
                </>
            )}
            </div>
        </>
    );
};
