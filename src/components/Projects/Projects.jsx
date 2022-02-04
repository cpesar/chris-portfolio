import React from 'react';

import Books from '../../assets/Projects/BookSearch.png';
import Ecommerce from '../../assets/Projects/Ecommerce.png';
import Google from '../../assets/Projects/googlebooks.png';
import Parking from '../../assets/Projects/ParkingApp.png';
import Pizza from '../../assets/Projects/Pizza.png';
import Thoughts from '../../assets/Projects/ThoughtBlog.png';
import Weather from '../../assets/Projects/Weather.png';
import Zoo from '../../assets/Projects/Zoo.png';

import styled from 'styled-components';

const Projects = () => {
  function projectSelected(title) {
    console.log(`${title} clicked`);
  }

  const ProjectList = styled.ul`
    color: white;
  `;

  const items = [
    {
      id: 1,
      title: 'Pizza-Hunt',
      img: Pizza,
      site: 'https://pizza-hunting.herokuapp.com/',
      repo: 'https://github.com/cpesar/pizza-hut',
    },

    {
      id: 2,
      title: 'Dock N Flock',
      img: Parking,
      site: 'https://dock-and-flock.herokuapp.com/',
      repo: 'https://github.com/cpesar/dock-n-flock',
    },

    {
      id: 3,
      title: 'Shop-Shop',
      img: Ecommerce,
      site: 'https://the-online-store.herokuapp.com/',
      repo: 'https://github.com/cpesar/the-online-store',
    },

    {
      id: 4,
      title: 'Weather App',
      img: Weather,
      site: 'https://cpesar.github.io/weather-dashboard-refactor/',
      repo: 'https://github.com/cpesar/weather-dashboard-refactor',
    },

    {
      id: 5,
      title: 'Zoo Animals',
      img: Zoo,
      site: 'https://zoanimals.herokuapp.com/',
      repo: '',
    },

    {
      id: 6,
      title: 'Best Sellers',
      img: Books,
      site: 'https://cpesar.github.io/the-best-sellers/',
      repo: 'https://github.com/cpesar/the-best-sellers',
    },

    {
      id: 7,
      title: 'Deep Thoughts',
      img: Thoughts,
      site: 'https://deep-thinker.herokuapp.com/',
      repo: 'https://github.com/cpesar/deep-thoughts',
    },

    {
      id: 8,
      title: 'Google Books',
      img: Google,
      site: 'https://the-book-store-2.herokuapp.com/',
      repo: 'https://github.com/cpesar/the-book-store-2',
    },
  ];

  return (
    <div>
      <ProjectList>
        {items.map((item) => (
          <li className='title' key={item.title}>
            <span onClick={() => projectSelected(item.title)}>
              {item.title}
            </span>
          </li>
        ))}
      </ProjectList>
    </div>
  );
};
export default Projects;
