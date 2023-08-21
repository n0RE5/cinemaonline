import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import { searchVideosByType } from '../api/videoAPI';
import { usePagination } from '../hooks/usePagination';
import { IVideo } from '../types/Interfaces';
import FilterPageModule from '../modules/FilterPageModule';
import Pagination from '../components/Pagination/Pagination';

const FilterPage = () => {
    const [params] = useSearchParams()
    const [videos, setVideos] = useState<IVideo[]>([])
    const [totalCount, setTotalCount] = useState<number>(0)
    const {totalPages, page, setPage, limit, pagesArray} = usePagination(totalCount, 18)
    const type = params.get('type') || ''
    
    const [search, isLoading] = useFetching(async() => {
        const response = await searchVideosByType(type, limit, page)
        setVideos(response.data)
        const totalVideoCount = response.headers['x-total-count']
        setTotalCount(totalVideoCount)
    })

    useEffect(() => {
        search()
    }, [type, page])

    return (
        <>
            <FilterPageModule isLoading={isLoading} videos={videos} />
            <Pagination page={page} setPage={setPage} totalPages={totalPages} pagesArray={pagesArray} />
        </>
    );
}
 
export default FilterPage;