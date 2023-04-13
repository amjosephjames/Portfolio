import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <Wrapper>
        <Left></Left>
        <Right>
          <Holder>
            <Top>
              <H1>About Me</H1>
              <Line></Line>
            </Top>
            <P>
              i`m <span>Joseph James</span> and i`m passionate about building
              solutions that will solve real life problem,elevate
              humanity,develop the economy and create wealth.
            </P>
            <P>
              i believe excellence in any project cannot be compromised and i
              believe we can change the world the world by working together.
            </P>
            <P>
              i use my technical and leadership skills to build projects from
              scratch to finish.And here are the technologies
            </P>
            <Down>
              <Javascript>Javascript</Javascript>
              <Nodejs>NodeJs</Nodejs>
              <Reactjs>ReactJs</Reactjs>
              <Redux>Redux</Redux>
              <Expressjs>Expressjs</Expressjs>
              <Mongodb>MongoDB</Mongodb>
              <Restapi>Rest Api</Restapi>
              <Postman>Postman</Postman>
              <Git>Github</Git>
              <Heroku>Heroku</Heroku>
            </Down>
          </Holder>
        </Right>
      </Wrapper>
    </Container>
  );
};
export default About;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;

  @media (max-width: 320px) {
    margin-top: 400px;
  }

  @media (max-width: 400px) {
    margin-top: 400px;
  }
  @media (max-width: 768px) {
    margin-top: 350px;
  }
  @media (max-width: 900px) {
    margin-top: 350px;
  }
`;
const Wrapper = styled.div`
  width: 80%;
  height: 550px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 768px) {
    display: flex;
    width: 90%;
    height: 1000px;

    justify-content: space-between;
    flex-direction: column;
  }

  @media (max-width: 320px) {
    display: flex;
    width: 95%;
    height: 1000px;

    justify-content: space-between;
    flex-direction: column;
  }

  @media (max-width: 400px) {
    display: flex;
    width: 90%;
    height: 1000px;

    justify-content: space-between;
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("Joseph.JPG");
  @media (max-width: 768px) {
    width: 100%;
    /* height: 500px; */
    /* padding-bottom: 100px; */
    height: 50%;
  }

  @media (max-width: 320px) {
    height: 400px;
  }

  @media (max-width: 400px) {
    height: 400px;
  }
`;
const Right = styled.div`
  width: 50%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-self: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }

  @media (max-width: 320px) {
    width: 100%;
    height: 600px;
  }

  @media (max-width: 400px) {
    width: 100%;
    height: 600px;
  }
`;
const Holder = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 30px;
`;
const Top = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const H1 = styled.div`
  color: white;
  font-size: 20px;

  @media (max-width: 320px) {
    font-size: 20px;
  }

  @media (max-width: 400px) {
    width: 200px;
  }
`;
const Line = styled.div`
  width: 120px;
  height: 1px;
  background: #515259;
  /* @media (max-width: 320px) {
    width: 90px;
  }

  @media (max-width: 400px) {
    width: 90px;
  } */
`;
const P = styled.div`
  color: #515259;
  font-size: 13px;

  line-height: 1.5;
`;
const Down = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: row;
  flex-wrap: wrap;
`;
const Javascript = styled.div`
  width: 120px;
  height: 40px;
  border-radius: 5px;
  color: blue;
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  /* font-weight: 500; */
  margin: 3px;
`;
const Nodejs = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  margin: 3px;
  color: blue;
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  /* font-weight: 500; */
`;

const Postman = styled.div`
  width: 110px;
  height: 40px;
  border-radius: 5px;
  margin: 3px;
  color: blue;
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  /* font-weight: 500; */
`;
const Expressjs = styled.div`
  width: 110px;
  height: 40px;
  border-radius: 5px;
  margin: 3px;
  color: blue;
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  /* font-weight: 500; */
`;
const Heroku = styled.div`
  width: 110px;
  height: 40px;
  border-radius: 5px;
  margin: 3px;
  color: blue;
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  @media (max-width: 320px) {
    display: none;
  }
  /* font-weight: 500; */
`;
const Git = styled.div`
  width: 110px;
  height: 40px;
  border-radius: 5px;
  margin: 3px;
  color: blue;
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  @media (max-width: 320px) {
    display: none;
  }
  /* font-weight: 500; */
`;
const Redux = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  margin: 3px;
  color: blue;
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  /* font-weight: 500; */
`;
const Reactjs = styled.div`
  width: 110px;
  height: 40px;
  border-radius: 5px;
  margin: 3px;
  color: blue;
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  /* font-weight: 500; */
`;
const Mongodb = styled.div`
  width: 110px;
  height: 40px;
  border-radius: 5px;
  margin: 3px;
  color: blue;
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  /* font-weight: 500; */
`;
const Restapi = styled.div`
  width: 110px;
  height: 40px;
  border-radius: 5px;
  margin: 3px;
  color: blue;
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  /* font-weight: 500; */
`;
