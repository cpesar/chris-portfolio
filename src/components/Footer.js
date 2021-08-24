import React from 'react';
import { Center } from '@chakra-ui/react'

import { SocialIcon } from 'react-social-icons';
// import { GitHub, LinkedIn } from '@material-ui/icons';

// export default function Footer(){
//   return(
 
//     <div className='inline-flex py-3 px-3 my-6 justify-content space-between'>
//       <SocialIcon 
//         url='https://github.com/cpesar' 
//         className='br-4' 
//         target='_blank' 
//         fgColor='#fff' 
//         style={{ height:50, width:50 }} 
//         />
      
//       <SocialIcon 
//         url='https://www.linkedin.com/in/chris-pesar-ba07b182/' 
//         className='br-4' 
//         target='_blank' 
//         fgColor='#fff' 
//         style={{ height:50, width:50 }} />
//     </div>


//   )
// }

export default function Footer(){
  return(
  
    <Center d='flex' h='100px' p='5' margin='10px' padding='10px'>
      
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
      
      </Center>
    
  )
}

// export default function Footer(){
//   return (
// <div className='footer'>
//   <div className='itemContainer'>
//   <GitHub className="icon"/>
//   <span>cpesar</span>
// </div>

// <div className='itemContainer'>
//   <LinkedIn className="icon" />
//   <span>chrispesar1@gmail.com</span>
// </div>

// <div className='itemContainer'>
//   <Email className="icon" />
//   <span>chrispesar1@gmail.com</span>
// </div>
// </div>
//   )
// }