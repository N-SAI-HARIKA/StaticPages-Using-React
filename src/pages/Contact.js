import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <div className="Contactheader">
      <center><h1>Contact Us</h1></center>
      <center>
        <h2 style={{ fontFamily: 'cursive', marginTop: '15px' }}>
          We are ready to help you. For immediate inquiry or joining, please call us..<br />
          Hyderabad: <span style={{ color: 'blue' }}>+91-9951666670</span>, 
          Pune: <span style={{ color: 'blue' }}>+91-9951666671</span>
        </h2>
      </center>
      <div className="Contactinfo">
        <div>
        <div className="ContactItem">
          <h3>
            <img src="https://cdn-icons-png.freepik.com/256/10577/10577666.png?ga=GA1.1.1414198285.1727840973" width={'20px'} alt='location-icon' /> 
            Kukatpally — Hyderabad
          </h3>
          <p>#205, 2nd Floor, Fortune Signature, Near JNTU Metro Station, Kukatpally, Hyderabad, Telangana 500085</p>
        </div>

        <div className="ContactItem">
          <h3>
            <img src="https://cdn-icons-png.freepik.com/256/10577/10577666.png?ga=GA1.1.1414198285.1727840973" width={'20px'} alt='location-icon' /> 
            Gachibowli — Hyderabad
          </h3>
          <p>2nd Floor, Leeway, BP Raju Marg, Opp. Sarath City Capital Mall, Beside Subbayagari Hotel, Laxmi Cyber City, Whitefields, Kondapur, Telangana 500081</p>
        </div>

        <div className="ContactItem">
          <h3>
            <img src="https://cdn-icons-png.freepik.com/256/10577/10577666.png?ga=GA1.1.1414198285.1727840973" width={'20px'} alt='location-icon' /> 
            Pune:
          </h3>
          <p>2nd Floor, Sai Sayaji Apartment, 201,(P, Paud Rd, beside VANAZ Metro, above Bata showroom, Ramkrishna Paramhans Nagar, Kothrud, Pune, Maharashtra 411038</p>
        </div>

        <div className="ContactItem">
          <h3>
            <img src="https://cdn-icons-png.freepik.com/256/5603/5603675.png?ga=GA1.1.1414198285.1727840973" width={'25px'} alt='phone-icon' /> 
            Phone/Whatsapp:
          </h3>
          <p>+91-9951666670 / +91-6304126766 / +91-9347804375</p>
        </div>

        <div className="ContactItem">
          <h3>
            <img src="https://cdn-icons-png.freepik.com/256/10263/10263938.png?ga=GA1.1.1414198285.1727840973" width={'25px'} alt='email-icon' /> 
            For Course details:
          </h3>
          <p>info@innomatics.in</p>
        </div>

        <div className="ContactItem">
          <h3>For Careers:</h3>
          <p>hr@innomatics.in</p>
        </div>
        </div>
        <div>
          <h2>Contact Form</h2>
          <form>
            <input type='text' id='name' placeholder='Full Name'/><br/><br/>
            <input type='number' id='number' placeholder='Contact Number'/><br/><br/>
            <input type='mail' id='mail' placeholder='Email'/><br/><br/>
            <select>
              <option>Select Course</option>
              <option>Full Stack Development</option>
              <option>Advance Data Science with python</option>
              <option>Digital Marketing</option>
            </select><br/><br/>
            <select>
              <option>Select Training Mode</option>
              <option>Online</option>
              <option>Offline</option>
            </select><br/><br/>
            <button>Register Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
