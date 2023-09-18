import { useState } from 'react';
import './projectsec.css';
import internsahallaimg from "./in.png"
import Blogimg from "./blof.png"

export default function ProjectSection(){
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

    const [showLink, setShowLink] = useState(false);
    return (
        <><div id='project' className='headingcontainer'>
            <h2 className="headingproject hidden">Personal Projects</h2>
        </div>
        <div className="Projectsection">
            <div className="projectsec fadein" >
                <div className="Imageproject">
                    <img src="https://framerusercontent.com/images/LZwYpdZOeveRvsTyIWNrqYprlaE.png" alt='project1'></img>  
                </div>
                <div className="Contentproject">
                    <div className='namesec'>
                        <h3>Newsify</h3>
                        <button className={showLink && 'view'}>View More</button>
                    </div>
                    <div className='namesec'>
                        <p>Read and discover Latest News</p>
                        <a className={showLink && 'view'} href='www.google.com'>Try On Netlify</a>
                    </div>
                </div>
            </div>
            <div className='projectsec fadein'>
                <div className="Imageproject ne2">
                    <img src={Blogimg} alt='product'></img>
                </div>
                <div className="Contentproject ne">
                    <div className='namesec'>
                        <h3>Blog website</h3>
                        <button>View More</button>
                    </div>
                    <div className='namesec'>
                        <p>My Personal Blog website </p>
                        <a href='https://github.com/Deepanshuigtm/Blog_Application.git'>Github</a>
                    </div>
                </div>
            </div>
            <div className='projectsec fadein'>
                <div className="Imageproject ne2">
                    <img src={internsahallaimg} alt='product'></img>
                </div>
                <div className="Contentproject ne">
                    <div className='namesec'>
                        <h3>Intershalla Automation</h3>
                        <button>View More</button>
                    </div>
                    <div className='namesec'>
                        <p>Automate Your Job Hunt with Python Selenium!</p>
                        <a href='https://github.com/Deepanshuigtm/internshala_job.git'>View on github</a>
                    </div>
                </div>
            </div>
            <div className='projectsec fadein'>
                <p className='fadein'></p>
                <div className="Imageproject">
                    <img src='https://framerusercontent.com/images/r2XCuzfLe7ByG8ZkNwlgU8Uds.png' alt='product'></img>
                </div>
                <div className="Contentproject">
                    <div className='namesec'>
                        <h3>Music Kit</h3>
                        <button>View More</button>
                    </div>
                    <div className='namesec'>
                        <p>Listen to Music and more</p>
                        <a href='www.google.com'>Try On Netlify</a>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}