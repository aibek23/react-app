import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
    return (
        <header >
        <div className="container">
            <div className={s.header__inner}>
                <div className={s.header__logo}><h1>Habr</h1></div>
                <nav className={s.nav}>
                    <div className={s.nav_inner}>
                        <NavLink to="AllNews">Все </NavLink>
                    </div>
                    <div className={s.nav_inner}>
                        <NavLink to="News">Новасти</NavLink>
                    </div>
                    <div className={s.nav_inner}>
                        <NavLink to="Articls">статьи</NavLink>
                    </div>
                </nav>
            </div>
        </div>
        </header>
    )   
}

export default Header;