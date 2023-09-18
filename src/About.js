import { Tilt } from 'react-tilt';

import {useAnimation, motion} from "framer-motion";
import { useInView } from "react-intersection-observer";

import pysvg from "./python.png";
import reactsvg from "./react-3.png";
import nodesvg from "./python.png";
import { useEffect, useRef } from 'react';
import ExpirenceCard from './ExpirenceCard';

import './about.css';
const experiences = [
  {
    title: "Python Automation Intern",
    company: "Chakraborty Lakhar InnovaAons Pvt. Ltd",
    location: "Odisha, India",
    startDate: "May 2023",
    endDate: "July 2023",
    description: ["Developed automaCon, web scraping using BeauCful Soup and website crawling via Selenium","Applied architecture for streamlined code organizaCon.","Improved performance by opCmising code and leveraging automation.","Analyzed the requirements, designed efficient algorithms that reduce code execution t ime"],
  },{},{},
  {
    title: "Front-End Developer",
    company: "Artified",
    location: "Gwalior, India",
    startDate: "July 2023",
    endDate: "September 2023",
    description: ["Collaborated closely with UI/UX designers to enhance the website’s user interface","Implemented jQuery-based web app with Ajax, and deployed to producCon on AWS using ElasCc Beanstalk","Implemented HTML5, CSS3, Bootstrap layouts for responsive web pages within the Django framework"],
  },
  
  // Add more experience objects as needed
];


export const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };

  export const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };


function ServicesCard({ title, index, svg }) {
  return (
    <Tilt>
      <motion.div variants={fadeIn('right','spring', 0.5*index, 0.75)}
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="titlebox"
        >
          <div><h3>{title}</h3></div>
          <div><img src ={svg} alt="icon" className='stylesvg'/></div>
        </div>
      </motion.div>
    </Tilt>
  );
}
export default function About(){
  const controls = useAnimation();
  const [ref, inView] = useInView();

  // Callback to start animation when in view
  const handleInView = () => {
    if (inView) {
      controls.start("show");
    }
  };

  // Callback to reset animation when out of view
  const handleOutOfView = () => {
    controls.start("hidden");
  };

  useEffect(() => {
    handleInView(); // Trigger animation on initial load
  }, [controls, inView]);
  const imageVariants2 = {
    hidden: {
      opacity: 0,
      x: "-100%",
      filter: "blur(5px)"
    },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0)",
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  };

  // const imageVariants = {
  //   hidden: {
  //     opacity: 0,
  //     scale: 0,
  //   },
  //   show: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       duration: 0.8,
  //       delay: 0.3,
  //       ease: [0, 0.71, 0.2, 1.01],
  //     },
  //   },
  // };

  const reff = useRef(null)
  const isInView = useInView(reff,{once:true});
  const mainControls = useAnimation();
  const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
})

const observer2 = new IntersectionObserver((entries) =>{
  entries.forEach((entry) =>{
      console.log(entry)
      if(entry.isIntersecting){
          entry.target.classList.add('fadeleftout');
      }else{
          entry.target.classList.remove('fadeleftout');
      }
  })
})

const hiddenElements2 = document.querySelectorAll('.fadeleftin');
hiddenElements2.forEach((el) => observer2.observe(el));

const observer3 = new IntersectionObserver((entries) =>{
  entries.forEach((entry) =>{
      console.log(entry)
      if(entry.isIntersecting){
          entry.target.classList.add('faderightout');
      }else{
          entry.target.classList.remove('faderightout');
      }
  })
})

const hiddenElements3 = document.querySelectorAll('.faderightin');
hiddenElements3.forEach((el) => observer3.observe(el));


  useEffect(()=>{
    if(isInView){
      mainControls.start("visible");
      console.log(isInView);
    }
  },[isInView])

    return <>
    <div id='about' className='abountcontent'>
    <motion.div 
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={imageVariants2}
    onViewportEnter={handleInView} // Callback for entering viewport
    onViewportLeave={handleOutOfView} 
    className='aboutblock'>
        <div><h2 className='linearredcolor'>Overview</h2></div>
        <p>I'm a skilled software developer with experience in Python and JavaScript, and expertise in frameworks
like Django, React, Node.js, and ReactNative. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together
to bring your ideas to life!</p>
    </motion.div>
    <div className='allblockstitle'>
        <ServicesCard title={"Python Developer"} index={1} svg = {pysvg}/>
        <ServicesCard title={"Backend Developer"} index={2} svg ={reactsvg}/>
        <ServicesCard title={"Frontend Developer"} index={3} svg ={reactsvg}/>
    </div>
    </div>
    <div className='worksec'>
      <div>
        <p className='worksecpara fadeleftin'>WHAT I HAVE DONE SO FAR</p>
        <h3 className='fadeleftin'>Work Experience</h3>
      </div>
      <div className='line'></div>
      <p className="fordates faderightin">May 2023 - July 2023</p>
      <p className="fordates2 fadeleftin">July 2023 - Sept 2023</p>
      <div className='pylogo fadein'><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M314 36.38c-18.59-3.06-45.8-4.47-64.27-4.38a311.09 311.09 0 00-51.66 4.38c-45.74 8-54.07 24.7-54.07 55.54V128h112v16H107.62C66.06 144 32.33 193.67 32 255.12v.88a162.91 162.91 0 003.13 32c9.29 46.28 38.23 80 72.49 80H128v-54c0-31.3 20.84-59.95 55-66.1l9.87-1.23H314a56.05 56.05 0 0015.06-2A52.48 52.48 0 00368 193.68V91.92c0-28.92-24.68-50.73-54-55.54zM194.93 105.5a20.37 20.37 0 1120.3-20.3 20.29 20.29 0 01-20.3 20.3z"/><path d="M475.28 217c-10.7-42.61-38.41-73-70.9-73h-17.71v47.45c0 39.57-26 68.22-57.74 73.13a63.54 63.54 0 01-9.69.75H198.08a60 60 0 00-15.23 1.95C160.54 273.14 144 291.7 144 315.77v101.77c0 29 29.14 46 57.73 54.31 34.21 9.95 71.48 11.75 112.42 0 27.19-7.77 53.85-23.48 53.85-54.31V384H256v-16h148.38c29.44 0 54.95-24.93 67.45-61.31A156.83 156.83 0 00480 256a160.64 160.64 0 00-4.72-39zM316.51 404a20.37 20.37 0 11-20.3 20.3 20.29 20.29 0 0120.3-20.3z"/></svg></div>
      <div className='reactlogo fadein'><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M410.66 180.72q-7.67-2.62-15.45-4.88 1.29-5.25 2.38-10.56c11.7-56.9 4.05-102.74-22.06-117.83-25-14.48-66 .61-107.36 36.69q-6.1 5.34-11.95 11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25 14.51-32.43 57.6-21.9 111.53q1.58 8 3.55 15.93a320.85 320.85 0 00-17.77 5.6C48.46 198.9 16 226.73 16 255.59c0 29.82 34.84 59.72 87.77 77.85q6.44 2.19 13 4.07-2.13 8.49-3.77 17.17c-10 53-2.2 95.07 22.75 109.49 25.77 14.89 69-.41 111.14-37.31q5-4.38 10-9.25 6.32 6.11 13 11.86c40.8 35.18 81.09 49.39 106 34.93 25.75-14.94 34.12-60.14 23.25-115.13q-1.25-6.3-2.88-12.86 4.56-1.35 8.93-2.79c55-18.27 90.83-47.81 90.83-78-.02-29-33.52-57.01-85.36-74.9zm-129-81.08c35.43-30.91 68.55-43.11 83.65-34.39 16.07 9.29 22.32 46.75 12.22 95.88q-1 4.8-2.16 9.57a487.83 487.83 0 00-64.18-10.16 481.27 481.27 0 00-40.57-50.75q5.38-5.22 11.02-10.15zM157.73 280.25q6.51 12.6 13.61 24.89 7.23 12.54 15.07 24.71a435.28 435.28 0 01-44.24-7.13c4.24-13.72 9.46-27.97 15.56-42.47zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63 13.7-3.07 28.3-5.58 43.52-7.48q-7.65 11.94-14.72 24.23t-13.58 24.88zm10.9 24.17q9.48-19.77 20.42-38.78 10.93-19 23.27-37.13c14.28-1.08 28.92-1.65 43.71-1.65s29.52.57 43.79 1.66q12.21 18.09 23.13 37t20.69 38.6Q334 275.63 323 294.73q-10.91 19-23 37.24c-14.25 1-29 1.55-44 1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29t-20.48-38.76zM340.75 305q7.25-12.58 13.92-25.49a440.41 440.41 0 0116.12 42.32 434.44 434.44 0 01-44.79 7.65q7.62-12.09 14.75-24.48zm13.72-73.07q-6.64-12.65-13.81-25-7-12.18-14.59-24.06c15.31 1.94 30 4.52 43.77 7.67a439.89 439.89 0 01-15.37 41.39zm-98.24-107.45a439.75 439.75 0 0128.25 34.18q-28.35-1.35-56.74 0c9.33-12.34 18.88-23.79 28.49-34.18zM145.66 65.86c16.06-9.32 51.57 4 89 37.27 2.39 2.13 4.8 4.36 7.2 6.67A491.37 491.37 0 00201 160.51a499.12 499.12 0 00-64.06 10q-1.83-7.36-3.3-14.82c-9.05-46.23-3.06-81.08 12.02-89.83zm-23.41 251.85q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81-11.88-10.19-17.9-20.36-17.9-28.6 0-17.51 26.06-39.85 69.52-55q8.19-2.85 16.52-5.21a493.54 493.54 0 0023.4 60.75 502.46 502.46 0 00-23.69 61.58zm111.13 93.67c-18.63 16.32-37.29 27.89-53.74 33.72-14.78 5.23-26.55 5.38-33.66 1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8 3.5-16a480.85 480.85 0 0064.69 9.39 501.2 501.2 0 0041.2 51c-2.98 2.93-6.03 5.75-9.14 8.48zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54 28.08.54c9.78 0 19.46-.21 29-.64a439.33 439.33 0 01-28.2 34.74zm124.52 28.59c-2.86 15.44-8.61 25.74-15.72 29.86-15.13 8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54 484.54 0 0040.23-51.2 477.84 477.84 0 0065-10.05q1.47 5.94 2.6 11.64c4.81 24.3 5.5 46.28 2.32 63.47zm17.4-102.64c-2.62.87-5.32 1.71-8.06 2.53a483.26 483.26 0 00-24.31-60.94 481.52 481.52 0 0023.36-60.06c4.91 1.43 9.68 2.93 14.27 4.52 44.42 15.32 71.52 38 71.52 55.43 0 18.6-29.27 42.74-76.78 58.52z"/><path d="M256 298.55a43 43 0 10-42.86-43 42.91 42.91 0 0042.86 43z"/></svg></div>
      <div className='workcontainer'>
        {experiences.map((experience, index)=>(
          <ExpirenceCard key={index} index={index} experience={experience} />
        ))}
      </div>
    </div>
    
    <div className='herosec'>
    <video
      disableremoteplayback="true"
      src="https://res.cloudinary.com/mkpill/video/upload/v1691655828/makepill_showreel_opti_a5c666148b.mp4"
      autoplay=""
      playsinline=""
      muted="muted"
      loop
      data-v-970f869d=""
      style={{
        transform: 'none',
        translate: 'none', // Note: 'translate' is not a valid CSS property
        rotate: 'none',    // Note: 'rotate' is not a valid CSS property
        scale: 'none',     // Note: 'scale' is not a valid CSS property
        transformOrigin: '0px 0px', // You can use 'transformOrigin' for translate
      }}
    ></video>
    <div className='overname'>
      <h3>To Do List</h3>
      <p>FIFA Menia</p>
      <p>Linkedin Dashboard</p>
      <p>Movies Pick Ranking</p>
    </div>
    </div>
    {/* <div className='num'>
    <video autoplay="" playsinline="" muted="" loop="" disableremoteplayback="true" data-v-a684665e=""><source src="https://res.cloudinary.com/mkpill/video/upload/v1691860071/mp_intro_robot_v2_32611febe2.mp4" type="video/mp4" data-v-a684665e=""></source></video>
    </div> */}
    </>
}