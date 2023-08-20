import React from 'react';
import classes from './VideoItem.module.scss';
import { Link } from 'react-router-dom';
import { IVideo } from '../../types/Interfaces';
import { WatchRoute } from '../../tools/Consts';
import { API_URL } from '../../api';

interface VideoItemProps {
    video: IVideo
}
 
const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
    return (
        <div className={classes.videoitem_w}>
            <Link className={classes.videoitem} to={WatchRoute + `?v=${video.href}`}>
                <div className={classes.videoitem__title}>
                    {video.title} ({video.year})
                </div>
                <img loading='lazy' src={API_URL + video.img} alt={video.title} className={classes.videoitem__img} />
            </Link>
        </div>
    );
}
 
export default VideoItem;