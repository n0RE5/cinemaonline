import React, { useState } from 'react';
import classes from './SearchPage.module.scss';
import VideoItemScroller from '../components/VideoItemScroller/VideoItemScroller';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { IBreadcrumb } from '../types/Interfaces';
import { useSearchParams } from 'react-router-dom';
 
const SearchPage = () => {
    const [params] = useSearchParams()
    const searchQuery = params.get('s')
    const [breadcrumbs] = useState<IBreadcrumb[]>([
        {
            title: "Поиск по сайту"
        }
    ])
    
    return (
        <div className='content'>
            <div className={classes.searchpage_header}>
                <VideoItemScroller href='' title='Новинки кино' videos={[]} />
            </div>
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <div className={classes.searchpage_main}>
                <h1 className={classes.searchpage_main__title}>Поиск по сайту</h1>
                <div className={classes.searchpage_yellowbox}>
                    <div className={classes.searchpage_yellowbox__title}>Информация</div>
                    <div className={classes.searchpage_yellowbox__query}>По запросу "{searchQuery}" найдено:</div>
                </div>
            </div>
        </div>
    );
}
 
export default SearchPage;