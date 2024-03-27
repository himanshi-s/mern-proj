import React,{useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuthContext } from '../auth-context';


const Navbar = () => {
  const {isLoggedIn} = useAuthContext()
  
  return (<div className='container'>
    <NavLink to={'/'}className="brand-logo">TechBlog</NavLink>
    <div className="links">
    <NavLink to={'/home'}>Home</NavLink>
    <NavLink to={'/about'}>About</NavLink>
    <NavLink to={'/service'}>Services</NavLink>
    <NavLink to={'/contact'}>Contact</NavLink>
    {
      isLoggedIn ? <NavLink to={'/logout'}>Log Out</NavLink> : 
    <>
    <NavLink to={'/register'}>Register</NavLink>
    <NavLink to={'/login'}>Login</NavLink>
    </>
    }
    </div>
  </div>
  )
}

export default Navbar;