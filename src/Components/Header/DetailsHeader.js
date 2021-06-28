import React from 'react';
import './DetailsHeader.css'
import headerImg from '../../Image/Header/Header.jpg'

const DetailsHeader = (props) => {
    const {strTeamBadge} = props.img
    console.log(props);
    return (
        <>
            <div className="header">
                <img id="siteLogo" src={strTeamBadge} alt=""/>
                <div className="blackShadow"></div>
                <img id="headerImg" src={headerImg} alt="" />
            </div>
        </>
    );
};

export default DetailsHeader;