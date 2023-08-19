import React from 'react';
import classes from './Videoplayer.module.scss';

interface VideoplayerProps {
 
}
 
const Videoplayer: React.FC<VideoplayerProps> = () => {
    return (
        <div className={classes.videoplayer}>
            <iframe 
                src="https://vid1692175445672.vb17123filippaaniketos.pw/movie/3dd3074b9767f9393a85079abda1f2fb/iframe?d=lordfilm7.link" 
                style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}} 
                frameBorder="0" 
                loading="lazy"
            />
        </div>
    );
}
 
export default Videoplayer;