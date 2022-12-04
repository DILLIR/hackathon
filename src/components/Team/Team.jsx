import React from 'react'
import Container from '../UI/Container'
import './team.css'
import team from '../../img/team.png'

export default function Team() {
  return (
    <section className="team" id='team'>
        <Container>
            <div className="team__content">
                <div className="team__title">Our team</div>
                <div className="team__text">We, a young Argon team of 6 enthusiastic developers, decided with this project to help people who first come to Košice easily overcome difficulties on their way to their destination. In particular, the project is intended for people who had to flee Ukraine due to hostilities. <br></br><br></br>We tried to make a useful project for people who found themselves in a difficult situation.<br></br><br></br>Team Argon 04.12.2022</div>
            </div>
            <div className="team__photo">
                <img src={team} alt="" />
            </div>
        </Container>
    </section>
  )
}
