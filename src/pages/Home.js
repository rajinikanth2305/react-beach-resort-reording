
import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/banner"
import {Link} from "react-router-dom"
import Services from "../components/Services"
import FeaturedRooms from "../components/FeaturedRoom"
import StyledHero from "../components/StyledHero"
const Home = () => {
  return(
    <>
    <Hero>
      <Banner title="luxurious rooms" subtitle="deluxe rooms statrting at $299">
        <Link to="/rooms" className="btn-primary">
          Our rooms
        </Link>
      </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
      </>
    );
}
Hero.defaultProps={
  hero:"defaultHero"

};
export default Home
