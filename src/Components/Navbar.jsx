import React, { useEffect, useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'
import Button from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    // Button
    const [button, setbutton] = useState(true)


    // Function that will display mobile
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setbutton(false)
        } else {
            setbutton(true)
        }
    }
    window.addEventListener('resize', showButton);

    useEffect(()=>{
        setbutton()
    },[])
    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        TRVL
                        <i className='fab fa-typo3'></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link
                                to='/'
                                className='nav-links'
                                onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to='/services'
                                className='nav-links'
                                onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to='/products'
                                className='nav-links'
                                onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to='/sign-up'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}>
                                Sign-Up
                            </Link>
                        </li>
                    </ul>
                    {
                        button && <Button buttonStyle='btn--outline'>SIGN UP</Button>
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar