import Spline from "@splinetool/react-spline";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Vetri from "./images/IMAGE.jpeg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience, Projects, SocialLinks, Images } from "./data";
import { IoLogoGithub, IoMenu } from "react-icons/io5";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Corousal from "react-elastic-carousel";
import "./style/imagestyle.css";
import Loader from "./Loader";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Project  from "./Components/Project";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';



function App() {
 

  return (
    <>
      {/* {isLoading ? ( */}
      {/* <Loader /> */}
      {/* ) : ( */}
      {/* <Container> */}
      <AnimatePresence initial={false}>
        {/* <div style={{ flex: 1, flexDirection: 'columns' , justifyContent: 'center', position: 'relative', color: "black" , paddingBottom: 20 ,alignItems: 'center' }}> */}
        <div className="flex w-screen min-h-screen flex-col justify-center relative pb-20 bg-primary">
          <Header/>

          <Home/>

         <About/>
         {/* <Project/> */}
        </div>
      </AnimatePresence>
      {/* )} */}
      {/* </Container> */}
    </>
  );
}

export default App;
