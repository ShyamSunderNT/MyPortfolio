import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles


function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
    });
  }, []);

  return (
    <section id="skills" className="container-fluid bg-dark bg-image text-white p-5">
      <h4 className="fst-italic fw-bold fs-4 mt-5 pt-5 text-center heading" data-aos="fade-up">SKILLS</h4>

      <div className="tech-list mt-5 border rounded" data-aos="flip-up">
        <h2 className='text-center'>Frontend</h2>
        <div className="skill-set1 d-flex justify-content-between flex-wrap m-3 p-3">
          <div className = "head-text">
            <div className = "head-image">
          <img
            src="https://cdn.icon-icons.com/icons2/171/PNG/512/html5_23329.png"
            alt="HTML5"
            className="tech-list-item"
            style={{ width: "120px", height: "120px" }}
            data-aos="zoom-in"
          />
          </div>
          <div class='text-on-image'>
            <h3>HTML</h3>
          </div>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png"
            alt="CSS3"
            className="tech-list-item"
            style={{ width: "100px", height: "100px" }}
            data-aos="zoom-in"
          />
          <img
            src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
            alt="JavaScript"
            className="tech-list-item"
            style={{ width: "160px", height: "100px" }}
            data-aos="zoom-in"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s"
            alt="React"
            className="tech-list-item"
            style={{ width: "120px", height: "120px" }}
            data-aos="zoom-in"
          />
           <img
            src="https://www.brcline.com/wp-content/uploads/2016/01/bootstrap-logo-300x240.png"
            alt="Bootstrap"
            className="tech-list-item"
            style={{ width: "100px", height: "120px" }}
            data-aos="zoom-in"
          />
          <img
            src="https://media.dev.to/cdn-cgi/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdxy1c2bvl6odeo52dodk.jpg"
            alt="tailwind css"
            className="tech-list-item"
            style={{ width: "100px", height: "120px" }}
            data-aos="zoom-in"
          />
        </div>
         <h2 className='text-center'>Backend</h2>
        <div className="skill-set2 d-flex justify-content-between flex-wrap m-5 p-5">
          <img
            src="https://camo.githubusercontent.com/f2bf53202c75bfcd9de18d25750f295f3e9c3cb56d4bfcf6a41038ff44b5aec4/687474703a2f2f636f64652d6d6176656e2e636f6d2f696d672f6e6f64652e706e67"
            alt="NodeJS"
            className="tech-list-item"
            style={{ width: "140px", height: "120px" }}
            data-aos="zoom-in"
          />
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675637255386/f3a9a38b-116d-4b35-8f46-8d8abb78166f.png"
            alt="ExpressJS"
            className="tech-list-item"
            style={{ width: "140px", height: "120px" }}
            data-aos="zoom-in"
          />
          <img
            src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png"
            alt="MongoDB"
            className="tech-list-item"
            style={{ width: "100px", height: "120px" }}
            data-aos="zoom-in"
          />
          <img
            src="data:image/jpeg;base64,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"
            alt="Mongoose"
            className="tech-list-item"
            style={{ width: "100px", height: "120px" }}
            data-aos="zoom-in"
          />
        <img
            src="https://w7.pngwing.com/pngs/717/111/png-transparent-mysql-round-logo-tech-companies-thumbnail.png"
            alt="MySQL"
            className="tech-list-item"
            style={{ width: "100px", height: "120px" }}
            data-aos="zoom-in"
          />
          <img
            src="data:image/png;base64,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"
            alt="JWT token"
            className="tech-list-item"
            style={{ width: "100px", height: "120px" }}
            data-aos="zoom-in"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;