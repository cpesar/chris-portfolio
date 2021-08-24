

import React from 'react';
import { Grid, Image, Text, GridItem, Link } from '@chakra-ui/react';

import Group2 from '../Assets/best-sellers.png';
// import Group1 from '../Assets/dock-flock.png';
// import Pizza from '../Assets/Pizza.png';
// import Shop from '../Assets/Shop.png';
// import Weather from '../Assets/weather-app.png'



export default function ProjectList(){

  const projects =[
    {
      name: Group2,
      category: projects,
      link: 'https://cpesar.github.io/the-best-sellers/'
    }
  ]






  return (
    <Grid
    h={400}
    templateRows='repeat(4, 2fr)'
    templateColumns='repeat(9, 2fr)'
    gap={4}
    p={15}
    >

      <GridItem rowSpan={2} colSpan={3}>
        <Link href={projects[0].link}>
          <Image> src={Group2} </Image>
          <Text fontSize='xl'>{projects[0].name}</Text>
        </Link>
      </GridItem>

    </Grid>
  )
}