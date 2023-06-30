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
import Corousal from "react-elastic-carousel";

function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="w-full px-6 z-50  fixed inset-x-0 top-2 flex justify-center items-center ">
    <div className=" w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
      <p className="text-lg text-slate-200 font-medium">Shayan Ejaz</p>

      <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
        <a
          href="#home"
          className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
        >
          Projects
        </a>
        <a
          href="#contacts"
          className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
        >
          Contact
        </a>
        <a
          href="https://drive.google.com/file/d/17HTo6qI45eQZ4kKDmP3vTtu_iARSFmfa/view?usp=sharing"
          className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in"
        >
          Download
        </a>
      </div>

      <motion.div
        whileTap={{ scale: 0.6 }}
        className="block md:hidden  ml-auto cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <IoMenu className="text-2xl text-textBase " />
      </motion.div>

      {isActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ delay: "0.1s", type: "spring" }}
          className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6"
        >
          <a
            href="#home"
            className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
            onClick={() => setIsActive(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
            onClick={() => setIsActive(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
            onClick={() => setIsActive(false)}
          >
            Projects
          </a>
          <a
            href="#contacts"
            className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
            onClick={() => setIsActive(false)}
          >
            Contact
          </a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ delay: "0.1s", type: "spring" }}
            href="https://drive.google.com/file/d/17HTo6qI45eQZ4kKDmP3vTtu_iARSFmfa/view?usp=sharing"
            className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in"
            onClick={() => setIsActive(false)}
          >
            Download
          </motion.a>
        </motion.div>
      )}
    </div>
  </nav>
  )
}

export default Header