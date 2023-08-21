import { Link, NavLink } from 'react-router-dom';
import './LoginPublic.css';
import React, { useState, useEffect } from 'react';
import AuthService from '../../services/auth.service';
import EventBus from '../../common/EventBus';
import * as FaIcons from 'react-icons/fa';

export const Dentro = () => {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
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
        setCurrentUser(undefined);
    };

    return (  
      <div className='dentro'>                  {currentUser ? (
                                <div className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                    <i class="nav-item"></i>
                                        <Link to={"/profile"} className="nav-link">
                                            {currentUser.username}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                    <a href="/login" className="nav-link" onClick={logOut}>
                                    <FaIcons.FaArrowCircleRight className='me-2' />
                                            LogOut
                                    </a>
                                    </li>
                                </div>
                                ) : (
                                <div className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                    <Link to={"/login"} className="nav-link">
                                        Login
                                    </Link>
                                    </li>

                                    <li className="navbar-nav ml-auto">
                                    <Link to={"/singup"} className="nav-link">
                                        Sign Up
                                    </Link>
                                    </li>
                                </div>
                                )}
                            </div>   
      
    );
};
export default Dentro;
