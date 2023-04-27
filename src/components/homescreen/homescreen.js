import React from "react";
import styled from "styled-components";
import Header from "../header/header";
import Body from "../body/body";
import About from "../about/about";
import Projects from "../projects/projects";
import Footer from "../footer/footer";
// import Stack from "../stack/stack";
import Use from "../use/use";
const Homescreen = () => {
  return (
    <Container>
      <Header />
      <Body />
      <About />
      {/* <Stack/> */}
      <Use />
      <Projects />
      <Footer />
    </Container>
  );
};
export default Homescreen;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #020c1b;
`;
