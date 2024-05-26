/* 
 * File name: project.css
 * Student's Name: Aniket Monani
 * StudentID: 301422485
 * Date: 2024-05-26
 */
import project1 from '../src/assets/project1.png';
import project2 from '../src/assets/project2.jpg';
import project3 from '../src/assets/project3.png';
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
                        <img src={project2} alt="project1" className="worksImg" />
                        <div className="projectDesc">
                            <h3>Manual Website Hosting</h3>
                            <p className='para1'>In my project, I manually hosted a website using Vagrant for a multi-host setup. 
                            I configured Apache2 as the web server and deployed RabbitMQ for messaging, Memcached for caching, and MySQL for the database. 
                            This setup ensures efficient handling of web requests, message queuing, caching, and data storage, providing a robust and scalable hosting environment.</p>
                        </div>
                    </div>
                    <div className="project">
                        <img src={project1} alt="project2" className="worksImg" />
                        <div className="projectDesc">
                            <h3>Automatic Website Hosting on AWS</h3>
                            <p className='para1'>In my project, I utilized the AWS platform to host a website using an EC2 instance with Apache Tomcat. 
                                I leveraged an S3 bucket for common storage needs and integrated Route 53 for domain name management. 
                                Additionally, I deployed multiple EC2 instances to host various services, including Memcached for caching, RabbitMQ for messaging, and MySQL for the database server. 
                                This architecture ensures a scalable, reliable, and efficient web hosting environment.
                            </p>
                        </div>
                    </div>
                    <div className="project">
                        <img src={project3} alt="project3" className="worksImg" />
                        <div className="projectDesc">
                            <h3>Hybrid Cloud Architecture</h3>
                            <p className='para1'>In my project, I designed a hybrid-cloud architecture to transition network file shares from an on-premises setup to AWS. 
                            This architecture integrates on-premises storage with AWS services to create a seamless and scalable solution. 
                            Using AWS Storage Gateway, I bridged the on-premises storage with Amazon S3, allowing for secure and efficient file sharing. 
                            Additionally, EC2 instances were used to manage compute resources, while Route 53 facilitated DNS management.</p>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    );
}
