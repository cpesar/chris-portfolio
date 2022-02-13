// import React, { useState } from "react";
// import Modal from "./ProjectModal";

// import { Card } from "antd";
// // const { Meta } = Card;

// const ProjectList = ({ category }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentProject, setCurrentProject] = useState();

//   const [projects] = useState([
//     {
//       name: "PizzaHunt",
//       category: "Blogs",
//       description:
//         "An app that allows users to create edit and delete pizza recipes",
//       site: "https://pizza-hunting.herokuapp.com/",
//       repo: "https://github.com/cpesar/pizza-hut",
//     },

//     {
//       name: "ShopShop",
//       category: "Ecommerce",
//       description:
//         "A simple e commerce app where users can add items to their cart and checkout using Stripe",
//       site: "https://the-online-store.herokuapp.com/",
//       repo: "https://github.com/cpesar/the-online-store",
//     },

//     {
//       name: "DockNFlock",
//       category: "Ecommerce",
//       description:
//         "An app that allows users to search for parking and tickets in one conveienent place",
//       site: "https://dock-and-flock.herokuapp.com/",
//       repo: "https://github.com/cpesar/dock-n-flock",
//     },

//     {
//       name: "BestSellers",
//       category: "API",
//       description:
//         "A simple app that allows a user to search for a book within a selected category. The user can then checkout their item which will link them to Amazon",
//       site: "https://cpesar.github.io/the-best-sellers/",
//       repo: "https://github.com/cpesar/the-best-sellers",
//     },

//     {
//       name: "GoogleBooks",
//       category: "API",
//       description: "Simple book search app",
//       site: "https://the-book-store-2.herokuapp.com/",
//       repo: "https://github.com/cpesar/the-book-store-2",
//     },

//     {
//       name: "WeatherApp",
//       category: "API",
//       description:
//         "A user can search for weather by city state or zipcode. Uses the openweather api",
//       site: "https://cpesar.github.io/weather-dashboard-refactor/",
//       repo: "https://github.com/cpesar/weather-dashboard-refactor",
//     },

//     {
//       name: "DeepThoughts",
//       category: "Blogs",
//       description: "A thought blog",
//       site: "https://deep-thinker.herokuapp.com/",
//       repo: "https://github.com/cpesar/deep-thoughts",
//     },

//     {
//       name: "ZooAnimals",
//       category: "Blogs",
//       description: "A zoo animal blog that uses CRUD routes",
//       site: "https://zoanimals.herokuapp.com/",
//       repo: "https://github.com/cpesar/zookeeper",
//     },
//   ]);

//   const currentProjects = projects.filter(
//     (project) => project.category === category
//   );

//   const toggleModal = (image, i) => {
//     setCurrentProject({ ...image, index: i });
//     setIsModalOpen(!isModalOpen);
//   };

//   // return (
//   //   <div>
//   //     {isModalOpen && (
//   //       <Modal currentProject={currentProject} onClose={toggleModal} />
//   //     )}
//   //     <Card hoverable style={{ width: 400 }}>
//   //       {currentProjects.map((image, i) => (
//   //         <img
//   //           src={
//   //             require(`../../assets/ProjectImages${category}/${i}.png`).default
//   //           }
//   //           alt={image.name}
//   //           className="img-thumbnail mx-1"
//   //           onClick={() => toggleModal(image, i)}
//   //           key={image.name}
//   //         />
//   //       ))}
//   //       {/* <Meta
//   //         title={currentProjects.name}
//   //         description={currentProjects.description}
//   //       /> */}
//   //     </Card>
//   //   </div>
//   // );

//   return (
//     <div>
//       {/* {isModalOpen && (
//         <Modal currentProject={currentProject} onClose={toggleModal} />
//       )} */}
//       <Card hoverable style={{ width: 400 }}>
//         {currentProjects.map((image, i) => (
//           <img
//             src={
//               require(`../../assets/ProjectImages${category}/${i}.png`).default
//             }
//             alt={image.name}
//             className="img-thumbnail mx-1"
//             onClick={() => toggleModal(image, i)}
//             key={image.name}
//           />
//         ))}
//         {/* <Meta
//           title={currentProjects.name}
//           description={currentProjects.description}
//         /> */}
//         {isModalOpen && (
//           <Modal currentProject={currentProject} onClose={toggleModal} />
//         )}
//       </Card>
//     </div>
//   );
// };

// export default ProjectList;
