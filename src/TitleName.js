import profile from "./profile.png";
import {useEffect} from "react";
import {useAnimation, motion} from "framer-motion";
import { useInView } from "react-intersection-observer";


const contentbox={  
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingRight:'10%',
    height: '100vh',
    letterSpacing:'1px',
    backgroundImage:'radial-gradient(circle closest-corner at 180%,#4353ff,rgba(255,255,255,0)),radial-gradient(circle closest-corner at 50% -70%,#7056f5,transparent),radial-gradient(circle closest-corner at 40% -60%,#7056f5,transparent),radial-gradient(circle farthest-side at 190% -130%,#7056f5,transparent)'
}

const overviewcontent ={
    display : 'grid',
    gridTemplateColumns: '1fr',
    width: '65%',
    paddingLeft: '5rem',
    letterSpacing: '1px',
    lineHeight: '2'
}

const imageprofile = {
    borderRadius: '10px',
    border:'10px polid #000',
    width:'20rem',
    height:'auto',
}
const paraname = {
    margin:'0',
    color:'rgb(255, 190, 190)'
}
const headline = {
    fontSize: '2.5rem',
    margin : '0'
}
const contentpara = {
    letterSpacing: '2.5px',
    fontSize: '1.2rem',
    color: 'rgb(230, 230, 230)'
}

export default function TittleName(){
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
  
    const imageVariants = {
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

    const observer2 = new IntersectionObserver((entries) =>{
        entries.forEach((entry) =>{
            console.log(entry)
            if(entry.isIntersecting){
                entry.target.classList.add('fadeout');
            }else{
                entry.target.classList.remove('fadeout');
            }
        })
    })
    
    const hiddenElements2 = document.querySelectorAll('.fadein');
    hiddenElements2.forEach((el) => observer2.observe(el));

    
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
    
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
    
    return (
        <div id="home" style={contentbox}>
            <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            onViewportEnter={handleInView} // Callback for entering viewport
            onViewportLeave={handleOutOfView}
            style={overviewcontent}>
                <div><p style={paraname}>Deepanshu Singh</p></div>
                <h2 style={headline}>Full Stack Developer</h2>
                <p style={contentpara}>I bring diverse skills in full-stack development and Python Automation. My dedication to pushing technological boundaries and helping businesses thrive is unwavering. Whether it's collaborating with industry leaders, my goal is to empower them with cutting-edge technology and captivating user interfaces.</p>
            </motion.div>
            <div>
                <img style={imageprofile} alt="profile" src={profile}></img>
            </div>
        </div>
    )
}
