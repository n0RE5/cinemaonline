import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import classes from './MainLayout.module.scss';
import Banner from '../Banner/Banner';
import banner from '../../assets/banner.jpg'
import SidebarModal from '../SidebarModal/SidebarModal';
import VideoItemScroller from '../VideoItemScroller/VideoItemScroller';
import { FilterRoute } from '../../tools/Consts';
import { useFetching } from '../../hooks/useFetching';
import { getNewestList } from '../../api/videoAPI';
import { IVideo } from '../../types/Interfaces';

interface LayoutProps {
    children: React.ReactNode
}
 
const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [videos, setVideos] = useState<IVideo[]>([])
    const [fetchVideos] = useFetching(async () => {
        const response = await getNewestList(15)
        setVideos(response)
    })

    useEffect(() => {
        fetchVideos()
    }, [])

    return (
        <>
            <Banner src={banner} />
            <SidebarModal />
            <Navbar />
            <div className={classes.layout}>
                <div className="content">
                    <div className="scroller">
                        <VideoItemScroller href={FilterRoute + '?type=Фильм'} title='Новинки кино' videos={videos} />
                    </div>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
}
 
export default Layout;