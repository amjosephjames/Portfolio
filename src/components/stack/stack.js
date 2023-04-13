import React from "react";
import styled from "styled-components";
const Circular = () => {
  return (
    <Container>
      <Wrapper>
        <H1>What i use</H1>
        <Slider>
          <span
            style={{
              transform: "rotateY(calc(1*45deg)) translateZ(350px)",
            }}
          >
            <img src="/images/vercel.png" alt="one" />
          </span>
          <span
            style={{
              transform: "rotateY(calc(2*45deg)) translateZ(350px)",
            }}
          >
            <img src="/images/reactjs.png" alt="two" />
          </span>
          <span
            style={{
              transform: "rotateY(calc(3*45deg)) translateZ(350px)",
            }}
          >
            <img src="/images/nodejs.png" alt="thr" />
          </span>
          <span
            style={{
              transform: "rotateY(calc(4*45deg)) translateZ(350px)",
            }}
          >
            <img src="/images/netlify.png" alt="for" />
          </span>
          <span
            style={{
              transform: "rotateY(calc(5*45deg)) translateZ(350px)",
            }}
          >
            <img src="/images/netlify.png" alt="fiv" />
          </span>
          <span
            style={{
              transform: "rotateY(calc(6*45deg)) translateZ(350px)",
            }}
          >
            <img src="/images/postman.jpg" alt="six" />
          </span>
          <span
            style={{
              transform: "rotateY(calc(7*45deg)) translateZ(350px)",
            }}
          >
            <img src="/images/mongodb.png" alt="sev" />
          </span>
          <span
            style={{
              transform: "rotateY(calc(8*45deg)) translateZ(350px)",
            }}
          >
            <img src="/images/github.png" alt="eig" />
          </span>
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default Circular;
const Container = styled.div`
  background: linear-gradient(to right, #020c1b, #020c1b);

  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 320px) {
    margin-top: 400px;
  }
  @media (max-width: 360px) {
    margin-top: 400px;
  }
  @media (max-width: 400px) {
    margin-top: 400px;
  }
`;
const Slider = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  animation: rotate 30s linear infinite;

  @keyframes rotate {
    0% {
      transform: perspective(1000px) rotateY(0deg);
    }
    0% {
      transform: perspective(1000px) rotateY(360deg);
    }
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    img {
      object-fit: cover;
      border-radius: 10px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: 2s;
      cursor: pointer;
      :hover {
        transform: translateY(-50px) scale(1.2);
      }
      @media (max-width: 320px) {
        width: 150px;
        height: 150px;
      }
      @media (max-width: 360px) {
        width: 150px;
        height: 150px;
      }
      @media (max-width: 400px) {
        width: 150px;
        height: 150px;
      }
    }
  }
`;
const Wrapper = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  @media (max-width: 330px) {
    height: 70%;
    width: 90%;
  }
  @media (max-width: 360px) {
    height: 70%;
    width: 90%;
  }
  @media (max-width: 400px) {
    height: 70%;
    width: 90%;
  }
`;
const H1 = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: white;
  font-family: sans-serif;
`;
