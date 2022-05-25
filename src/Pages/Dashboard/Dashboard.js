import React from 'react';
import { signOut } from 'firebase/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {

    return (
        <div className='container max-w-[1700px] mx-auto'>

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet />
                </div>
                <div className="drawer-side ">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80  text-white bg-slate-900 ">
                        <li className='hover:bg-blue-400 hover:text-white'><Link to={'/dashboard'}>My Orders</Link></li>
                        <li className='hover:bg-blue-400 hover:text-white'><Link to={'/dashboard/addreview'}>Add A Review </Link></li>
                        <li className='hover:bg-blue-400 hover:text-white'><Link to={'/dashboard/myprofile'}>My Profile</Link></li>
                        <li className='hover:bg-blue-400 hover:text-white'><Link onClick={() => signOut(auth)} to={' '}>Logout</Link></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;