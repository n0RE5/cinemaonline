import React from 'react';
import classes from './VideoItem.module.scss';
import { Link } from 'react-router-dom';
import { IVideo } from '../../types/Interfaces';

interface VideoItemProps {
    video: IVideo
}
 
const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
    return (
        <div className={classes.videoitem_w}>
            <Link className={classes.videoitem} to={video.href}>
                <div className={classes.videoitem__title}>{video.title}</div>
                <img loading='lazy' src={video.img} alt={video.title} className={classes.videoitem__img} />
            </Link>
        </div>
    );
}
 
export default VideoItem;