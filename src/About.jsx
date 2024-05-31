/* 
 * File name: project.css
 * Student's Name: Aniket Monani
 * StudentID: 301422485
 * Date: 2024-05-26
 */
import BBG from '../src/assets/BBG.jpg';
import ux from '../src/assets/ux.png';
import web from '../src/assets/web.png';
import app from '../src/assets/app.png';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/about.css'
import '../components/layout.css'
export default function About() {
     return <>
     <section id="skill">
         
        
         <span className="skillDesc">Hello! I'm Aniket Monani an international student from India, currently studying Software Engineering and Technology at Centennial College in Canada. 
         I'm passionate about Cloud Engineering and DevOps Engineering, and I'm actively learning technologies like C#, Java, Python, and web development. 
         With a focus on tools like Jenkins, Terraform, and GitHub Actions, I'm dedicated to building efficient, scalable solutions. Welcome to my journey in the tech world!</span> 
         
         <div className="skillBar">
              <img src={ux} alt="UIDesign" className="skillBarImg" />
              <div className="skillBarText">
              <h2 className='dd'>Cloud Architecture Designer</h2>
              <span>As a Cloud Architecture Designer, I design and implement scalable, secure, and efficient cloud solutions. 
               I create architectures that optimize performance and cost while ensuring reliability and security. My work enables businesses to leverage cloud technologies effectively for improved operational efficiency and innovation.</span>
              </div>
         </div>
         
         <div className="skillBar">
              <img src={web} alt="WebDesign" className="skillBarImg" />
              <div className="skillBarText">
              <h2 className='dd'>CI/CD Pipeline Designer</h2>
              <span>As a CI/CD pipeline designer, I automate and streamline the integration, testing, and deployment of code changes. 
               By creating efficient workflows, I ensure continuous delivery and improve the reliability of software development, enabling teams to release updates faster and with higher quality.</span>
              </div>
         </div>       
         
               <li className='hire'><Link to="/about">Hire Me</Link></li>
          
    </section>
     
     
     </>
    }
// Compare this snippet from client/src/Education.jsx: