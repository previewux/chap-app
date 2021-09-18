import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return <nav>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Ninth navbar example">
      <div className="container-xl">
        <Link to='' className='navbar-brand' >React</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarsExample07XL">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/' className='nav-link'>Home</Link>

            </li>
            <li className="nav-item">
              <Link to='/about' className='nav-link'>About</Link>

            </li>
            <li className="nav-item">
              <Link to='/people' className='nav-link'>people</Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>

  </nav>;
};

export default Navbar;
