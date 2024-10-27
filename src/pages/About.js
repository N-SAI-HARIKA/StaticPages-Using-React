import React from 'react';
import '../App.css'
const About = () => {
  return (
    <div className='AboutUs'>
    <center><h1>About Us</h1></center>
    <img 
      className='Aboutimg' 
      src="../public/Innomatics-Home-page-baner-1.webp" 
      alt='img' 
      srcSet="
        http://innomatics.in/wp-content/uploads/2023/01/AWARD-PAGE.jpg 780w,
        ../public/Innomatics-Home-page-baner-1.webp" 
      sizes="(max-width: 1024px) 100vw, 1024px"
    />
    <p className='Para'>Innomatics Research Labs is a pioneer in “Transforming Career and Lives” of individuals in the Digital Space by catering advanced training on NASSCOM FutureSkills Prime Certified Data Science, Machine Learning, Artificial Intelligence (AI), Full Stack Development, Amazon Web Services (AWS), DevOps, Microsoft Azure, Big data Analytics, and Digital Marketing. We are passionate about bridging the gap between learning and real-time implementation, so empowering individuals to be industry-ready and help firms in reaping huge benefits is our primary goal.</p>
    <hr/>
    <div className='learn'>
    <h2>“Learn, Explore & Experience”</h2>
    <p>We work greatly on this motto; so we let a trainee work hands-on, explore challenges, and experience real-time business cases. We have been awarded as the Best Training Institute in Hyderabad by Times Of India for our relentless hard work, practical training approach, and making individuals skillful. As an authorized “Training Partner with NASSCOM FutureSkills Prime,” we strive to make individuals learn not just algorithms, but also business case studies and challenges. Hackathons, workshops, and meetups are conducted on a timely basis to improve effectiveness and productivity. Having a dedicated placement verticle which helps trainees conquer the business world, solve the complexities. Innomatics is supporting over 100 companies in finding the best candidate, which can upskill the business requirements and foster growth.</p>
    <h2>Vision</h2>
    <p>Our vision is to invade and make India a Hub for Artificial intelligence and analytics. Apart from being the most credible education institute for career transformation, we aim to become the best training institute with experts from different domains like Banking, Insurance, Retail, Health Care, and Manufacturing. Communicating with the industry experts and explaining the value data science brings to the Organization for better decision making; demonstrate how methodologies can be applied and optimize opportunities, innovate new and better tools.</p>
    <h2>Mission</h2>
    <p>We are established on a mission that encapsulates individuals in excelling through real-time approaches and the great promise to business in finding the best prospects who can set a benchmark to improve the quality of the businesses. With more than 40 affiliated trainers hailing from top-notch companies.</p>
    <p>We provide the best learning experience in current trending technologies through facilitators who are continuous learners with the highest potential and empower others to do the same. Our practical approach encapsulates individuals in excelling through real-time strategies and the great promise to businesses in finding the best prospects who can set a benchmark to improve the quality of the businesses. The mission involves</p>
    <ol>
    <li>Developing the state-of-the-art benchmark in data science,</li>
    <li>Transforming all fields, professions, and sectors through the application of data science.</li>
    </ol>
    </div>
    <center><h3 style={{ fontFamily:'cursive' }}>Watch Our Video</h3>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/OKUFrW40xyI"
        title="YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe></center>
    <footer>&copy; 2024, All Rights Reserved.</footer>
  
  </div>
  

  );
}

export default About;
