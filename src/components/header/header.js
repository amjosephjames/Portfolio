import React from "react";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = ({ bg }) => {


  return (
    <Container bg={bg}>
      <Wrapper>
        <Logo>JJ</Logo>
        <Navigator>
          <Span>About</Span>
          <Span>Projects</Span>
          <Span>Contact</Span>
          <Button>Download CV</Button>
        </Navigator>
        </Wrapper>
        <Icons>
          <AiOutlineMenu
            color="blue"
            id="Menu"
            onClick={() => {
              document.getElementById("sidebar").style.width = "260px";
              document.getElementById("Menu").style.display = "none";
              document.getElementById("Close").style.display = "block";
            }}
          />
          <AiOutlineClose
            fontSize="25px"
            color="blue"
            style={{
              display: "none",
            }}
            id="Close"
            onClick={() => {
              document.getElementById("sidebar").style.width = "0";
              document.getElementById("Menu").style.display = "block";
              document.getElementById("Close").style.display = "none";
            }}
          />
        </Icons>
        <Sidebar id="sidebar">
          <Hold>
            <Span>About</Span>
            <Span>Projects</Span>
            <Span>Contact</Span>
            <Button>Download CV</Button>
          </Hold>
        </Sidebar>
      
    </Container>
  );
};
export default Header;

const Container = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  position: fixed;
  align-items: center;
  /* background: inherit; */
  background-color: ${({ bg }) => (bg ? "#020cib" : "020c1b")};
  /* background-color: ${({ bc }) => (bc ? "red" : "transperant")}; */
  /* color: ${({ bc }) => (bc ? "white" : "black")}; */
  @media (max-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: fixed;
    height: 15vh;
  }

  @media (max-width: 400px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: fixed;
    height: 15vh;
  }
  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: fixed;
    height: 15vh;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    position: fixed;
    align-items: center;
    width: 100%;
    height: 15vh;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    /* display: none; */
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: 320px) {
    /* display: none; */
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: 400px) {
    /* display: none; */
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: 500px) {
    /* display: none; */
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: 900px) {
    /* display: none; */
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
`;
const Logo = styled.div`
  color: blue;
  font-size: 30px;
  font-weight: bold;
  font-family: sans-serif;
  @media (max-width: 320px) {
    font-size: 30px;
  }

  @media (max-width: 400px) {
    font-size: 30px;
  }
`;
const Navigator = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 900px) {
    display: none;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
const Span = styled.div`
  color: white;
  font-size: 13px;
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
  font-size: 13px;
  /* font-weight: bold; */
`;

const Icons = styled.div`
  color: blue;
  font-size: 25px;
  font-weight: bolder;
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;
const Hold = styled.div`
  /* display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 50%;
  align-items: center;
`;

const Sidebar = styled.div`
  width: 0;
  height: 100vh;
  /* background-color: white; */
  background-color: #020c1b;

  position: fixed;
  display: none;
  z-index: 10;
  transition: all 950ms;
  overflow: hidden;
  top: 0;
  left: 0;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
