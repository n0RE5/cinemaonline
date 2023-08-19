import React, { useState } from 'react';
import classes from './FilterPage.module.scss'; 
import VideoFilter from '../components/VideoFilter/VideoFilter';

const FilterPage = () => {
    const [active, setActive] = useState<boolean>(false)
    return (
        <div className='content'>
            <VideoFilter active={active} setActive={setActive} />
        </div>
    );
}
 
export default FilterPage;