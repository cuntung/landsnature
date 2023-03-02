import React,{ useEffect, useState } from 'react';
// import React from 'react-router-dom';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './navbar.css';
import Logo from '../../assets/images/slack.svg';
import CloseButton from '../../assets/images/x.svg';
import Menu from '../../assets/images/menu.svg';

const Navbar = () => {

  const [active, setActive] = useState(false);
  const Location = useLocation(false);
  
  
  const [isLogin, setIsLogin] = useState(false)
  const Navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token){
      setIsLogin(false)
    } else {
      setIsLogin(true)
    }
  })

  const handleLogOut = () => {
    localStorage.removeItem('token');
    Navigate('/');
  }
  

  const RegisterToLogin = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
      const token = localStorage.getItem('token')

      if(!token) {
        setIsLogin(false);
        setLoading(false)
      } else {
        setIsLogin(true)
        setLoading(false)
      }
    }, [isLogin]);

    if(loading) {
      return 'Loading'
    }
  //   return isLogin ?
  // <li>
  //   <Link className='btn btn-success' to={'/login'}>Register</Link>
  // </li> :  
  //          <li>
  //             <Link className='btn btn-success' to={'/'}>Log Out</Link>
  //           </li>
  }
  



  const openSidebar = () => {
    setActive(true);
  }
  const closeSidebar = () => {
    setActive(false);
  }
  return (
    <header className="header">
   <div className="container">
      <div className="row">
        <div className="logo">
          <a href={'/'} >
            <img src={Logo} alt="logo saya" />
          </a>
        </div>
        <div className={`overlay-bg ${active ? 'menu-active' : ''}`} />
        <div className={`sidebar ${active ? 'menu-active' : ''}`}>
          <div className="top-sidebar">
            <h2>Landsnature</h2>
            <div className="close-icon">
              <img src={CloseButton} alt="" onClick={closeSidebar}/>
            </div>
          </div>
          <ul className="menu">
            <li>
              <a href="#our-services">Our Services</a>
            </li>
            <li>
              <a href="#why">Why Us</a>
            </li>
            <li>
              <a href="#testimonial">Testimonial</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="burger-icon" onClick={openSidebar}>
          <img src={Menu} alt="" />
        </div>
      </div>
    </div>
  </header>
)
}


export default Navbar