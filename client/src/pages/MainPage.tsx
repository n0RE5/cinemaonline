import React, { useEffect, useState } from 'react';
import classes from './MainPage.module.scss'; 
import VideoItemScroller from '../components/VideoItemScroller/VideoItemScroller';
import { useFetching } from '../hooks/useFetching';
import { getAll } from '../api/videoAPI';
import { usePagination } from '../hooks/usePagination';
import { IVideo } from '../types/Interfaces';
import MainPageModule from '../modules/MainPageModule';
import Pagination from '../components/Pagination/Pagination';

const MainPage = () => {
    const [videos, setVideos] = useState<IVideo[]>([])
    const [totalCount, setTotalCount] = useState<number>(0)
    const {totalPages, page, setPage, limit, pagesArray} = usePagination(totalCount, 18)

    const [search] = useFetching(async () => {
        const response = await getAll(limit, page)
        setVideos(response.data)
        const totalVideoCount = response.headers['x-total-count']
        setTotalCount(totalVideoCount)
    })

    useEffect(() => {
        search()
    }, [page])

    return (
        <>
            <MainPageModule videos={videos} />
            <Pagination setPage={setPage} page={page} pagesArray={pagesArray} totalPages={totalPages} />
        </>
    );
}
 
export default MainPage;