import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="flex justify-between items-center h-16 text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <Link to="/" exact className="pl-8">
        Chris Pesar
      </Link>
      <div className="pl-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link className="p-4" to="/" exact>
          Home
        </Link>
        <Link className="p-4" to="/about">
          About
        </Link>
        <Link className="p-4" to="/projects">
          Projects
        </Link>
        <Link className="p-4" to="/resume">
          Resume
        </Link>
        <Link className="p-4" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useEffect } from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers.js";

// function NavBar(props) {
//   const {
//     categories = [],
//     setCurrentCategory,
//     contactSelected,
//     currentCategory,
//     setContactSelected,
//   } = props;

//   useEffect(() => {
//     document.title = capitalizeFirstLetter(currentCategory.name);
//   }, [currentCategory]);

//   return (
//     <header className="flex-row px-1">
//       <h2>
//         <a data-testid="link" href="/">
//           <span role="img" aria-label="camera">
//             {" "}
//             📸
//           </span>{" "}
//           Oh Snap!
//         </a>
//       </h2>

//       <nav>
//         <ul className="flex-row">
//           <li className="mx-2">
//             <a
//               datatestid="about"
//               href="#about"
//               onClick={() => setContactSelected(false)}
//             >
//               About Me
//             </a>
//           </li>

//           <li className={`mx-2 ${contactSelected && "navActive"}`}>
//             <span onClick={() => setContactSelected(true)}>Contact</span>
//           </li>

//           {categories.map((category) => (
//             <li
//               className={`mx-1 ${currentCategory.name === category.name &&
//                 !contactSelected &&
//                 "navActive"}`}
//               key={category.name}
//             >
//               <span
//                 onClick={() => {
//                   setCurrentCategory(category);
//                   setContactSelected(false);
//                 }}
//               >
//                 {capitalizeFirstLetter(category.name)}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default NavBar;
