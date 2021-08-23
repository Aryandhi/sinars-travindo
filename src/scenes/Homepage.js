import React from 'react';

import Hero from 'parts/Hero';
import Benefit from 'parts/Benefit';
import OurAdventure from 'parts/OurAdventure';
import Service from 'parts/Service';
import Location from 'parts/Location';
import Contact from 'parts/Contact';
import Footer from 'parts/Footer';
export default function Homepage() {
  return (
    <div>
      <Hero />
      <Benefit />
      <OurAdventure />
      <Service /> <br/><br/>
      <Location /> <br/><br/><br/><br/>
      <Contact />
      <Footer />
    </div>
  )
}