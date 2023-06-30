import Spline from "@splinetool/react-spline";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoLogoGithub, IoMenu } from "react-icons/io5";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "../Loader";
function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const loadSpline = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
  
        <>
          {/* <Spline scene="https://prod.spline.design/lWBgfugHJPzhGd3Q/scene.splinecode" /> */}
          <div className="relative" id="home" style={{ height: "100%" }}>
            <Spline
              scene="https://prod.spline.design/lWBgfugHJPzhGd3Q/scene.splinecode"
              onLoad={loadSpline}
            />
            <div className="absolute bottom-10 w-full flex justify-center items-center">
              <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl ">
                <p className="text-white">Press and drag to orbit</p>
              </div>
            </div>
          </div>
        </>
        )}
        </>
  )
}

export default Home