import React from 'react';
import './Header.css'
import headerImg from '../../Image/Header/Header.jpg'


const Header = () => {
    return (
        <>
            <div className="header">
                <h1 id="siteTitle">Sports Mania</h1>
                <div className="blackShadow"></div>
                <img id="headerImg" src={headerImg} alt="" />
            </div>
        </>
    );
};

export default Header;