import {
    IoCodeWorking,
    IoLogoGithub,
    IoLogoYoutube,
    IoLogoTwitter,
    IoLogoLinkedin,
    IoLogoWhatsapp,
  } from "react-icons/io5";

  import f1 from "./images/Flappybird/1.PNG";
  import s1 from "./images/StockedGrocer/home.PNG";
  import m1 from "./images/musicapp/music.PNG"
  import h1 from "./images/booking/home.PNG"
  import r1 from "./images/smartrestaurant/welcomescreen.PNG"
  import f2 from "./images/Flappybird/2.PNG";
  import s2 from "./images/StockedGrocer/categories.PNG";
  import m2 from "./images/musicapp/music.PNG"
  import h2 from "./images/booking/hotelssearch.PNG"
  import r2 from "./images/smartrestaurant/signinscreen.PNG"
  
  // export const Experience = [
  //   {
  //     id: 1,
  //     date: "2016 - present",
  //     iconsSrc: <IoCodeWorking />,
  //     title: "Creative Director",
  //     location: "Doha, Qatar",
  //     description:
  //       "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  //   },
  //   {
  //     id: 2,
  //     date: "2014 - 2016",
  //     iconsSrc: <IoCodeWorking />,
  //     title: "Creative Director",
  //     location: "Doha, Qatar",
  //     description:
  //       "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  //   },
  //   {
  //     id: 3,
  //     date: "2012 - 2014",
  //     iconsSrc: <IoCodeWorking />,
  //     title: "Creative Director",
  //     location: "Doha, Qatar",
  //     description:
  //       "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  //   },
  //   {
  //     id: 4,
  //     date: "2011 - 2012",
  //     iconsSrc: <IoCodeWorking />,
  //     title: "Creative Director",
  //     location: "Doha, Qatar",
  //     description:
  //       "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  //   },
  //   {
  //     id: 5,
  //     date: "2010 - 2011",
  //     iconsSrc: <IoCodeWorking />,
  //     title: "Creative Director",
  //     location: "Doha, Qatar",
  //     description:
  //       "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  //   },
  // ];
  
  export const Projects = [
    {
      id: 1,
      name: "Smart Restaurant",
      imageSrc: r1,
      techs: "React Native, Redux, Authorization, Javascript",
      github: "https://github.com/shayn468/smartRestaurant",
    },
    {
      id: 2,
      name: "Booking App Clone",
      imageSrc: h1,
      techs: "MongoDv, Express Js, React Js, Node Js, JWT, Context Api",
      github: "#",
    },
    {
      id: 3,
      name: "Flappy Bird using Artificial Intelligence",
      imageSrc: f1,
      techs: "React Js, Chakra UI, Google API",
      github: "https://github.com/shayn468/FlappyBird",
    },
    {
      id: 4,
      name: "Music-Hub",
      imageSrc: m1,
      techs: "React Js,  Material UI",
      github: "https://github.com/shayn468/Music-App",
    },
    {
      id: 5,
      name: "Stocked Grocer",
      imageSrc: s1,
      techs: "React Js, Chara UI, Firebase",
      github: "https://github.com/shayn468/StockedGrocer",
    },
    // {
    //   id: 6,
    //   name: "T",
    //   imageSrc: img6,
    //   techs: "NextJs, Firebase Auth",
    //   github: "#",
    // },
  ];
  
  // export const Images = [
  //   {
  //     id:1,
  //     pic: r2,
  //   },
  //   {
  //     id:2,
  //     pic: h2,
  //   },
  //   {
  //     id:3,
  //     pic: f2,
  //   },
  //   {
  //     id:4,
  //     pic: m2,
  //   },
  //   {
  //     id:5,
  //     pic: s2,
  //   },

   
  // ];
  
  export const SocialLinks = [
    {
      id: 1,
      iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
      name: "GitHub",
      link: "#",
    },
    {
      id: 1,
      iconSrc: <IoLogoYoutube className="text-red-500 text-3xl cursor-pointer" />,
      name: "YouTube",
      link: "#",
    },
    {
      id: 1,
      iconSrc: (
        <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
      ),
      name: "Twitter",
      link: "#",
    },
    {
      id: 1,
      iconSrc: (
        <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
      ),
      name: "LinkedIn",
      link: "#",
    },
    {
      id: 1,
      iconSrc: (
        <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
      ),
      name: "Whatsapp",
      link: "#",
    },
  ];
