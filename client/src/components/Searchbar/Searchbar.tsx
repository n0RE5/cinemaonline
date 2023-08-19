import React, { useState } from 'react';
import classes from './Searchbar.module.scss'; 
import { useNavigate } from 'react-router-dom';
import { SearchRoute } from '../../tools/Consts';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSidebarStore } from '../../store/SidebarStore';

const Searchbar = () => {
    const [searchQuery, setSearchQuery] = useState<string>('')
    const switchSidebarState = useSidebarStore(state => state.switchState)
    const navigate = useNavigate()
    
    const handleSearch = (e: React.MouseEvent) => {
        e.preventDefault()
        navigate(SearchRoute + `?s=${searchQuery}`)
        switchSidebarState(false)
    }

    return (
        <form className={classes.searchbar}>
            <input type="text"
                    className={classes.searchbar__input} 
                    placeholder='Введите название' 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <button className={classes.searchbar__button} onClick={handleSearch}>
                <AiOutlineSearch size={24} color='#0095ff' />
            </button>
        </form>
    );
}
 
export default Searchbar;