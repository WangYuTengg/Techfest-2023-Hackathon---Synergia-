import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className = 'header'>
            <Link to='/'><h1 className='logo'>Synergia</h1></Link>

            <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li>
                    <Link to='/UserSwipePage'>Home</Link>
                </li>
                <li>
                    <Link to='/UserProfilePage'>Profile</Link>
                </li>
                <li>
                    <Link to='/UserChatPage'>Chats</Link>
                </li>
                <li>
                    <Link to='/UserSwipePage'>Settings</Link>
                </li>
            </ul>

            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color:'#fff'}}/>): <FaBars size={20} style={{color:'#fff'}}/> }   
            </div>
        </div>
    )
}

export default Navbar