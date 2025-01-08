import React from 'react'
import '../css/Header.css'
import logoImg from '../assets/images/Suki.png';
export default function Header() {
  return (
    <header id='header'>
        <div className='container'>
            <img src={logoImg} className='header-logo' />
            <ul className='header-menu'>
                <li className='nav-item active'><a href='/'>Home</a></li>
                <li className='nav-item'><a href='/education'>Education</a></li>
                <li className='nav-item'><a href='practice'>Practice</a></li>
                <li className='nav-item'><a href='/about'>About Suki</a></li>
            </ul>
            <a className='header-login' href='/login'>Login</a>
        </div>      
    </header>
  )
}
