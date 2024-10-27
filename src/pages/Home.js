import React from 'react';
import CardGrid from './CardGrid';
import Courses from './Courses';

const Home = () => {
  return (
    <div>
      <h1 style={{textAlign:'center',marginTop:'1.5rem',marginBottom:'1.3rem'}}>Welcome to Innomatics Research Labs</h1>
      <img 
      src="https://www.innomatics.in/wp-content/uploads/2022/06/Home-Page-Banner.jpg" 
      alt="img" 
      width={'100%'} 
      height={'400em'} className='banner'
      />
      <center><h1>We just don't train,
      We transform the careers</h1></center>
      <div className='content'>
      <span style={{fontWeight:'600'}}>Innomatics Research Labs</span> is a pioneer in <span style={{fontWeight: '600'}}>“Transforming Careers and Lives”</span> of individuals in the Digital Space by catering advanced training on <span style={{color: 'red', fontWeight: '600'}}>NASSCOM Future skills prime Certified Data Science</span>,<span style={{fontWeight: '600'}}>Python, Predictive Analytics Modeler, Machine Learning, Artificial Intelligence (AI), Full-stack web development, Amazon Web Services (AWS), DevOps, Microsoft Azure, Big data Analytics,</span> <span style={{color: 'red', fontWeight: '600'}}> Digital Marketing</span>,<span style={{fontWeight: '600'}}> and Career Launching program</span> for students who are willing to showcase their skills in the competitive job market with valuable credentials, and also can complete courses with a certificate.<br/>
      <span style={{color: 'red', fontWeight: '600'}}> NASSCOM Futureskills Prime Registered Business Partner</span>
      As an authorized “Training Partner with NASSCOM Futureskills Prime,” we strive to make individuals learn not just algorithms but also case studies and challenges derived from businesses. To improve the effectiveness and productivity of our trainee <span style={{fontStyle: 'italic', fontWeight: '600'}}> hackathons, workshops,</span> and <span style={{fontStyle: 'italic', fontWeight: '600'}}> meetups</span> are conducted on a timely basis. Having a dedicated <span style={{fontWeight: '600'}}> placement vertical,</span> which helps trainees conquer the business world, solves the complexities. Innomatics research labs are supporting <span style={{fontWeight: '600'}}> over 100 companies</span> in finding the best candidate, which can upskill the business requirements and foster growth.<br/>
      <span style={{color: 'red', fontWeight: '600'}}> Best Edtech company</span><br/>
      Recognized and rewarded by <span style={{fontWeight: '600'}}> Times Of India</span> as the Best Training Institute in Hyderabad for Data Science & Digital Marketing Training. With relentless hard work, sophisticated equipment, advanced classrooms, cutting-edge training methodologies, practical training approach, and making individuals skillful. We have trained and placed <span style={{fontWeight: '600'}}>10000</span> students with a track record of <span style={{fontWeight: '600'}}> 350+ </span> batches, <span style={{fontWeight: '600'}}>200+</span> Hackathons,<span style={{fontWeight: '600'}}>150+</span>Industry Experts,<span style={{fontWeight: '600'}}>500+</span> Webinars, and <span style={{fontWeight: '600'}}>500+</span> Hiring Partners.
      </div>
      <center><h1>What We are?</h1></center>
      <CardGrid/>
      <Courses/>
      
    </div>
  );
}

export default Home;
