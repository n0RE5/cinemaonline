import React, { useEffect, useState } from 'react';
import { useFetching } from '../../hooks/useFetching';
import { getNewestList } from '../../api/videoAPI';
import VideoItemScroller from '../VideoItemScroller/VideoItemScroller';
import { FilterRoute } from '../../tools/Consts';
import { IVideo } from '../../types/Interfaces';
 
interface PageWrapperProps {
    children: React.ReactNode
}
 
const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
    const [videos, setVideos] = useState<IVideo[]>([])
    const [limit] = useState<number>(15)
    
    const [fetchVideos] = useFetching(async () => {
        const response = await getNewestList(limit)
        setVideos(response)
    })

    useEffect(() => {
        fetchVideos()
    }, [])
    
    return (
        <>
            <div className="scroller">
                <VideoItemScroller href={FilterRoute + '?type=Фильм'} title='Новинки кино' videos={videos} />
            </div>
            {children}
        </>
    );
}
 
export default PageWrapper;