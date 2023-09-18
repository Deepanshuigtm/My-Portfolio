
import logoo from "./logoo.png"
import './header.css';
import { color } from "framer-motion";

const logoo1 ={
    width:'7rem',
    height:'auto'
}
const headerContainer ={
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'center',
    padding: ' 0 2rem',
    background: 'transparent',
    position: 'fixed',
    width: '95%',
    backdropFilter: 'blur(2px)',
    zIndex:'99',
    fontSize:'1.1rem'
}
const logostyle={
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
}
const subheader= {
    display: 'flex',
    gap: '4rem',
    fontWeight: '600',
    letterSpacing:'1px',
    fontSize:'1.4rem',
}


export default function Headers(){

    const btncontact = {
        padding: '0.7rem 1.5rem',
        borderRadius: '32px',
        border: '2px solid #000',
        color: '#000',
        fontSize: '1.4rem',
        backgroundColor: '#fff',
        cursor:'pointer',
        transition: 'all 0.3s',
    }
    const hoverStyles ={
        transform: 'translateY(10%)',
    }
    const hoverColor ={
        backgroundColor:'rgb(202, 202, 255)',
    }

    function onHoverIn(event) {
        event.target.style.transform = hoverStyles.transform;
        event.target.style.backgroundColor = hoverColor.backgroundColor;
    }
    
    function onHoverOut(event) {
        event.target.style.transform = 'scale(1)'; // Reset to the original scale on hover out
        event.target.style.backgroundColor = btncontact.backgroundColor;
    }
    return(
        <div style={headerContainer}>
            <div style={logostyle}>
                <img style={logoo1} src={logoo} alt="logo"></img>
                <div>
                    <h2>Deepanshu's Portfolio</h2>
                </div>
            </div>
            <div className="subnav" style={subheader}>
                <a href="#home">Home</a>
                <a href="#project">My Projects</a>
                <a href="#about">About Me</a>
                <a href="#contact">Contact Me</a>
            </div>
            <div><button style={btncontact} onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}>Resume</button></div>
        </div>
    )
}