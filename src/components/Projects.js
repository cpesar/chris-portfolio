import React from "react";

import Sellers from "../../src/assets/images/bestsellers.png";
import Thoughts from "../../src/assets/images/deepthoughts.png";
import Parking from "../../src/assets/images/docknflock.png";
import Google from "../../src/assets/images/googlebooks.png";
import Pizza from "../../src/assets/images/pizza.png";
import Shop from "../../src/assets/images/shop.png";
import Weather from "../../src/assets/images/weather.png";
import Zoo from "../../src/assets/images/zoo.png";

import { Card } from "antd";
// const { Meta } = Card;

const Projects = () => {
  function projectSelected(title) {
    console.log(`${title} clicked`);
  }
  const items = [
    {
      id: 1,
      title: "Pizza-Hunt",
      img: Pizza,
      desc: "This is the pizza hunt app",
      site: "https://pizza-hunting.herokuapp.com/",
      repo: "https://github.com/cpesar/pizza-hut",
    },

    {
      id: 2,
      title: "Dock N Flock",
      img: Parking,
      desc: "This is the Dock and Flock app",
      site: "https://dock-and-flock.herokuapp.com/",
      repo: "https://github.com/cpesar/dock-n-flock",
    },

    {
      id: 3,
      title: "Shop-Shop",
      img: Shop,
      desc: "This is the Shop Shop app",
      site: "https://the-online-store.herokuapp.com/",
      repo: "https://github.com/cpesar/the-online-store",
    },

    {
      id: 4,
      title: "Weather App",
      img: Weather,
      desc: "This is the Weather app",
      site: "https://cpesar.github.io/weather-dashboard-refactor/",
      repo: "https://github.com/cpesar/weather-dashboard-refactor",
    },

    {
      id: 5,
      title: "Zoo Animals",
      img: Zoo,
      desc: "This is the ZooAnimals app",
      site: "https://zoanimals.herokuapp.com/",
      repo: "",
    },

    {
      id: 6,
      title: "Best Sellers",
      img: Sellers,
      desc: "This is the Best Sellers app",
      site: "https://cpesar.github.io/the-best-sellers/",
      repo: "https://github.com/cpesar/the-best-sellers",
    },

    {
      id: 7,
      title: "Deep Thoughts",
      img: Thoughts,
      desc: "This is the Deep Thoughts app",
      site: "https://deep-thinker.herokuapp.com/",
      repo: "https://github.com/cpesar/deep-thoughts",
    },

    {
      id: 8,
      title: "Google Books",
      img: Google,
      desc: "This is the Google Books app",
      site: "https://the-book-store-2.herokuapp.com/",
      repo: "https://github.com/cpesar/the-book-store-2",
    },
  ];

  return (
    <div>
      <Card>
        {items.map((item) => (
          <li className="title" key={item.title}>
            <span onClick={() => projectSelected(item.title)}>
              {item.title}
            </span>
          </li>
        ))}
      </Card>
    </div>
  );
};

export default Projects;
