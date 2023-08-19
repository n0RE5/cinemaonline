import React from 'react';
import Scroller from '../Scroller/Scroller';
import VideoItem from '../VideoItem/VideoItem';
import classes from './VideoItemScroller.module.scss';
import { Link } from 'react-router-dom';
import { IVideo } from '../../types/Interfaces';
import { BiSolidRightArrow } from 'react-icons/bi'

interface VideoItemScrollerProps {
    title: string
    videos: IVideo[]
    href: string
}
 
const VideoItemScroller: React.FC<VideoItemScrollerProps> = ({ href, title, videos }) => {
    return (
        <div className={classes.videoscroller}>
            <Link to={href} className={classes.videoscroller__title}>
                {title}
                <div className={classes.arrow}>
                    <BiSolidRightArrow color={'white'} size={16} />
                </div>
            </Link>
            <Scroller>
                {videos.map((video, index) =>
                    <div className={classes.videoscroller__scroller} key={index}>
                        <VideoItem video={video} />
                    </div>
                )}
            </Scroller>
        </div>
    );
}
 
export default VideoItemScroller;