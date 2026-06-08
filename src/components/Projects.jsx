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
import { fullStackProjects, frontendProjects  } from './data/ProjectData';
import Card from './data/Card';

// const Projects = () => {
//   return (
//     <div
//       className="container-fluid bg-dark bg-image project p-5 text-white"
//       id="projects"
//     >
//       <h2 className="fst-italic fw-bold text-center heading mt-5 pt-5">
//         Projects
//       </h2>
//       <br />
//       <h3 className="text-center">
//         I have worked on a wide range of MERN projects. Here are some of my
//         projects.
//       </h3>
//       <div className="row pt-3">
//         {projectData.map((project, index) => (
//           <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
//             <Card data={project} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;


const Projects = () => {
  return (
    <div
      className="container-fluid bg-dark bg-image project p-5 text-white"
      id="projects"
    >
      <h2 className="fst-italic fw-bold text-center heading mt-5 pt-5">
        Projects
      </h2>

      <h3 className="text-center mb-5">
        I have worked on a variety of Full Stack and Frontend projects.
      </h3>

      {/* Full Stack Projects */}
      <h2 className="text-warning text-center mb-4">
        Full Stack Projects
      </h2>

      <div className="row">
        {fullStackProjects.map((project, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <Card data={project} />
          </div>
        ))}
      </div>

      {/* Frontend Projects */}
      <h2 className="text-info text-center mt-5 mb-4">
        Frontend Projects
      </h2>

      <div className="row">
        {frontendProjects.map((project, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <Card data={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
