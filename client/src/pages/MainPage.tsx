import React, { useState } from 'react';
import classes from './MainPage.module.scss'; 
import VideoItemScroller from '../components/VideoItemScroller/VideoItemScroller';

const MainPage = () => {
    return (
        <div className='content'>
            <VideoItemScroller href='' title='Новинки кино' videos={[]} />
        </div>
    );
}
 
export default MainPage;