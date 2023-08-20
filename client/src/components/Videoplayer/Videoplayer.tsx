import React from 'react';
import classes from './Videoplayer.module.scss';
import { IVideo } from '../../types/Interfaces';
import { API_URL } from '../../api';

interface VideoplayerProps {
    video: IVideo
}
 
const Videoplayer: React.FC<VideoplayerProps> = ({ video }) => {
    return (
        <div className={classes.videoplayer}>
            <video controlsList='nodownload' controls className={classes.videoplayer__player} src={API_URL + video.video}>
                <source type="video/mp4" src={API_URL + video.video} />
            </video>
        </div>
    );
}
 
export default Videoplayer;