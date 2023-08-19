import React, { useEffect, useState } from 'react';
import classes from './VideoFilter.module.scss'; 
import { BiSolidRightArrow } from 'react-icons/bi';

interface VideoFilterProps {
    active: boolean
    setActive: (arg0: boolean) => void
}

const VideoFilter: React.FC<VideoFilterProps> = ({ active, setActive }) => {
    const rootClasses = [classes.filter]
 
    if(active) {
        rootClasses.push(classes.filter_active)
    }

    return (
        <>
            <button className={classes.filter_ui_button} onClick={() => setActive(!active)}>
                <span>Фильтр</span>
                <div className={active ? classes.filter_arrow_active : classes.filter_arrow}>
                    <BiSolidRightArrow color={'white'} size={16} />
                </div>
            </button>
            <div className={rootClasses.join(' ')}>
                <button className={classes.filter_button}>ПОИСК</button>
            </div>
        </>
    );
}
 
export default VideoFilter;