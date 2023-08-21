import React, { useState } from 'react';
import classes from './SidebarModal.module.scss';
import { useSidebarStore } from '../../store/SidebarStore';
import Searchbar from '../Searchbar/Searchbar';
import { FaFilm } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FilterRoute } from '../../tools/Consts';

const Sidebar = () => {
    const isActive = useSidebarStore(state => state.active)
    const switchState = useSidebarStore(state => state.switchState)

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

    if (!isActive) {
        return null;
    }

    return (
        <div onClick={() => switchState(false)} className={classes.sidebar}>
            <div onClick={(e) => e.stopPropagation()} className={classes.sidebar_w}>
                <div className={classes.sidebar_logo}>
                    <FaFilm size={48} color='#0095ff' />
                    <span className={classes.sidebar_logo__span}>FILMPRO</span>
                </div>
                <div className={classes.sidebar_searchbar}>
                    <Searchbar />
                </div>
                <ul className={classes.sidebar_links}>
                    {navbarLinks.map(({title, href}, index) => 
                        <li key={index}>
                            <Link onClick={() => switchState(false)} to={href}>{title}</Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}
 
export default Sidebar;