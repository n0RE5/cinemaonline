import React, { useState } from 'react';
import classes from './Navbar.module.scss'; 
import Burger from '../Burger/Burger';
import { FaFilm } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { DefaultRoute, FilterRoute } from '../../tools/Consts';
import { useSidebarStore } from '../../store/SidebarStore';
import Searchbar from '../Searchbar/Searchbar';

const Navbar = () => {
    const switchSidebarState = useSidebarStore(state => state.switchState)
    const [navbarLinks] = useState([
        {
            title: 'ФИЛЬМЫ',
            href: FilterRoute + '?type=Фильм'
        },
        {
            title: 'СЕРИАЛЫ',
            href: FilterRoute + '?type=Сериал'
        },
        {
            title: 'АНИМЕ',
            href: FilterRoute + '?type=Аниме'
        },
        {
            title: 'МУЛЬТФИЛЬМЫ',
            href: FilterRoute + '?type=Мультфильм'
        }
    ])  

    return (
        <div className={classes.navbar}>
            <Link to={DefaultRoute} className={classes.navbar_home}>
                <FaFilm size={48} color='#0095ff' />
                <span className={classes.navbar_home__span}>FILMPRO</span>
            </Link>
            <ul className={classes.navbar_links}>
                {navbarLinks.map(({title, href}, index) => 
                    <li key={index}>
                        <Link to={href}>{title}</Link>
                    </li>
                )}
            </ul>
            <div className={classes.navbar_search}>
                <Searchbar />
            </div>
            <div className={classes.navbar_burger}>
                <Burger onClick={() => switchSidebarState(true)} />
            </div>
        </div>
    );
}
 
export default Navbar;