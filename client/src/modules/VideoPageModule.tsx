import React, { useState } from 'react';
import classes from './VideoPage.module.scss';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import VideoDescription from '../components/VideoDescription/VideoDescription';
import Videoplayer from '../components/Videoplayer/Videoplayer';
import { IBreadcrumb, IVideo } from '../types/Interfaces';
import { API_URL } from '../api';
import Loader from '../components/Loader/Loader';

interface VideoPageModuleProps {
    video: IVideo
    isVideoLoading: boolean
}
 
const VideoPageModule: React.FC<VideoPageModuleProps> = ({ video, isVideoLoading }) => {
    const [breadcrumbs] = useState<IBreadcrumb[]>([
        {
            title: video.type
        }
    ])

    return (
        <div className={classes.videopage}>
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <div className={classes.videopage_main}>
                {isVideoLoading &&
                    <Loader />
                }
                <div className={classes.videopage_main_info}>
                    <div className={classes.videopage_main__banner}>
                        <img loading='lazy' src={API_URL + video.img} alt="" />
                    </div>
                    <div className={classes.main_content}>
                        <div className={classes.main_content__title}>
                            {video.title} ({video.year}) смотреть онлайн
                        </div>
                        <div className={classes.main_stats}>
                            <ul className={classes.main_content__ul}>
                                <li>
                                    <span>Название:</span>
                                    <span>{video.title}</span>
                                </li>
                                <li>
                                    <span>Год выхода:</span>
                                    <span>{video.year}</span>
                                </li>
                                {video?.director &&
                                    <li>
                                        <span>Режиссёр:</span>
                                        <span>{video.director}</span>
                                    </li>
                                }
                                {video?.country &&
                                    <li>
                                        <span>Страна:</span>
                                        <span>{video.country}</span>
                                    </li>
                                }
                                {video?.genre &&
                                    <li>
                                        <span>Жанр:</span>
                                        <span>{video.genre}</span>
                                    </li>
                                }
                            </ul>
                            <ul className={classes.main_content__ul}>
                                {video?.translate &&
                                    <li>
                                        <span>Перевод:</span>
                                        <span>{video.translate}</span>
                                    </li>                                        
                                }
                                {video?.quality &&
                                    <li>
                                        <span>Качество:</span>
                                        <span>{video.quality}</span>
                                    </li>
                                }
                            </ul>
                        </div>
                        {video?.description &&
                            <div className={classes.main_content__subtitle}>
                                {video.title} ({video.year}) смотреть онлайн бесплатно
                            </div>
                        }
                        {video?.description &&
                            <div className={classes.main_content__description}>
                                <VideoDescription>
                                    {video.description}
                                </VideoDescription>
                            </div>
                        }
                    </div>
                </div>
                <div className={classes.videopage_main_subtitle}>
                    Смотреть онлайн {video.title} ({video.year}) в хорошем качестве HD 1080
                </div>
            </div>
            <div className={classes.videopage_player}>
                <Videoplayer video={video}/>
            </div>
        </div>
    );
}
 
export default VideoPageModule;