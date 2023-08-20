import React, { useState } from 'react';
import classes from './SearchPage.module.scss';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { IBreadcrumb, IVideo } from '../types/Interfaces';
import { useSearchParams } from 'react-router-dom';
import VideoGrid from '../components/VideoGrid/VideoGrid';
import Searchbar from '../components/Searchbar/Searchbar';

interface SearchpageModuleProps {
    videos: IVideo[]
}
 
const SearchpageModule: React.FC<SearchpageModuleProps> = ({ videos }) => {
    const [params] = useSearchParams()
    const searchQuery = params.get('s')
    const [breadcrumbs] = useState<IBreadcrumb[]>([
        {
            title: "Поиск по сайту"
        }
    ])

    return (
        <div className={classes.searchpage}>
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <div className={classes.searchpage_main}>
                <h1 className={classes.searchpage_main__title}>Поиск по сайту</h1>
                <div className={classes.searchpage_searchbar}>
                    <Searchbar />
                </div>
                <div className={classes.searchpage_yellowbox}>
                    <div className={classes.searchpage_yellowbox__title}>Информация</div>
                    <div className={classes.searchpage_yellowbox__query}>
                        {videos.length
                            ? `По запросу "${searchQuery}" найдено:`
                            : `-!- По запросу "${searchQuery}" ничего не найдено. Попробуйте изменить параметры или детали запроса. `
                        }

                    </div>
                </div>
                <div className={classes.searchpage_videogrid}>
                    <VideoGrid videos={videos} />
                </div>
            </div>
        </div>
    );
}
 
export default SearchpageModule;