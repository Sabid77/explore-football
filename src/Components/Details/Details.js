import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DetailsHeader from '../Header/DetailsHeader';
import './Details.css';
import teamMail from "../../Image/TeamGender/male.png";
import teamFemale from "../../Image/TeamGender/female.png";
import { BsBuilding } from "react-icons/bs";
import { AiFillFlag } from "react-icons/ai";
import { BiFootball } from "react-icons/bi";
import { CgGenderMale } from "react-icons/cg";
import { AiFillYoutube } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { ImEarth } from "react-icons/im";




const Details = () => {
    const { teamId } = useParams();
    const [detailsData, setDetailsData] = useState({})

    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setDetailsData(data.teams[0]))
    }, [teamId])
    console.log(detailsData);


    return (
        <>
            <DetailsHeader img={detailsData} />
            <div className="detailsSec">
                <div className="detailsContainer">
                    <div className="dtMain">
                        <div className="textSec">
                            <p id="dtName">
                                {detailsData.strAlternate}
                            </p>
                            <p id="pd-0"><small><BsBuilding /> Founded: {detailsData.intFormedYear}</small></p>
                            <p id="pd-0"><small><AiFillFlag /> Country: {detailsData.strCountry}</small></p>
                            <p id="pd-0"><small><BiFootball /> Sport Type: Football</small></p>
                            <p id="pd-0"><small><CgGenderMale /> Gender: {detailsData.strGender}</small></p>
                        </div>
                        <div className="imgSec">
                            {
                                (detailsData.strGender === 'Male') ? <img id="detailsTeamImg" src={teamMail} alt="male" /> : <img id="detailsTeamImg" src={teamFemale} alt='female' />
                            }
                        </div>
                    </div>
                    <div className="description">
                        <p><small>{detailsData.strDescriptionEN}</small></p>
                        <br />
                        <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit modi ratione cumque, maxime quasi ad. Minima reiciendis eos repudiandae eaque temporibus fuga dolor autem obcaecati repellendus velit? Rerum, eum dolores illum assumenda praesentium, at deleniti minus quidem laboriosam numquam dolor molestiae totam et eaque natus quis accusamus sed voluptatem iure inventore in. Deleniti beatae quas fugiat qui in possimus ratione, incidunt reprehenderit laudantium, odit suscipit dolores blanditiis accusantium non deserunt praesentium ullam quo eum inventore ea ab sed officia. Repellat ea id aut rem, laboriosam veritatis eligendi. Voluptatibus assumenda velit delectus perferendis corrupti dicta eius facilis? Culpa sed aliquam facere.</small></p>
                    </div>
                    <div className="logoSec">
                        <span><a id="twitter" href={`//` + detailsData.strTwitter} target='_blank' rel='noreferrer noopener'><FaTwitter /></a>  </span>
                        <span><a id="webSite" href={`//` + detailsData.strWebsite} target='_blank' rel='noreferrer noopener'> <ImEarth /> </a></span>
                        <span><a id="youTube" href={`//` + detailsData.strYoutube} target='_blank' rel='noreferrer noopener'> <AiFillYoutube /> </a></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;


// reno lucky:-Bike Sure:- airBirds/data/CashBack max 2000/