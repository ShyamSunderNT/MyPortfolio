// import React from 'react';
// import { projectData } from './data/ProjectData';
// import Card from './data/Card';



// const Projects = () => {
//     return (
//         <div className="container-fluid bg-dark bg-image project p-5 text-white"
//         id="projects">
//             <h2 className="fst-italic fw-bold  text-center heading mt-5 pt-5">
//           Projects
//         </h2>
//         <br />
//         <h3 className='text-center'>I have worked on a wide range of MERN projects. Here are some of my projects.</h3>
//         <div className="row pt-3">
//           {projectData.map((project) => {
//             return <Card data={project} />;
//           })}
//         </div>
            
//         </div>
//     );
// };

// export default Projects;

import React from 'react';
import { projectData } from './data/ProjectData';
import Card from './data/Card';

const Projects = () => {
  return (
    <div
      className="container-fluid bg-dark bg-image project p-5 text-white"
      id="projects"
    >
      <h2 className="fst-italic fw-bold text-center heading mt-5 pt-5">
        Projects
      </h2>
      <br />
      <h3 className="text-center">
        I have worked on a wide range of MERN projects. Here are some of my
        projects.
      </h3>
      <div className="row pt-3">
        {projectData.map((project, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <Card data={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
