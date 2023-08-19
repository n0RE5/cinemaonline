import React from 'react';
import classes from './Burger.module.scss';

interface BurgerProps {
    onClick?: () => void
}
 
const Burger: React.FC<BurgerProps> = ({ onClick }) => {
    return (
        <a onClick={onClick} className={classes.burger}>
            <div className={classes.burger__1}/>
            <div className={classes.burger__2}/>
            <div className={classes.burger__3}/>
        </a>
    );
}
 
export default Burger;