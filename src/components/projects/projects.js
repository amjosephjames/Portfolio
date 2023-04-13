import React from "react";
import styled from "styled-components";
// import pix from "../projects/system.jpg";

const Projects = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <H1>What i`ve Built</H1>
          <Mid>
            <H2>My Projects</H2>
            <Line></Line>
          </Mid>
        </Top>
        <Holder>
          <Card>
            <Image
            // src={pix}
            />
            <Down>
              <Downhold>
                <H4>Call Care</H4>
                <P>
                  A platform that connects client and babysitters professionals
                </P>
                <Below>
                  <Span>Reactjs</Span>
                  <Span>Nodejs</Span>
                  <Span>Expressjs</Span>
                  <Span>Redux</Span>
                  <Span>MongoDB</Span>
                </Below>
              </Downhold>
            </Down>
          </Card>
          <Card>
            <Image
            // src={pix}
            />
            <Down>
              <Downhold>
                <H4>Call Care</H4>
                <P>
                  A platform that connects client and babysitters professionals
                </P>
                <Below>
                  <Span>Reactjs</Span>
                  <Span>Nodejs</Span>
                  <Span>Expressjs</Span>
                  <Span>Redux</Span>
                  <Span>MongoDB</Span>
                </Below>
              </Downhold>
            </Down>
          </Card>
          <Card>
            <Image
            // src={pix}
            />
            <Down>
              <Downhold>
                <H4>Disney</H4>
                <Ps>A clone of disney plus entertainment platform</Ps>

                <Spans>Reactjs</Spans>
              </Downhold>
            </Down>
          </Card>
        </Holder>
      </Wrapper>
    </Container>
  );
};
export default Projects;

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  @media (max-width: 768px) {
    margin-top: 600px;
    height: 200vh;
  }

  @media (max-width: 400px) {
    /* margin-top: 1400px; */
    margin-top: 1400px;
  }
  @media (max-width: 320px) {
    /* margin-top: 1400px; */
  }
`;
const Wrapper = styled.div`
  width: 60%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  @media (mx-width: 768px) {
    width: 80%;
    height: 90%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
  @media (mx-width: 500px) {
    width: 80%;
    height: 90%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 1024px) {
    width: 90%;
  }
`;
const Top = styled.div`
  width: 250px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
const H1 = styled.div`
  color: white;
  font-size: 20px;
`;
const Mid = styled.div`
  width: 145px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const H2 = styled.div`
  color: blue;
  font-size: 14px;
`;
const Line = styled.div`
  background: #515259;
  width: 65px;
  height: 1px;
`;
const Holder = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  flex-direction: row;
  /* background-color: white; */
  // flex-wrap: wrap;
  @media (max-width: 768px) {
    /* justify-content: center; */
    flex-direction: column;
    justify-content: space-between;
    display: flex;
    height: 90%;
    align-items: center;
  }
  @media (max-width: 1024px) {
    /* justify-content: center; */
  }
`;
const Card = styled.div`
  width: 250px;
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border: 1px solid blue;
  border-radius: 5px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;
const Down = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Downhold = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const H4 = styled.div`
  color: white;
  font-size: 15px;
`;
const P = styled.div`
  color: blue;
  font-size: 10px;
`;
const Ps = styled.div`
  color: blue;
  font-size: 10px;
  /* font-weight: 500; */

  margin-bottom: 10px;
`;
const Spans = styled.div`
  color: blue;
  font-size: 10px;
  /* font-weight: bold; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid blue;
  width: 55px;
  height: 25px;
  margin-bottom: 10px;
`;
const Span = styled.div`
  color: blue;
  font-size: 10px;
  /* margin: 4px; */

  /* font-weight: bold; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid blue;
  width: 55px;
  height: 25px;
`;
const Below = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
`;
