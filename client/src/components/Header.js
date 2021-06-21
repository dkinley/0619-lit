import React from 'react';
import { navigate } from '@reach/router';

const Header = (props) => {
    return (
        <div>
            <h1>The Author Assortment</h1>
            <div>
                <button onClick={ () => navigate("/lit")}>List All</button>
                <button onClick={ () => navigate("/lit/create")}>Create New</button>
            </div>
        </div>
    )
};

export default Header;