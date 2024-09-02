// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles


// function Skills() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration
//       easing: 'ease-in-out', // Easing function
//     });
//   }, []);

//   return (
//     <section id="skills" className="container-fluid bg-dark bg-image text-white p-5">
//       <h4 className="fst-italic fw-bold fs-4 mt-5 pt-5 text-center heading" data-aos="fade-up">SKILLS</h4>

//       <div className="tech-list mt-5 border rounded" data-aos="flip-up">
//         <h2 className='text-center text-orange'>Frontend</h2>
//         <div className="skill-set1 d-flex justify-content-between flex-wrap m-3 p-3">
//           <div className = "head-text">
//             <div className = "head-image">
//           <img
//             src="https://cdn.icon-icons.com/icons2/171/PNG/512/html5_23329.png"
//             alt="HTML5"
//             className="tech-list-item"
//             style={{ width: "120px", height: "120px" }}
//             data-aos="zoom-in"
//           />
//           </div>
//           <div class='text-on-image'>
//             <h3>HTML</h3>
//           </div>
//           </div>
//           <div className = "head-text">
//             <div className = "head-image">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png"
//             alt="CSS3"
//             className="tech-list-item"
//             style={{ width: "100px", height: "100px" }}
//             data-aos="zoom-in"
//           />
//           </div>
//           <div class='text-on-image1'>
//             <h3>CSS</h3>
//           </div>
//           </div>
//           <div className = "head-text">
//             <div className = "head-image">
//           <img
//             src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
//             alt="JavaScript"
//             className="tech-list-item"
//             style={{ width: "160px", height: "100px" }}
//             data-aos="zoom-in"
//           />
//           </div>
//           <div class='text-on-image2'>
//           <h3>JavaScript</h3>
//           </div>
//           </div>
//           <div className = "head-text">
//             <div className = "head-image">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s"
//             alt="React"
//             className="tech-list-item"
//             style={{ width: "120px", height: "120px" }}
//             data-aos="zoom-in"
//           />
//           </div>
//           <div class='text-on-image2'>
//           <h3>React</h3>
//           </div>
//           </div>
//           <div className = "head-text">
//           <div className = "head-image">
//            <img
//             src="https://www.brcline.com/wp-content/uploads/2016/01/bootstrap-logo-300x240.png"
//             alt="Bootstrap"
//             className="tech-list-item"
//             style={{ width: "100px", height: "120px" }}
//             data-aos="zoom-in"
//           />
//           </div>
//           <div className='text-on-image3'>
//           <h3>Bootstrap</h3>
//           </div>
//           </div>
//           <div className = "head-text">
//             <div className = "head-image">
//           <img
//             src="https://media.dev.to/cdn-cgi/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdxy1c2bvl6odeo52dodk.jpg"
//             alt="tailwind css"
//             className="tech-list-item"
//             style={{ width: "100px", height: "120px" }}
//             data-aos="zoom-in"
//           />
//           </div>
//           <div className='text-on-image4'>
//           <h3>TailWindCss</h3>
//           </div>
//           </div>
//         </div>
//          <h2 className='text-center text-orange'>Backend</h2>
//         <div className="skill-set2 d-flex justify-content-between flex-wrap m-5 p-5">
//           <img
//             src="https://camo.githubusercontent.com/f2bf53202c75bfcd9de18d25750f295f3e9c3cb56d4bfcf6a41038ff44b5aec4/687474703a2f2f636f64652d6d6176656e2e636f6d2f696d672f6e6f64652e706e67"
//             alt="NodeJS"
//             className="tech-list-item"
//             style={{ width: "140px", height: "120px" }}
//             data-aos="zoom-in"
//           />
//           <img
//             src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675637255386/f3a9a38b-116d-4b35-8f46-8d8abb78166f.png"
//             alt="ExpressJS"
//             className="tech-list-item"
//             style={{ width: "140px", height: "120px" }}
//             data-aos="zoom-in"
//           />
//           <img
//             src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png"
//             alt="MongoDB"
//             className="tech-list-item"
//             style={{ width: "100px", height: "120px" }}
//             data-aos="zoom-in"
//           />
//           <img
//             src=""
//             alt="Mongoose"
//             className="tech-list-item"
//             style={{ width: "100px", height: "120px" }}
//             data-aos="zoom-in"
//           />
//         <img
//             src="https://w7.pngwing.com/pngs/717/111/png-transparent-mysql-round-logo-tech-companies-thumbnail.png"
//             alt="MySQL"
//             className="tech-list-item"
//             style={{ width: "100px", height: "120px" }}
//             data-aos="zoom-in"
//           />
//           <img
//             src="data:image/png;base64,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"
//             alt="JWT token"
//             className="tech-list-item"
//             style={{ width: "100px", height: "120px" }}
//             data-aos="zoom-in"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Skills;

import React from "react";
import styled from "styled-components";
import { skills } from "./SkillsJson";
import { Tilt } from "react-tilt";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
   background: url("https://wallpapercave.com/wp/wp2757874.gif");
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: orangered;;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: white;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 50px;
  justify-content: center;
  
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: rgba(17, 25, 40, 0.5);  // Semi-transparent background
  border: 1px solid rgba(255, 255, 255, 0.2);  // Semi-transparent border
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: white;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: white;
  border: 1px solid ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
 

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills on which I have been working on...
        </Desc>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Tilt key={`tilt-${index}`}>
              <Skill key={`skill-${index}`}>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, index_x) => (
                    <SkillItem key={`skill-x-${index_x}`}>
                      <SkillImage src={item.image} alt={item.name} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            </Tilt>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;