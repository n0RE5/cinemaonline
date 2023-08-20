import React, { useState } from 'react';
import { IBreadcrumb } from '../types/Interfaces';
import { useSearchParams } from 'react-router-dom';
import SearchPageModule from '../modules/SearchPageModule';
 
const SearchPage = () => {
    const [params] = useSearchParams()
    const searchQuery = params.get('s')
    
    return (
        <>
            <SearchPageModule />
        </>
    );
}
 
export default SearchPage;