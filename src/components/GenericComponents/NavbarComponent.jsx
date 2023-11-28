import { Icon } from '@iconify/react';
import { Navbar } from '@material-tailwind/react';
import React from 'react'
import { FiverrIcon } from '../../utils/CustomIcons';

export const NavbarComponent = () => {

  return (
    <Navbar className='sticky top-0 z-10 -mb-20' variant='gradient' color='transparent' >
      <div className="flex gap-sm w-full">
        <Icon icon="skill-icons:instagram" width="24px" height="24px"/>
        <Icon icon="devicon:github" width="24px" height="24px" />
      </div>
      <div className="flex gap-sm">
        <Icon icon="devicon:linkedin" width="24px" height="24px"/>
        <FiverrIcon/>
      </div>
    </Navbar>
  )
}
