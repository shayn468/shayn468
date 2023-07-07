import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Slider from 'react-slick';
import { IoLogoGithub } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { Experience, Projects, SocialLinks } from '../data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Vetri from '../images/IMAGE.jpeg';
import Modal from 'react-modal'; 
import ReactDOM from 'react-dom';
import "../style/about.css"


function About() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };


  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };
  
  return (
    <main className="w-[100%] mt-4">
      <section
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
        id="about"
      >
        <div className="w-full h-420 flex items-left justify-center">
          <div className="w-275 h-340 relative bg-emerald-200 rounded-md">
            <img
              src={Vetri}
              alt=""
              className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="w-full h-420 flex flex-col items-center justify-center ">
          <h4 className="text-lg text-textBase text-center text-justify me-20 mb-12">
            Unlock the full potential of your business with a visionary developer who brings 4+ years of expertise to the table.
            From concept to execution, I craft digital experiences that
            captivate, engage, and deliver results. Watch your ideas come to
            life with seamless user interfaces, stunning designs, and
            cutting-edge technologies. With a track record of success, my
            portfolio is a testament to my ability to create transformative
            solutions that drive growth. Elevate your online presence, enhance
            user experiences, and amplify your business impact. Experience the
            power of innovation with me as your trusted development partner
          </h4>

          {/* <button class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
            <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <a href="https://drive.google.com/file/d/17HTo6qI45eQZ4kKDmP3vTtu_iARSFmfa/view?usp=sharing">
                Download
              </a>
            </span>
          </button> */}
        </div>
      </section>

      <section className="w-full flex items-center justify-center" id = "experience">
      <VerticalTimeline>
        {Experience &&
          Experience.map((n) => (
            <VerticalTimelineElement
              key={n.id}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(21, 24, 31)",
                color: "#888",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(21, 24, 31)",
              }}
              date={n.date}
              iconStyle={{ background: "rgb(21, 24, 31)", color: "#888" }}
              icon={n.iconsSrc}
            >
              <h3 className="vertical-timeline-element-title">
                {n.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {n.location}
              </h4>
              <p>{n.description}</p>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
    </section> 
  

    <section className="flex flex-wrap items-center justify-evenly my-24 gap-4" id="projects">
        <div className="container">
          <Slider {...settings}>
            {Projects &&
              Projects.map((n, i) => (
                <motion.div
                  key={n.id}
                  className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[375px] hover:border-zinc-600 duration-100 ease-in-out"
                >
                  <p className="text-lg text-slate-200 font-medium uppercase">
                    {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name}
                  </p>
                  <div className="relative">
                    <img
                      src={n.imageSrc}
                      alt=""
                      className="object-contain md:object-scale-down h-48 w-96"
                      onClick={() => openModal(n.imageSrc)}
                    />
                  </div>
                  <div className="flex flex-1 items-center justify-between">
                    <p className="text-lg text-gray-300">
                      Technologies
                      <span className="block text-sm text-gray-500">{n.techs}</span>
                    </p>
                    <a href={n.github}>
                      <motion.div whileTap={{ scale: 0.5 }}>
                        <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                      </motion.div>
                    </a>
                  </div>
                </motion.div>
              ))}
          </Slider>
          {selectedImage && (
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Image Modal"
              className="modal"
              overlayClassName="modal-overlay"
            >
              <img src={selectedImage} alt="Selected Project" className="max-h-full max-w-full object-contain" />
            </Modal>
          )}
        </div>
      </section>

      <section
        id="contacts"
        className="flex flex-col items-center justify-evenly w-full my-24"
      >
        <p className="text-2xl text-gray-400 capitalize">Follow me on</p>
        <div className="flex items-center justify-evenly w-full my-4 flex-wrap gap-4">
          {SocialLinks &&
            SocialLinks.map((n) => (
              <motion.a
                whileTap={{ scale: 0.8 }}
                href={n.link}
                key={n.id}
                className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
              >
                {n.iconSrc}
                <p className="text-lg text-textBase">{n.name}</p>
              </motion.a>
            ))}
        </div>
      </section>
    </main>
  );
}

export default About;
 {/* <Corousal>
          {Projects &&
            Projects.map((n, i) => (
              <motion.div
                key={n.id}
                className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[375px] hover:border-zinc-600 duration-100 ease-in-out"
              >
                <p className="text-lg text-textBase font-medium uppercase">
                  {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name}
                </p>

            
                <img
                  src={n.imageSrc}
                  alt=""
                  class="image"
                  width="500"
                  height="500"
                />
              

                <div className="flex flex-1 items-center justify-between">
                  <p className="text-lg text-gray-300">
                    Technologies
                    <span className="block text-sm text-gray-500">
                      {n.techs}
                    </span>
                  </p>
                  <a href={n.github}>
                    <motion.div whileTap={{ scale: 0.5 }}>
                      <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                    </motion.div>
                  </a>
                </div>
              </motion.div>
            ))}
        </Corousal> */}