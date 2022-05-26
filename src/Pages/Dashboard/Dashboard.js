import React from 'react';
import { signOut } from 'firebase/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../Shared/Loading';

const Dashboard = () => {


    const [user] = useAuthState(auth)

    const [admin, adminLoading] = useAdmin(user)

    if (adminLoading) {
        return <Loading />
    }


    return (
        <div className='container max-w-[1700px] mx-auto'>

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center pt-14 ">
                    <Outlet />
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80  text-white bg-slate-900 ">
                        {
                            !admin ?
                                <>
                                    <li className='hover:bg-blue-400 hover:text-white'><Link to={'/dashboard'}>My Orders</Link></li>
                                    <li className='hover:bg-blue-400 hover:text-white'><Link to={'/dashboard/addreview'}>Add A Review </Link></li>
                                </>
                                :
                                <>
                                    <li className='hover:bg-blue-400 hover:text-white'><Link to={'/dashboard/manageOrders'}>Manage Orders</Link></li>
                                    <li className='hover:bg-blue-400 hover:text-white'><Link to={'/dashboard/manageProduct'}>Manage Products </Link></li>
                                    <li className='hover:bg-blue-400 hover:text-white'><Link to={'/dashboard/makeAdmin'}>Make Admin </Link></li>
                                    <li className='hover:bg-blue-400 hover:text-white'><Link to={'/dashboard/addProduct'}>Add a product</Link></li>
                                </>
                        }
                        <li className='hover:bg-blue-400 hover:text-white'><Link to={'/dashboard/myprofile'}>My Profile</Link></li>
                        <li className='hover:bg-blue-400 hover:text-white'><Link onClick={() => signOut(auth)}
                            to={''}>Logout</Link></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;