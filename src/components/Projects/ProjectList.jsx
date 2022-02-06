import React, { useState } from 'react';
import Modal from './Modal';

const ProjectList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    {
      name: 'PizzaHunt',
      category: 'Blogs',
      site: 'https://pizza-hunting.herokuapp.com/',
      repo: 'https://github.com/cpesar/pizza-hut',
    },

    {
      name: 'DockNFlock',
      category: 'Ecommerce',
      site: 'https://dock-and-flock.herokuapp.com/',
      repo: 'https://github.com/cpesar/dock-n-flock',
    },

    {
      name: 'ShopShop',
      category: 'Ecommerce',
      site: 'https://the-online-store.herokuapp.com/',
      repo: 'https://github.com/cpesar/the-online-store',
    },

    {
      name: 'WeatherApp',
      category: 'API',
      site: 'https://cpesar.github.io/weather-dashboard-refactor/',
      repo: 'https://github.com/cpesar/weather-dashboard-refactor',
    },

    {
      name: 'ZooAnimals',
      category: 'Blogs',
      site: 'https://zoanimals.herokuapp.com/',
      repo: '',
    },

    {
      name: 'BestSellers',
      category: 'API',
      site: 'https://cpesar.github.io/the-best-sellers/',
      repo: 'https://github.com/cpesar/the-best-sellers',
    },

    {
      name: 'DeepThoughts',
      category: 'Blogs',
      site: 'https://deep-thinker.herokuapp.com/',
      repo: 'https://github.com/cpesar/deep-thoughts',
    },

    {
      name: 'GoogleBooks',
      category: 'API',
      site: 'https://the-book-store-2.herokuapp.com/',
      repo: 'https://github.com/cpesar/the-book-store-2',
    },
  ]);

  const currentProjects = projects.filter(
    (project) => project.category === category
  );

  const toggleModal = (image, i) => {
    setCurrentProject({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal currentPhoto={currentProject} onClose={toggleModal} />
      )}
      <div className='flex-row'>
        {currentProjects.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.png`).default}
            // src={require(`../../assets/large/${category}/${i}.jpg`)}
            // alt="current-category"
            alt={image.name}
            className='img-thumbnail mx-1'
            onClick={() => toggleModal(image, i)}
            key={image.name}
            // key="current-category"
          />
        ))}
        <p></p>
      </div>
    </div>
  );
};

export default ProjectList;
