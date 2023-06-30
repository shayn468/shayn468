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
  import al1 from "./images/alqaryahauction.png"
  
  export const Experience = [
    {
      id: 1,
      date: "2020 - present",
      iconsSrc: <IoCodeWorking />,
      title: "Freelancing",
      location: "Remote",
      description:
        "Web developmment, Mobile Development, User Experience, Project Management",
    },
    {
      id: 2,
      date: "2022 - 2022",
      iconsSrc: <IoCodeWorking />,
      title: "Internship as full Stack Developer",
      location: "Rawalpindi",
      description:
        "API, User Experience, Backend Pagination, React State Management",
    },
    // {
    //   id: 3,
    //   date: "2012 - 2014",
    //   iconsSrc: <IoCodeWorking />,
    //   title: "Creative Director",
    //   location: "Doha, Qatar",
    //   description:
    //     "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    // },
    // {
    //   id: 4,
    //   date: "2011 - 2012",
    //   iconsSrc: <IoCodeWorking />,
    //   title: "Creative Director",
    //   location: "Doha, Qatar",
    //   description:
    //     "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    // },
    // {
    //   id: 5,
    //   date: "2010 - 2011",
    //   iconsSrc: <IoCodeWorking />,
    //   title: "Creative Director",
    //   location: "Doha, Qatar",
    //   description:
    //     "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    // },
  ];
  
  export const Projects = [
    {
      id: 1,
      name: "Smart Restaurant",
      imageSrc: r1,
      techs: "React Native, Redux, Authorization, Javascript, Context Api",
      github: "https://github.com/shayn468/smartRestaurant",
    },
    {
      id: 2,
      name: "Booking App Clone",
      imageSrc: h1,
      techs: "MongoDb, Express Js, React Js, Node Js, JWT, Context Api",
      github: "https://github.com/shayn468/Booking",
    },
    {
      id: 3,
      name: "Flappy Bird using Artificial Intelligence",
      imageSrc: f1,
      techs: "Python, Nueral Networks, NEAT, Pygame",
      github: "https://github.com/shayn468/FlappyBird",
    },
    {
      id: 4,
      name: "Music-Hub",
      imageSrc: m1,
      techs: "React Js, Spotify Api",
      github: "https://github.com/shayn468/Music-App",
    },
    {
      id: 5,
      name: "Stocked Grocer",
      imageSrc: s1,
      techs: "Laravel, Jquery , Authorization, Authentication, CRUD",
      github: "https://github.com/shayn468/StockedGrocer",
    },
    {
      id: 5,
      name: "Alqaryah Auction System",
      imageSrc: al1,
      techs: "React Js, SQL, Authorization, Authentication, CRUD",
      github: "https://alqaryahauction.com/",
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
      link: "https://github.com/shayn468",
    },
    // {
    //   id: 1,
    //   iconSrc: <IoLogoYoutube className="text-red-500 text-3xl cursor-pointer" />,
    //   name: "YouTube",
    //   link: "#",
    // },
    {
      id: 1,
      iconSrc: (
        <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
      ),
      name: "Twitter",
      link: "https://twitter.com/shayn_dev",
    },
    {
      id: 1,
      iconSrc: (
        <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
      ),
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/shayan-ejaz/",
    },
    // {
    //   id: 1,
    //   iconSrc: (
    //     <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
    //   ),
    //   name: "Whatsapp",
    //   link: "#",
    // },
  ];
