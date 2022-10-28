import React, { useState } from 'react';
import avatar from '../../Assets/icons/user-avatar.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Button from './Button';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';

const Navbar = () => {
    const location = useLocation();



    const navigate = useNavigate();

    const [open, setOpen] = useState(false)

    const handleMenuOpen = () => {
        setOpen(!open)

        if (open) {
            if (document.activeElement instanceof HTMLElement) {
                document.activeElement.blur()
            }
            setOpen(!open)
        }



    }

    const [user, loading] = useAuthState(auth)


    const redirectToLogin = () => {
        navigate('/login')
    }


    const handleLogout = () => {
        localStorage.removeItem('accessToken')
        signOut(auth)
    }


    return (
        <div className='container max-w-[1700px] mx-auto '>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label onClick={() => handleMenuOpen()} onBlur={() => handleMenuOpen()} tabIndex="0" className="btn btn-ghost laptop:hidden desktop:hidden">
                            {
                                !open ? <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </>
                                    :
                                    <ImCross />
                            }
                        </label>
                        <ul tabIndex="0" className="menu menu-vertical dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            <li onClick={() => handleMenuOpen()}  >
                                <Link to="/">Home</Link>
                            </li>

                            <li onClick={() => handleMenuOpen()}  >
                                <a href="/#category">Categories</a>
                            </li>

                            <li onClick={() => handleMenuOpen()} >
                                <a href="/#deals">Hot Deals</a>
                            </li>

                            <li onClick={() => handleMenuOpen()} >
                                <a href="/#review">Review</a>
                            </li>
                            <li onClick={() => handleMenuOpen()}  >

                                <a href="/#contact">Contact Us</a>
                            </li>

                        </ul>
                    </div>
                    <a href="/" className="normal-case text-xl cursor-pointer">
                        <img src="https://demo74leotheme.b-cdn.net/prestashop/at_autozpro_demo/img/logo-1647663381.jpg" alt="" srcSet="" />
                    </a>
                </div>

                <div className="navbar-center hidden laptop:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><a href="/">Home</a></li>
                        <li><a href="/#category">Categories</a></li>
                        <li><a href="/#deals">Hot Deals</a></li>
                        <li><a href="/#review">Review</a></li>
                        <li><a href="/#contact">Contact Us</a></li>
                    </ul>
                </div>
                {
                    loading ?
                        <>
                            <svg role="status" className="max-h-6 max-w-6 animate-spin mx-auto text-gray-200 dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        </>
                        :
                        !user ?
                            <>
                                <div className="navbar-end ">
                                    <Button width="w-40" onclick={redirectToLogin} > <FaSignInAlt className='mr-2' /> Sign in</Button>
                                </div>
                            </>
                            :
                            <>
                                <div className="navbar-end max-w-full ">

                                    <div className="max-w-full">

                                        {
                                            location.pathname.includes('/dashboard') ?
                                                <>
                                                    <div className="dashboardSideNav laptop:hidden desktop:hidden mobile:flex">

                                                        <label tabIndex="1" htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                                        </label>

                                                    </div>
                                                </>
                                                :
                                                <>

                                                    <div className="userInfo flex justify-center items-center">
                                                        <div className="avatar">
                                                            <div className="w-[50%] block mx-auto rounded-full">
                                                                <img className="rounded-full" src={user.photoURL ? user.photoURL : avatar} alt="userImg" />
                                                            </div>
                                                        </div>


                                                        <div className="dropdown dropdown-end">
                                                            <label tabIndex="0" className="text ml-3 cursor-pointer">
                                                                <MdKeyboardArrowDown className='inline' />
                                                                {user.displayName ? user.displayName : user.email?.split("@")[0]} </label>
                                                            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                                                <li >
                                                                    <Link to={'/dashboard'}>Dashboard</Link>
                                                                </li>
                                                                <li onClick={handleLogout} >
                                                                    <Link to={'/'}>Logout</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </>
                                        }



                                    </div>
                                </div>

                            </>
                }
            </div>

        </div>
    );
};

export default Navbar;