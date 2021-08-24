import React from 'react';
import { Center, Link } from '@chakra-ui/react'

import { GitHub, LinkedIn } from '@material-ui/icons';

export default function Footer(){
  return(
    <Center d='flex' h='100px' p='5'>
     

      <Link href='https://github.com/cpesar' isExternal>
        <GitHub className='icon'/>
      </Link>

      <Link href='https://www.linkedin.com/in/chris-pesar-ba07b182/' isExternal>
        <LinkedIn className='icon'/>
      </Link>

      
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