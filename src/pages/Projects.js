// import React from "react";

// // import { Card, Col, Row } from "antd";

// import ProjectFiles from "../components/ProjectFiles";

// const Projects = () => {
//   return (
//     <>
//       <div className="site-card-wrapper">
//         {ProjectFiles.map((project, id) => (
//           <div key={id}>
//             <h3>{project.desc}</h3>
//             <p>
//               <img src={project.path} alt="projectimage"></img>
//             </p>
//             <p>{project.site}</p>
//             <p>{project.repo}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Projects;

// ============================================================================
// ============================================================================
// ============================================================================

// import React, { useState } from "react";
// import ProjectFiles from "../components/ProjectFiles";

// const Projects = () => {
//   const [items] = useState(ProjectFiles);

//   return (
//     <>
//       <section className="Projects">
//         <div className="overlay py-20 px-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:pt-32">
//           {items.map((item) => {
//             const { id, path, desc, site, repo } = item;
//             return (
//               <div key={id}>
//                 <small className="block text-center text-white font-mono text-lg">
//                   {desc}
//                 </small>
//                 <p src={site}></p>
//                 <p src={repo}></p>
//                 <img src={path} alt={desc} className="p-5 bg-white rounded" />
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Projects;

// ============================================================================
// ============================================================================
// ============================================================================

// import React from "react";

// import ProjectFiles from "../components/ProjectFiles";

// import "antd/dist/antd.css";
// import { Card } from "antd";

// const { Meta } = Card;

// const Projects = () => {

//   ProjectFiles.map((project, id) => (
//       key=id,
//       description=project.desc,
//       project.path,
//       project.site,
//       project.repo
//   )

//   return (
//     <Card
//       hoverable
//       style={{ width: 240 }}
//       cover={<img alt="project" src={ProjectFiles.path} />}
//     >
//       <Meta title={ProjectFiles.desc} description={ProjectFiles.repo} />
//     </Card>
//   );
// };

// export default Projects;

// ============================================================================
// ============================================================================
// ============================================================================

// import React from "react";

// import "antd/dist/antd.css";
// import { Carousel } from "antd";

// // import ProjectFiles from '../components/ProjectFiles'

// const contentStyle = {
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };

// const Projects = () => {
//   return (
//     <>
//   <Carousel autoplay>
//   <div>
//     <h3 style={contentStyle}>1</h3>
//   </div>
//   <div>
//     <h3 style={contentStyle}>2</h3>
//   </div>
//   <div>
//     <h3 style={contentStyle}>3</h3>
//   </div>
//   <div>
//     <h3 style={contentStyle}>4</h3>
//   </div>
// </Carousel>
// </>

//   )
// );

// export default Projects;

// ============================================================================
// ============================================================================
// ============================================================================

// import React from "react";

// // import { Card, Col, Row } from "antd";

// import ProjectFiles from "../components/ProjectFiles";

// const Projects = () => {
//   return (
//     <>
//       <div className="site-card-wrapper">
//         {ProjectFiles.map((project, id) => (
//           <div key={id}>
//             <h3>{project.desc}</h3>
//             <p>
//               <img src={project.path} alt="projectimage"></img>
//             </p>
//             <p>{project.site}</p>
//             <p>{project.repo}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Projects;

// ============================================================================
// ============================================================================
// ============================================================================

// import React from "react";

// import ProjectFiles from "../components/ProjectFiles";

// function Projects(props) {
//   const project = (
//     <ul>
//       {ProjectFiles.props.map((project) => (
//         <li key={project.id}>{project.desc}</li>
//       ))}
//     </ul>
//   );

//   const path = ProjectFiles.props.map((project) => (
//     <div key={project.id}>
//       <h3>{project.path}</h3>
//       <p>{project.site}</p>
//     </div>
//   ));

//   return (
//     <div>
//       {project}
//       <hr />
//       {path}
//     </div>
//   );
// }

// export default Projects;

// ============================================================================
// ============================================================================
// ============================================================================

// import React from "react";

// import items from "../components/ProjectFiles";

// function Project(props) {
//   // const [project, setProject] = useState();

//   return (
//     <div
//       className="Project"
//       style={{
//         backgroundImage: "url(" + props.item.img + ")",
//         backgroundColor: "black",
//       }}
//     >
//       <div>
//         <h2 style={{ color: props.item.txtColor }}>{props.item.title}</h2>
//         <h4 style={{ color: props.item.txtColor }}>{props.desc}</h4>
//       </div>
//       <button
//         className="CheckButton"
//         href={props.item.site}
//         style={{
//           color: props.item.txtColor,
//           border: "3px solid " + props.item.txtColor,
//         }}
//       >
//         Project Site
//       </button>

//       <button
//         className="CheckButton"
//         href={props.item.repo}
//         style={{
//           color: props.item.txtColor,
//           border: "3px solid " + props.item.txtColor,
//         }}
//       >
//         Project Repository
//       </button>
//     </div>
//   );
// }

// export default Project;

// ============================================================================
// ============================================================================
// ============================================================================
