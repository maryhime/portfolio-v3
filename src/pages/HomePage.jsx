

import { Button } from '@material-tailwind/react';
import React, { Fragment } from 'react';
import { NavbarComponent } from '../components/GenericComponents/NavbarComponent';
import HeroSection from '../components/HomeSections/HeroSection';
import { AboutSection } from '../components/HomeSections/AboutSection';

const HomePage = () => {
  return (
    <Fragment>

      <NavbarComponent />
      <HeroSection />
      <AboutSection/>
    </Fragment>
  );
}

export default HomePage;



