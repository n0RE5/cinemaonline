import React, { useEffect, useState } from 'react';
import { IBreadcrumb, IVideo } from '../types/Interfaces';
import { useSearchParams } from 'react-router-dom';
import SearchPageModule from '../modules/SearchPageModule';
import { useFetching } from '../hooks/useFetching';
import { searchVideos } from '../api/videoAPI';
import { getPageCount } from '../tools/Pages';
 
const SearchPage = () => {
    const [params] = useSearchParams()
    const [videos, setVideos] = useState<IVideo[]>([])
    const [totalPages, setTotalPages] = useState<number>(0)
    const [limit, setLimit] = useState<number>(18)
    const [page, setPage] = useState<number>(1)
    const searchQuery = params.get('s') || ''
    
    const [search, isLoading] = useFetching(async() => {
        const response = await searchVideos(searchQuery, limit, page)
        setVideos(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect(() => {
        search()
    }, [searchQuery, page])

    return (
        <>
            <SearchPageModule videos={videos} />
        </>
    );
}
 
export default SearchPage;