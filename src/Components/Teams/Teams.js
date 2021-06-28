import React from 'react';
import { Container } from 'react-bootstrap';
import './Teams.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowRight } from "react-icons/bs";
import Details from '../Details/Details';
import { Link } from 'react-router-dom';



const Teams = (props) => {
    const { strTeam, strTeamBadge, strCountry, idTeam } = props.team;

    const handelDetails = () => {
        <Details />
    }

    return (
        <>
            <Container>
                <div className="teamsCard">
                    <img src={strTeamBadge} alt="" />
                    <p id="name">
                        {strTeam.length > 15 ?
                            `${strTeam.substring(0, 15)}...` : strTeam
                        }
                    </p>
                    <p id="country"><small>{strCountry}</small></p> 
                    <Link id="exploreBtn" to={"/details" + idTeam}>Explore<BsArrowRight /> </Link>
                </div>
            </Container>
        </>
    );
};

export default Teams;