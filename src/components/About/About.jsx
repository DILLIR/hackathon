import React from 'react';
import Container from '../UI/Container';
import './about.css'

const About = () => {
    return (
        <section className="about">
            <Container>
                <h2 className="about__title">About our help</h2>
                <p className="about__text">This project is designed for first aid to a person who has arrived in Kosice, in a place where he knows nothing. We do not just provide background information, we help with navigation, finding accommodation and communication centers. In connection with the recent events in Ukraine, we understand how important it is to support, adapt and mitigate the difficulties caused by a large influx of people. We solve problems before they arise. <br></br><br></br>Our service supports several languages, you can easily build a route and download a map to your phone, and if you don’t have a phone with you, our service will help you print a fragment of the map at the reception point along with useful information for free.</p>
                <p className="about__sign">- Argon</p>
            </Container>
        </section>
    );
}

export default About;
