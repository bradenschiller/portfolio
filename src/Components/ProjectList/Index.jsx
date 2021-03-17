import React from "react";

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.map((item) => (
        <Project item={item} />
      ))}
    </div>
  );
};

export default ProjectList;
