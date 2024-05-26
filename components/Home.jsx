/* 
 * File name: project.css
 * Student's Name: Aniket Monani
 * StudentID: 301422485
 * Date: 2024-05-26
 */
import React from 'react';
import BBG from '../src/assets/BBG.jpg';
import res from '../src/assets/resume.pdf';
import { Link } from 'react-router-dom';
import '../src/home.css';

export default function Home() {
  return (
    <section id="intro">
      <div className="introContent">
        
        <span className="introName">Aniket Monani</span>
        <img src={BBG} alt="profile" className="bbg" />
        <h2 className="jobTitle">DevOps Engineer</h2>
        <a href={res} target="_blank"><button className="workBtn">Resume</button></a>
      </div>
      <div className="introPara">
      <p className='para'>
          💻 I’m currently learning a lot about AWS, aiming to become a certified Solutions Architect. My mission is to turn
          digital ideas into real-life projects using cloud technology.
        </p>
      </div>
    
    </section>
    
  );
}
