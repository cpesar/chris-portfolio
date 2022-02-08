import React from "react";
import ProjectList from "./Projects";

import { capitalizeFirstLetter } from "../../utils/helpers.js";

function Gallery(props) {
  const { currentCategory } = props;

  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <ProjectList category={currentCategory.name} />
    </section>
  );
}

export default Gallery;
