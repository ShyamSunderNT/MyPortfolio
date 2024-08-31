import React from "react";
import styled from "styled-components";
import { education } from "../components/Educataion/educationJson";
import EducationCard from "../components/Educataion/educatinCard";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


const Container = styled.div`

display: flex;
flex-direction: column;
justify-content-center;
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

const Education = () => {
  return (
    <Container id="Education">
      <Wrapper>
        <Title>Education</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </Desc>

        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard key={`education-${index}`} education={education} />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>

    
  );
};


export default Education;

