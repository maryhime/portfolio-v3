import React from 'react'
import { GeneralSectionLayout } from '../layouts/GeneralSectionLayout'
import { Typography } from '@material-tailwind/react'

export const AboutSection = () => {
  return (
    <GeneralSectionLayout heading={false} isCol={false} gap='gap-lg'>
      <div className="static w-full flex flex-col gap-xs items-end">
        <div className="w-full flex flex-col gap-md">
          <span className='font-main uppercase m-0'>
            <section className="w-fit rounded-[3px] px-[3px] bg-gradient-to-r from-primary to-[#699FF5]">
              <Typography variant='h2' color='white'>Lorem Ipsum</Typography>
            </section>

            <Typography variant='h2' color='black' className='w-fit'>
              Dolor Sit
            </Typography>
            <Typography variant='h2' color='purple' textGradient
              className='leading-none w-fit'>
              <span className='bg-gradient-to-r from-primary to-[#699FF5] bg-[0px_95%] transition-[background-size] duration-[0.5s] ease-in-out p-[0.1% 0px] bg-no-repeat bg-[length:100%_3px] '>
                amet
              </span>
            </Typography>
          </span>

          <Typography variant='paragraph' color='black'>
            Being in the Computer Science field during my college days, it was kind of overwhelming to decide which field will I be taking after graduation. I had been contemplating that since my first year until right before graduation.

            Luckily, my college internship is about UI / UX Design, which, I had fun learning and doing. So now, for the past year, I’ve been working at Baguio City as a Web Designer, which I greatly enjoy.
          </Typography>
        </div>


        <Typography variant='small' color='purple' className='rotate-[-6.15deg] line-clamp-1 w-[143px] lg:w-[180px] text-center'>
          Although I did enjoy front-end development
        </Typography>
      </div>

      <div className="h-[415.38px] lg:w-[500px] bg-[url('/images/image-bg.png')] px-sm pt-lg bg-no-repeat bg-cover">
        <div className="h-[325px] w-full bg-[url('/images/avatar.png')] bg-cover bg-center ">
          <div className="h-full bg-[#733B8A4D] hover:bg-transparent">
          </div>
        </div>
      </div>


    </GeneralSectionLayout>
  )
}
