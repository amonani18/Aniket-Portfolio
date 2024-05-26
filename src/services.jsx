/* 
 * File name: project.css
 * Student's Name: Aniket Monani
 * StudentID: 301422485
 * Date: 2024-05-26
 */
import React from 'react';
import './services.css';

// Example images for services
import webDevelopment from '../src/assets/webDevelopment.png';
import mobileApps from '../src/assets/mobileApps.jpg';
import cloudEngineering from '../src/assets/cloudEngineering.jpg';

export default function Services() {
    return (
        <section id="services">
            <h2 className="servicesTitle"> My Services</h2>
            <div className="servicesContainer">
                <div className="service">
                    <img src={webDevelopment} alt="Web Development" className="serviceImg" />
                    <h3 className='pcolor'>Web Development</h3>
                    <span className='pcolor'>I offer full-stack web development services to build dynamic and responsive websites using the latest technologies.</span>
                </div>
                <div className="service">
                    <img src={mobileApps} alt="Mobile App Development" className="serviceImg" />
                    <h3 className='pcolor'>Mobile App Development</h3>
                    <span className='pcolor'>Creating user-friendly and functional mobile applications for both Android and iOS platforms.</span>
                </div>
                <div className="service">
                    <img src={cloudEngineering} alt="Cloud Engineering" className="serviceImg" />
                    <h3 className='pcolor'>Cloud Engineering</h3>
                    <span className='pcolor'>Providing cloud engineering solutions, including AWS, Azure, and Google Cloud services to optimize your business operations.</span>
                </div>
            </div>
        </section>
    );
}
