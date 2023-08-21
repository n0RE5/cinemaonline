import React, { useEffect, useState } from 'react';
import { useFetching } from '../hooks/useFetching';
import { getVideoByLink } from '../api/videoAPI';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ErrorRoute } from '../tools/Consts';
import VideoPageModule from '../modules/VideoPageModule';
import { IVideo } from '../types/Interfaces';
import { videoPlaceholder } from '../tools/Placeholder';
import PageWrapper from '../components/Layout/PageWrapper';

const VideoPage = () => {
    const navigate = useNavigate()
    const [params] = useSearchParams()
    const [video, setVideo] = useState<IVideo>(videoPlaceholder)
    const videoLink = params.get('v') || ''

    const [fetchVideo, isFetching, gotError] = useFetching(async () => {
        const response = await getVideoByLink(videoLink)
        setVideo(response)
    })

    useEffect(() => {
        fetchVideo()
    }, [videoLink])

    useEffect(() => {
        if(gotError !== "") {
            navigate(ErrorRoute)
        }
    }, [isFetching])

    return (
        <PageWrapper>
            <VideoPageModule video={video} isVideoLoading={isFetching}/>
        </PageWrapper>
    );
}
 
export default VideoPage;