import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import classes from './MainLayout.module.scss';
import Banner from '../Banner/Banner';
import banner from '../../assets/banner.jpg'
import SidebarModal from '../SidebarModal/SidebarModal';

interface LayoutProps {
    children: React.ReactNode
}
 
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Banner src={banner} />
            <SidebarModal />
            <Navbar />
            <div className={classes.layout}>
                {children}
            </div>
            <Footer />
        </>
    );
}
 
export default Layout;