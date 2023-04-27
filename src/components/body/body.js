import React from "react";
import styled from "styled-components";

const Body = () => {
  return (
    <Container>
      <Wrapper>
        <H1>Hello there, my name is</H1>
        <H2>Joseph James</H2>
        <P>
          I`m a fullstack software engineer. i use my problem solving skill and
          critical thinking ability t build solutions and help innovators bring
          their idea to life
        </P>
        <Button>LET`S CHAT</Button>
      </Wrapper>
    </Container>
  );
};
export default Body;

const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  align-items: center;
  background: inherit;
`;
const Wrapper = styled.div`
  width: 600px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 320px) {
    width: 300px;
    height: 220px;
  }

  @media (max-width: 400px) {
    width: 300px;
    height: 220px;
  }
`;
const H1 = styled.div`
  color: blue;
  font-size: 13px;
`;
const H2 = styled.div`
  color: white;
  font-size: 40px;
  font-weight: bold;

  @media (max-width: 320px) {
    font-size: 30px;
  }

  @media (max-width: 400px) {
    font-size: 30px;
  }
`;
const P = styled.div`
  width: 100%;
  color: #515259;
  line-height: 1.5;
  font-size: 12px;
`;
const Button = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: inherit;
  color: blue;
  border: 1px solid blue;
  font-size: 16px;
  /* font-weight: bold; */
`;
