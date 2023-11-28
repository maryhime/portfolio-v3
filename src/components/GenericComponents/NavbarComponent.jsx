import { Icon } from '@iconify/react';
import { Navbar } from '@material-tailwind/react';
import React from 'react'
import { FiverrIcon } from '../../utils/CustomIcons';

export const NavbarComponent = () => {

  return (
    <Navbar className='sticky top-0 z-10 -mb-20 flex justify-center w-full' variant='gradient' color='transparent' >
      <div className="flex justify-between w-full xl:max-w-[1120px] xxl:max-w-[1440px]">
        <div className="flex gap-sm">
          <Icon icon="skill-icons:instagram" width="24px" height="24px" />
          <Icon icon="devicon:github" width="24px" height="24px" />
        </div>
        <div className="flex gap-sm">
          <Icon icon="devicon:linkedin" width="24px" height="24px" />
          <FiverrIcon />
        </div>
      </div>

    </Navbar>
  )
}
