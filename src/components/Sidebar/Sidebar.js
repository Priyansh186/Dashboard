import React, { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

import {
  FaBars,
} from "react-icons/fa";


const Sidebar = () => {


  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen)

  return (
    <main className={isOpen ? 'space-toggle' : null}>

      <aside className={`sidebar ${isOpen ? 'show' : null}`}>

      <div className="closemenu">
              <div style={{ marginLeft: isOpen ? "50px" : "0px" }}
                className="bars">
                <FaBars onClick={toggle} />
              </div>
      </div>

        <nav className='nav'>
          <div>
            <Link to='/' className='nav-logo'>
              <i className={`fas fa-home-alt nav-logo-icon`}></i>
              <span className='nav-logo-name'>Homepage</span>
            </Link>

            <div className='nav-list'>
              <Link to='/dashboard' className='nav-link active'>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>Dashboard</span>
              </Link>
              <Link to='/hotel' className='nav-link'>
                <i className='fas fa-hotel nav-link-icon'></i>
                <span className='nav-link-name'>Hotel</span>
              </Link>
              <Link to='/gallery' className='nav-link'>
                <i className='fas fa-image nav-link-icon'></i>
                <span className='nav-link-name'>Gallery</span>
              </Link>
              <Link to='/gallery' className='nav-link'>
                <i className='fas fa-dollar-sign nav-link-icon'></i>
                <span className='nav-link-name'>Transaction</span>
              </Link>
            </div>
          </div>

          <Link to='/logout' className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Logout</span>
          </Link>
        </nav>
      </aside>
    </main>
  );
};

export default Sidebar;
