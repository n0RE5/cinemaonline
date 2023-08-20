import React from 'react';
import { IVideo } from '../../types/Interfaces';
import { Link } from 'react-router-dom';
import classes from './VideoGridItem.module.scss';
import { WatchRoute } from '../../tools/Consts';
import { API_URL } from '../../api';

interface VideoGridItemProps {
    video: IVideo
}
 
const VideoGridItem: React.FC<VideoGridItemProps> = ({ video }) => {
    return (
        <div className={classes.videogriditem_w}>
            <Link className={classes.videogriditem} to={WatchRoute + `?v=${video.href}`}>
                <div className={classes.videogriditem_image}>
                    <img loading='lazy' src={API_URL + video.img} alt={video.title} className={classes.videogriditem__img} />
                </div>
                <div className={classes.videogriditem__title}>
                        {video.title} ({video.year})
                </div>
                <div className={classes.videogriditem_fade}/>
            </Link>
        </div>
    );
}
 
export default VideoGridItem;