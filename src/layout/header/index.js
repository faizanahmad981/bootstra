import React, { useState, useEffect, useRef } from 'react';
import '../header/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import shopp from '../../assets/icons/fi-rr-shopping-bag.png';
import search from '../../assets/icons/icon _search.png';
import contact from '../../assets/icons/fi-rr-phone-call.png';

const Header = () => {
 
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  

  const dropdownRef = useRef(null);

 
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    setServicesOpen(false);
  };


  const handleServicesClick = () => {
    setServicesOpen(!servicesOpen);
    setMenuOpen(false); 
  };

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
        
    <div className="container-fluid">
        <a className="navbar-brand" href="#"><span>F</span>OODI</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Menu
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownServicesLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownServicesLink">
                        <li><a className="dropdown-item" href="#">Service 1</a></li>
                        <li><a className="dropdown-item" href="#">Service 2</a></li>
                        <li><a className="dropdown-item" href="#">Service 3</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Offers</a>
                </li>
            </ul>
          
      <div className="d-flex align-items-center gapicon">
        <div className="position-relative d-inline-block">
          <img src={shopp} alt="shop" />
          <span className="badges position-absolute top-0 start-100 translate-middle badge-success rounded-circle" 
          style={{ width: '20px', height: '20px', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           8
          </span>
      </div>
          <img src={search} className="search-icon" alt="search" />
          <button className="btn btn-contact">
          <img src={contact} alt="contact" className="imagewidth" /> Contact
          </button>
        </div>
        </div>
    </div>
</nav>
  );
};

export default Header;
