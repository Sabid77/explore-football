import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import Teams from '../Teams/Teams';
import './Home.css'

const Home = () => {

    const [teams, setTeams] = useState([]);
    const team9 = teams.slice(0, 9);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams));
    }, []);

    // console.log(teams);  

    return (
        <>
            <Header />
            <Container>
                <Row>
                    {
                        team9.map(tm => (
                            <Col sm={4}>
                                <Teams team={tm} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    );
};

export default Home;