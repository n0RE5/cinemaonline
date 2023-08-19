import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { CopyrightRoute, DefaultRoute } from '../../tools/Consts';
import { FaFilm } from 'react-icons/fa';
import classes from './Footer.module.scss';

const Footer = memo(() => {
    return (
        <div className={classes.footer}>
            <Link to={DefaultRoute} className={classes.footer_home}>
                <FaFilm size={48} color='#0095ff' />
                <span className={classes.footer_home__span}>FILMPRO</span>
            </Link>
            <Link className={classes.footer_copyright} to={CopyrightRoute}>
                Правообладателям
            </Link>
        </div>
    );
})
 
export default Footer;