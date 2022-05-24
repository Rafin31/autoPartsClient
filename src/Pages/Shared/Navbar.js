import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import Button from './Button';

const Navbar = () => {
    const navigate = useNavigate();

    const redirectToLogin = () => {
        navigate('/login')
    }


    return (
        <div className='container max-w-[1700px] mx-auto '>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost laptop:hidden desktop:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="#category"> Categories</Link></li>
                            <li><Link to="#deals"> Hot Deals</Link></li>
                            <li><Link to="#review"> Review</Link></li>
                            <li><Link to="#contact"> Contact Us</Link></li>
                        </ul>
                    </div>
                    <Link to="#" className="normal-case text-xl cursor-pointer">
                        <img src="https://demo74leotheme.b-cdn.net/prestashop/at_autozpro_demo/img/logo-1647663381.jpg" alt="" srcSet="" />
                    </Link>
                </div>
                <div className="navbar-center hidden laptop:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="#category"> Categories</Link></li>
                        <li><Link to="#deals"> Hot Deals</Link></li>
                        <li><Link to="#review"> Review</Link></li>
                        <li><Link to="#contact"> Contact Us</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <Link to={'#'}></Link> */}
                    <Button width="w-44" onclick={redirectToLogin} > <FaSignInAlt className='mr-2' /> Sign in</Button>
                </div>
            </div>

        </div>
    );
};

export default Navbar;