import React from 'react';
import { Center } from '@chakra-ui/react'

import { SocialIcon } from 'react-social-icons';


export default function Footer(){
  return(
  
    <Center >
      
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
      
    </Center>
    
  )
}



