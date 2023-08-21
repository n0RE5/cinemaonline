import React, { useMemo, useState } from 'react';
import classes from './FilterPage.module.scss';
import { IBreadcrumb, IVideo } from '../types/Interfaces';
import VideoGrid from '../components/VideoGrid/VideoGrid';
import { useSearchParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { SearchRoute } from '../tools/Consts';
import { BiSolidRightArrow } from 'react-icons/bi';

interface FilterPageModuleProps {
    videos: IVideo[]
}
 
const FilterPageModule: React.FC<FilterPageModuleProps> = ({ videos }) => {
    const [params] = useSearchParams()
    const type = params.get('type') || ''
    const breadcrumbs = useMemo<IBreadcrumb[]>(() => [
        {
            title: 'Поиск по сайту',
            href: SearchRoute
        },
        {
            title: type
        }
    ], [type])

    return (
        <div className={classes.filterpage}>
            {videos.length !== 0 &&
                <div className={classes.filterpage_type}>
                    Смотреть
                    <div className={classes.arrow}>
                        <BiSolidRightArrow color={'white'} size={16} />
                    </div>
                </div>
            }
            <div className={classes.filterpage_breadcrumbs}>
                <Breadcrumb breadcrumbs={breadcrumbs} />
            </div>
            {videos.length 
                ? <VideoGrid videos={videos} />
                : <div>Возникла непредвиденная ошибка. Мы будем стараться исправить её как можно быстрее!</div>
            }
        </div>
    );
}
 
export default FilterPageModule;