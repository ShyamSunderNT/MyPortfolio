// import React from 'react';

// const About = () => {
//     return (

//         <div id="about" className="container-fluid bg-dark bg-image text-white p-5">
//           <h1 className="fst-italic fw-bold fs-4 mt-5 pt-5 text-center heading" data-aos="fade-up">Course</h1>  
//         <div className="tech-list mt-5 border rounded "  >
       
          
//           <div className="about " >
//           <p>
//              I have completed a full stack development (MERN) <br />certification course 
//             at GUVI IIT Madras.<br /> This intensive 3-month course, from March-2024 <br />
//             to May 2024, equipped me with the skills and knowledge to develop <br />
//             robust and scalable web applications using the MERN stack. <br />
//           </p>
        
//           <p >
//             <a
//               href="https://www.guvi.in/certificate?id=22tn8c6711Q7155dip&download=true"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="button"
//             >
//               Certificate of Completion
//             </a>
//           </p>
//           <p>In addition to this, I have also completed the following courses:</p>
//           <ul className='text-center'>
//             <li >
//               HTML and CSS at GUVI
//               <br />
//               <a
//                 href="https://www.guvi.in/certificate?id=1cC1s682B7v7mM512T&download=true"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="button"
//               >
//                 View Certificate
//               </a>
//             </li>
//             <li>
              
//             </li>
//             <li>
//               React.js at GUVI
//               <br />
//               <a
//                 href="https://www.guvi.in/certificate?id=W2711q21Xk1B54786y&download=true"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="button"
//               >
//                 View Certificate
//               </a>
//             </li>
//             <li>
//               Nodejs at GUVI
//               <br />
//               <a
//                 href="https://www.guvi.in/certificate?id=C8dV1i7j7212v251n6&download=true"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="button"
//               >
//                 View Certificate
//               </a>
//             </li>
//             <li>
//               MySql at GUVI
//               <br />
//               <a
//                 href="https://www.guvi.in/certificate?id=qM5i77I21D528Z1617&download=true"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="button"
//               >
//                 View Certificate
//               </a>
//             </li>
//             <li>
//               MongoDB at GUVI
//               <br />
//               <a
//                 href="https://www.guvi.in/certificate?id=17371bHCs52p2f8k16&download=true"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="button"
//               >
//                 View Certificate
//               </a>
//             </li>
//           </ul>
//           <p>
//             These courses have further strengthened my foundation in web <br />
//             development, enabling me to build comprehensive and efficient web <br />
//             applications.
//           </p>
//         </div>
//         </div>
//         </div>
//       );
//   };
  

// export default About;


import React from 'react';

const About = () => {
  return (
    <div id="about" className="container-fluid bg-dark bg-image text-white p-5">
      <h1 className="fst-italic fw-bold fs-4 mt-5 pt-5 text-center heading" data-aos="fade-up">
        Course
      </h1>
      <div className="tech-list mt-5 border rounded">
        <div className="about">
          <p>
            I have completed a full stack development (MERN) <br />
            certification course at GUVI IIT Madras.<br /> This intensive 3-month course, from March-2024 <br />
            to May 2024, equipped me with the skills and knowledge to develop <br />
            robust and scalable web applications using the MERN stack. <br />
          </p>

          <p>
            <a
              href="https://www.guvi.in/certificate?id=22tn8c6711Q7155dip&download=true"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Certificate of Completion
            </a>
          </p>
          <p>In addition to this, I have also completed the following courses:</p>

          <div className="row text-center">
            <div className="col-md-4">
              <p>HTML and CSS at GUVI</p>
              <a
                href="https://www.guvi.in/certificate?id=1cC1s682B7v7mM512T&download=true"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                View Certificate
              </a>
            </div>
            <div className="col-md-4">
              <p>React.js at GUVI</p>
              <a
                href="https://www.guvi.in/certificate?id=W2711q21Xk1B54786y&download=true"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                View Certificate
              </a>
            </div>
            <div className="col-md-4">
              <p>Node.js at GUVI</p>
              <a
                href="https://www.guvi.in/certificate?id=C8dV1i7j7212v251n6&download=true"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                View Certificate
              </a>
            </div>
            <div className="col-md-4">
              <p>MySQL at GUVI</p>
              <a
                href="https://www.guvi.in/certificate?id=qM5i77I21D528Z1617&download=true"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                View Certificate
              </a>
            </div>
            <div className="col-md-4">
              <p>MongoDB at GUVI</p>
              <a
                href="https://www.guvi.in/certificate?id=17371bHCs52p2f8k16&download=true"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                View Certificate
              </a>
            </div>
          </div>

          <p>
            These courses have further strengthened my foundation in web <br />
            development, enabling me to build comprehensive and efficient web <br />
            applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
