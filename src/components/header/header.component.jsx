import React from 'react';
import {Link} from 'react-router-dom';
import './header.style.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
//functional component



const Header = () =>(
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop' >SHOP</Link>
            <Link className='option' to='/contact' >CONTACT</Link>
            <Link className='option' to='/signin' >Sign in</Link>
            
        </div>
    </div>

)
export default Header;