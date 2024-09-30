import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <div className="Header">
            <h1 className="header-title">Welcome to the Brick Store</h1>

            <div className="header-buttons">
                <button className="button login-button" onClick={() => {}}>
                    Login
                </button>
                <button className="button register-button" onClick={() => {}}>
                    Register
                </button>
            </div>
        </div>
    );
};

export default Header;
