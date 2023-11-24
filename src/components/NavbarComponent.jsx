import { Icon } from '@iconify/react';
import { Navbar } from '@material-tailwind/react';
import React from 'react'

export const NavbarComponent = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar className='sticky top-0 z-10' variant='gradient' color='transparent' >
      <div className="flex gap-sm w-full">
        <Icon icon="skill-icons:instagram" width="24px" height="24px"/>
        <Icon icon="devicon:github" width="24px" height="24px" />
      </div>
      <div className="flex gap-sm">
        <Icon icon="devicon:linkedin" width="24px" height="24px"/>
        <Icon icon="jam:fiverr" color="#1dbf73" width="24px" height="24px" />
      </div>

    </Navbar>
  )
}
