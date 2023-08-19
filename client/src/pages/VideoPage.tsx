import React, { useState } from 'react';
import classes from './VideoPage.module.scss';
import VideoItemScroller from '../components/VideoItemScroller/VideoItemScroller';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { IBreadcrumb, IVideo } from '../types/Interfaces';
import Videoplayer from '../components/Videoplayer/Videoplayer';
import VideoDescription from '../components/VideoDescription/VideoDescription';

const VideoPage = () => {
    const [video, setVideo] = useState<IVideo>()
    const [breadcrumbs] = useState<IBreadcrumb[]>([
        {
            title: "FILM"
        }
    ])
    
    return (
        <div className='content'>
            <div className={classes.videopage}>
                <div className={classes.videopage_header}>
                    <VideoItemScroller href='' title='Новинки кино' videos={[]} />
                </div>
                <Breadcrumb breadcrumbs={breadcrumbs} />
                <div className={classes.videopage_main}>
                    <div className={classes.videopage_main_info}>
                        <div className={classes.videopage_main__banner}>
                            <img loading='lazy' src="" alt="" />
                        </div>
                        <div className={classes.main_content}>
                            <div className={classes.main_content__title}>{video?.title} ({video?.year}) смотреть онлайн</div>
                            <div className={classes.main_stats}>
                                <ul className={classes.main_content__ul}>
                                    <li>
                                        <span>Название:</span>
                                        <span>{video?.title}</span>
                                    </li>
                                    <li>
                                        <span>Год выхода:</span>
                                        <span>{video?.year}</span>
                                    </li>
                                    <li>
                                        <span>Режиссёр:</span>
                                        <span>{video?.director}</span>
                                    </li>
                                    <li>
                                        <span>Страна:</span>
                                        <span>{video?.country}</span>
                                    </li>
                                    <li>
                                        <span>Жанр:</span>
                                        <span>{video?.genre}</span>
                                    </li>
                                </ul>
                                <ul className={classes.main_content__ul}>
                                    <li>
                                        <span>Перевод:</span>
                                        <span>{video?.translate}</span>
                                    </li>
                                    <li>
                                        <span>Качество:</span>
                                        <span>{video?.quality}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className={classes.main_content__subtitle}>{video?.title} ({video?.year}) смотреть онлайн бесплатно</div>
                            <div className={classes.main_content__description}>
                                <VideoDescription>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis praesentium dolores, sapiente libero delectus dignissimos. Exercitationem dolorum, ipsam rerum magnam dolore necessitatibus vitae nostrum, enim repudiandae, laboriosam repellat corporis reiciendis?
                                    Odio repellendus animi quod a sapiente recusandae vitae, porro accusamus, dolor tempore alias rerum unde possimus maxime cupiditate quos voluptatem ad! Reiciendis ipsum voluptates, neque optio dolores maiores blanditiis distinctio!
                                    Voluptatibus quasi officia natus esse. Illum maiores quod earum suscipit perferendis tempora laborum provident officia praesentium molestiae amet animi similique, cumque velit incidunt rem consectetur? Ipsa eos placeat eligendi nam?
                                </VideoDescription>
                            </div>
                        </div>
                    </div>
                    <div className={classes.videopage_main_subtitle}>
                        Смотреть онлайн {video?.title} ({video?.year}) в хорошем качестве HD 1080
                    </div>
                </div>
                <div className={classes.videpage_player}>
                    <Videoplayer/>
                </div>
            </div>
        </div>
    );
}
 
export default VideoPage;