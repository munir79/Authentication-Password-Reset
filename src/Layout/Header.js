import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/login'> LogIn</Link>
            <Link to='/registar'>Registar</Link>
        </div>
    );
};

export default Header;