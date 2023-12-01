import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import { GeneralSectionLayout } from '../layouts/GeneralSectionLayout'
import { Icon } from '@iconify/react'
import { ArrowDownIcon } from '../../utils/CustomIcons'

const HeroSection = () => {
  return (
    <GeneralSectionLayout heading={true} isCol={true} gap='gap-lg'>
      {/* heading */}
      <div className="flex flex-col ">
        <Typography
          variant='h3'
          color='purple'>
          Hi, I'm Mary Therese,
        </Typography>

        <span className='font-main text-[48px] md:text-[102px] font-[800] leading-normal uppercase m-0'>
          <h1>Design</h1>
          <Typography variant='h1' color='purple' textGradient
            className='leading-none w-fit'>
            <span className='bg-gradient-to-r from-primary to-[#699FF5] bg-[0px_95%] transition-[background-size] duration-[0.5s] ease-in-out p-[0.1% 0px] bg-no-repeat bg-[length:100%_3px] '>
              Delightful experiences
            </span>
          </Typography>
          {/* <Typography variant='h1' color='primary' textGradient
          className='leading-none w-fit'>
          <span className='bg-gradient-to-r from-primary to-[#699FF5] bg-[0px_95%]  p-[0.1% 0px] bg-no-repeat bg-[length:0px_3px] hover:transition-[background-size] hover:duration-[0.5s] hover:ease-in-out hover:bg-[length:100%_3px]'>
            Delightful experiences
          </span>
        </Typography> */}
          <h1>With empathy for users </h1>

        </span>
      </div>

      {/* buttons */}
      <div className="flex flex-col lg:flex-row gap-md ">
        <Button color='purple'>
          <Icon icon="ph:chats-duotone" className="text-white" width='32px' />
          Say Hi
        </Button>
        <Button color='purple' variant='outlined'>
          <ArrowDownIcon/>
         See Design Works
        </Button>
      </div>


    </GeneralSectionLayout>


  )
}

export default HeroSection