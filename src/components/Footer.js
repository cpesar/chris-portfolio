import React from 'react';
import { SocialIcon } from 'react-social-icons';


export default function Footer(){
  return(
  
    
      <div className="flex justify-center items-center h-16 bg-black text-white">
      <SocialIcon 
        url='https://github.com/cpesar' 
        className='br-4' 
        target='_blank' 
        fgColor='#fff' 
        style={{ height:60, width:60 }} 
        />
      
      <SocialIcon 
        url='https://www.linkedin.com/in/chris-pesar-ba07b182/' 
        className='br-4' 
        target='_blank' 
        fgColor='#fff' 
        style={{ height:60, width:60 }} 
        />

      <SocialIcon 
        url='https://twitter.com/_pesar_' 
        className='br-4' 
        target='_blank' 
        fgColor='#fff' 
        style={{ height:60, width:60 }} 
        />
      </div>
  
    
  )
}



