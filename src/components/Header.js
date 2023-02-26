import React from 'react';
import NavTabs from './NavTabs';

function Header ({ currentPage, handlePageChange }){
    return (
        <header>
            <h1>Matthew Williams</h1>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    )
};

export default Header;