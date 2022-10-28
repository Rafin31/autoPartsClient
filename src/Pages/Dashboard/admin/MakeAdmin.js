import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import { authenticatedApiClient } from '../../../Services/AuthHttp';
import Loading from '../../Shared/Loading';

const MakeAdmin = () => {

    const { isLoading, data: users, refetch, isFetching } = useQuery(['users'],
        async () => {
            return authenticatedApiClient.get(`/users`).then(data => data.data)
        }
    )

    if (isLoading || isFetching) {
        return <Loading />
    }

    const handleMakeAdmin = (id) => {


        Swal.fire({
            title: 'Do you want to make the user an admin?',
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `Cancel`,
        }).then((result) => {
            if (result.isConfirmed) {

                authenticatedApiClient.put(`/makeAdmin/${id}`)
                    .then(res => {
                        if (res.status === 200) {
                            refetch()
                        }
                    })


                refetch()

            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })

    }



    return (
        <div className='container mx-auto max-w-[1700px] px-10 ' >
            <div className="title mb-8">
                <p className="title-text text-3xl font-extrabold">Manage Admins</p>
            </div>

            <div class="overflow-x-auto ">
                <table class="table table-compact table-fixed w-full ">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th> Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th> Linkdin Profile</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.Data.length ?
                                users?.Data.map((data, index) => {
                                    return (
                                        <>
                                            <tr className='text-center h-auto'>
                                                <t>{index + 1}</t>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                <td className='badge badge-success mt-3'>{data.role}</td>
                                                <td>{data?.phoneNumber}</td>
                                                <td className='break-all'>{data?.address?.slice(0, 10) + "..."}</td>
                                                <td className=''>{data?.linkdinLink?.slice(0, 10) + "..."}</td>

                                                <td>
                                                    {
                                                        data.role !== "admin" &&
                                                        <button class="btn btn-warning" onClick={() => handleMakeAdmin(data._id)}>Make Admin</button>
                                                    }
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                                :
                                <tr>

                                    <td className='text-center' colSpan={11}>No  Products</td>

                                </tr>

                        }
                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default MakeAdmin;