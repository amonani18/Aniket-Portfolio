/* 
 * File name: project.css
 * Student's Name: Aniket Monani
 * StudentID: 301422485
 * Date: 2024-05-26
 */
import project1 from '../src/assets/project1.png';
// import project2 from '../src/assets/project2.jpg';
// import project3 from '../src/assets/project3.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css';
import '../src/project.css';

export default function Project() {
    return (
        <>
            <section id="works">
                <h2 className="worksTitle">Recent Projects</h2>
                {/* <span className="worksDesc">I take pride in paying attention to the smallest details and making sure my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span> */}
                <div className="worksContainer">
                    <div className="project">
                        <img src={project1} alt="project1" className="worksImg" />
                        <div className="projectDesc">
                            <h3>Website Hosted on AWS</h3>
                            <p className='para1'>In my project, I utilized the AWS platform to host a website using an EC2 instance with Apache Tomcat. 
                                I leveraged an S3 bucket for common storage needs and integrated Route 53 for domain name management. 
                                Additionally, I deployed multiple EC2 instances to host various services, including Memcached for caching, RabbitMQ for messaging, and MySQL for the database server. 
                                This architecture ensures a scalable, reliable, and efficient web hosting environment.
                            </p>
                        </div>
                    </div>
                    <div className="project">
                        <img src={project1} alt="project2" className="worksImg" />
                        <div className="projectDesc">
                            <h3>Project Two</h3>
                            <p className='para1'>Description of project two goes here. Highlight key features and the technologies used.</p>
                        </div>
                    </div>
                    <div className="project">
                        <img src={project1} alt="project3" className="worksImg" />
                        <div className="projectDesc">
                            <h3>Project Three</h3>
                            <p className='para1'>Description of project three goes here. Highlight key features and the technologies used.</p>
                        </div>
                    </div>
                </div>
                <Link to="/projects"><button className="workBtn">See More</button></Link>
            </section>
        </>
    );
}
