import React from 'react'

export const GeneralSectionLayout = ({children, heading, isCol, gap}) => {
  
  return (
    <div className={`${heading ? 'bg-hero bg-cover bg-no-repeat py-xxl xl:py-[200px]' : 'bg-white py-xl'} min-h-fit px-md sm:px-xl xl:px-0 w-full flex flex-col items-center`}>
      <div className={`flex ${isCol ? 'flex-col' : 'flex-col-reverse lg:flex-row'} ${gap} w-full xl:max-w-[1120px] xxl:max-w-[1440px]`}>
         {children}
      </div>
     
    </div>
  )
}
