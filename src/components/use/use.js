import React from "react";
import styled from "styled-components";

const Use = () => {
  return (
    <Container>
      <Wrapper>
        <H1>Tools i use</H1>
      </Wrapper>
    </Container>
  );
};
export default Use;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  /* @media (max-width: 768px) {
    margin-top: 70px;
  } */

  @media (max-width: 1024px) {
    margin-top: 100px;
  }
  @media (max-width: 500px) {
    margin-top: 100px;
  }

  @media (max-width: 400px) {
    /* margin-top: 200px; */
    margin-top: 400px;
  }
  @media (max-width: 320px) {
    /* margin-top: 200px; */
  }
`;
const Wrapper = styled.div`
  width: 70%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
const H1 = styled.div`
  color: white;
  font-size: 20px;
  /* font-weight: bold; */
`;
