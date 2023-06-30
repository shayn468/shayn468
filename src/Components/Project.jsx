// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../images/project-img1.png";
// import projImg2 from "../images/project-img2.png";
// import projImg3 from "../images/project-img3.png";
// import colorSharp2 from "../images/color-sharp2.png";
// import { Route } from "react-router-dom";
// import Tabs from "./Tabs";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';


// import React from 'react'

// function Project() {
//   const projects = [
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg1,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg1,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     },
//   ];
//   return (
//     <section className="project" id="project">
//     <div className="container">
//       <div className="row">
//         <div className="col-12">
//           <TrackVisibility>
//             {({ isVisible }) => (
//               <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                 <h2 className="text-2xl font-bold">Projects</h2>
//                 <p className="text-base">
//                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//                 </p>
//                 <div className="flex justify-center items-center mb-5" id="pills-tab">
//                 <div>
//       {/* <Tabs /> */}

    
//     </div>
//                   <button className="px-4 py-2 rounded-lg mx-2 bg-gray-200 text-gray-800 focus:outline-none focus:bg-gray-300" data-bs-toggle="tab" data-bs-target="#first">
//                     Tab 1
//                   </button>
//                   <button className="px-4 py-2 rounded-lg mx-2 bg-gray-200 text-gray-800 focus:outline-none focus:bg-gray-300" data-bs-toggle="tab" data-bs-target="#second">
//                     Tab 2
//                   </button>
//                   <button className="px-4 py-2 rounded-lg mx-2 bg-gray-200 text-gray-800 focus:outline-none focus:bg-gray-300" data-bs-toggle="tab" data-bs-target="#third">
//                     Tab 3
//                   </button>
//                 </div>
//                 <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
//                   <div className="tab-content" id="slideInUp">
//                     <div className="tab-pane" id="first">
//                       <div className="row">
//                         {projects.map((project, index) => (
//                           <ProjectCard key={index} {...project} />
//                         ))}
//                       </div>
//                     </div>
//                     <div className="tab-pane" id="second">
//                       <p>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.
//                       </p>
//                     </div>
//                     <div className="tab-pane" id="third">
//                       <p>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </TrackVisibility>
//         </div>
//       </div>
//     </div>
//     <img className="background-image-right" src={colorSharp2} alt="" />
//   </section>
  
  

  
//   )
// }

// export default Project
