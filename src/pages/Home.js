import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms'
import StyledHero from '../components/StyledHero';

export default function Home() {
    return (
      <>
      <Hero>
       <Banner title="luxurious room" subtitle="deluxe room starting at $289">
        <Link to ="/rooms" className="btn-primary">
            our rooms
        </Link>
        </Banner>        
      </Hero>
      <Services />
      <FeaturedRooms />
      <StyledHero>hello</StyledHero>
      </>
    )
}

Hero.defaultProps= {
    hero:"defaultHero"
}