import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Navbar.css'; 

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <nav>
        <div>
          <img 
            src="https://tse1.mm.bing.net/th?id=OIP.Bo1CraYhgZL9bd9OjpLxpgAAAA&pid=Api&P=0&h=180" 
            alt='logo' 
            width={'50px'} 
            height={'50px'}
          />
        </div>
        <div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About" onClick={toggleDropdown}>About Us</NavLink>
              <div className={`dropdown ${dropdownOpen ? 'open' : ''}`}>
                <ul>
                  <li>
                    <NavLink to="/About/Contact" onClick={() => setDropdownOpen(false)}>Contact Us</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/Courses">Courses</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
