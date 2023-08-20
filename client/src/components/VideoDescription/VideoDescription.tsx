import React, { useState } from 'react';
import classes from './VideoDescription.module.scss'; 

interface VideoDescriptionProps {
    children: React.ReactNode
}
 
const VideoDescription: React.FC<VideoDescriptionProps> = ({ children }) => {
    const [isActive, setIsActive] = useState<boolean>(false)

    return (
        <div className={classes.description}>
            <div className={isActive ? [classes.description_main, classes.description_main__full].join(' ') : classes.description_main}>
                {children}
                <div className={isActive ? classes.none : classes.description_main__overlay}/>
            </div>
            <button onClick={() => setIsActive(prev => !prev)} className={classes.description_button}>
                {isActive
                    ? "Свернуть описание"
                    : "Развернуть описание"
                }
            </button>
        </div>
    );
}
 
export default VideoDescription;