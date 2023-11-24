

import { Button } from '@material-tailwind/react';
import React, { Fragment } from 'react';
import { NavbarComponent } from '../components/GenericComponents/NavbarComponent';
import HeroSection from '../components/HomeSections/HeroSection';

const HomePage = () => {
  return (
    <Fragment>

<NavbarComponent />
      <HeroSection />
    </Fragment>
  );
}

export default HomePage;



