import React, { useEffect, useState } from 'react';
import { IBreadcrumb, IVideo } from '../types/Interfaces';
import { useSearchParams } from 'react-router-dom';
import SearchPageModule from '../modules/SearchPageModule';
import { useFetching } from '../hooks/useFetching';
import { searchVideos } from '../api/videoAPI';
import Pagination from '../components/Pagination/Pagination';
import { usePagination } from '../hooks/usePagination';
 
const SearchPage = () => {
    const [params] = useSearchParams()
    const [videos, setVideos] = useState<IVideo[]>([])
    const [totalCount, setTotalCount] = useState<number>(0)
    const {totalPages, page, setPage, limit, pagesArray} = usePagination(totalCount, 18)
    const searchQuery = params.get('s') || ''
    
    const [search, isLoading] = useFetching(async() => {
        const response = await searchVideos(searchQuery, limit, page)
        setVideos(response.data)
        const totalVideoCount = response.headers['x-total-count']
        setTotalCount(totalVideoCount)
    })

    useEffect(() => {
        search()
    }, [searchQuery, page])

    return (
        <>
            <SearchPageModule videos={videos} />
            <Pagination totalPages={totalPages} page={page} pagesArray={pagesArray} setPage={setPage} />
        </>
    );
}
 
export default SearchPage;