import React from 'react';
import classes from './Loader.module.scss';

const Loader = () => {
    return (
        <div className={classes.loader_w}>
            <span className={classes.loader}/>
        </div>
    );
}
 
export default Loader;