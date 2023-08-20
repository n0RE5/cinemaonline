import React from 'react';
import classes from './VideoGrid.module.scss'; 
import { IVideo } from '../../types/Interfaces';
import VideoGridItem from '../VideoGridItem/VideoGridItem';

interface VideoGridProps {
    videos: IVideo[]
}
 
const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
    return (
        <div className={classes.videogrid}>
            {videos.map((video, index) =>
                <VideoGridItem video={video} key={index} />
            )}
        </div>
    );
}
 
export default VideoGrid;