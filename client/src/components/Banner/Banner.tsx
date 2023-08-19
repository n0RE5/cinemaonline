import React from 'react';
import classes from './Banner.module.scss';

interface BannerProps {
    src: string
}
 
const Banner: React.FC<BannerProps> = ({ src }) => {
    return (
        <div className={classes.banner}>
            <img loading='lazy' className={classes.banner__img} src={src} alt="" />
        </div>
    );
}
 
export default Banner;