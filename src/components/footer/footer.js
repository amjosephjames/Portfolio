import React from "react";
import styled from "styled-components";
import { FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        {/* <Logo>josephekojames@gmail.com</Logo> */}
        <Logo>JJ</Logo>

        <Iconify>
          <FiFacebook size={23} color="white" />
          <FiTwitter size={23} color="white" />
          <FiLinkedin size={23} color="white" />
        </Iconify>
      </Wrapper>
    </Container>
  );
};
export default Footer;
const Container = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  @media (max-width: 768px) {
    margin-top: 1150px;
    /* height: 40vh; */
    display: flex;
    justify-content: center;
    align-items: center;

    background: inherit;
  }
  @media (max-width: 500px) {
    margin-top: 950px;
    /* height: 40vh; */
    display: flex;
    justify-content: center;
    align-items: center;

    background: inherit;
  }
  @media (max-width: 1024px) {
    margin-top: 100px;
  }

  @media (max-width: 320px) {
    /* margin-top: 1400px; */
    /* height: 40vh; */
    display: flex;
    justify-content: center;
    align-items: center;
    background: inherit;
  }

  @media (max-width: 400px) {
    /* margin-top: 1000px; */
    /* margin-top: 1050px; */
    /* height: 40vh; */
    display: flex;
    justify-content: center;
    align-items: center;
    background: inherit;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Logo = styled.div`
  color: blue;
  font-size: 30px;
  font-weight: bold;
`;

const Iconify = styled.div`
  width: 90px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
