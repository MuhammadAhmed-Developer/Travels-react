import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white  fixed-top">
  <div className="container">
    <Link to='/' className="navbar-brand"><span className='fw-bold fs-4'><i className="bi bi-globe-asia-australia me-1 text-primary"></i>Travels.</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link to='/' className="nav-link active me-4"  aria-current="page">Home</Link>
        </li>       
        <li className="nav-item">
          <Link to='/about' className="nav-link active me-4"  aria-current="page">About</Link>
        </li>       
        <li className="nav-item">
          <Link to='/services' className="nav-link active me-4"  aria-current="page">Services</Link>
        </li>       
        <li className="nav-item">
          <Link to='/contact' className="nav-link active me-4"  aria-current="page">Contact</Link>
        </li>       
        <li className="nav-item">
          <Link to='/contact' className="nav-link active btn btn-lg rounded-5 text-white" aria-current="page">Book Now</Link>
        </li>       
      </ul>
    </div>
  </div>
</nav>
  )
}
