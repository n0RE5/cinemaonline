import React from 'react';
import { IVideo } from '../types/Interfaces';
import VideoGrid from '../components/VideoGrid/VideoGrid';
import classes from './MainPage.module.scss'; 
import { BiSolidRightArrow } from 'react-icons/bi';

interface MainPageModuleProps {
    videos: IVideo[]
}
 
const MainPageModule: React.FC<MainPageModuleProps> = ({ videos }) => {
    return (
        <div className={classes.mainpage}>
            <div className={classes.mainpage_button}>
                Фильм
                <div className={classes.arrow}>
                    <BiSolidRightArrow color={'white'} size={16} />
                </div>
            </div>
            <VideoGrid videos={videos} />
        </div>
    );
}
 
export default MainPageModule;