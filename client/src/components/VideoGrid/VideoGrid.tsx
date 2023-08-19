import React from 'react';
import classes from './VideoGrid.module.scss'; 
import { IVideo } from '../../types/Interfaces';

interface VideoGridProps {
    videos: IVideo[]
}
 
const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
    return (
        <div>
            
        </div>
    );
}
 
export default VideoGrid;