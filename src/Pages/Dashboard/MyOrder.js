import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import { authenticatedApiClient } from '../../Services/AuthHttp';
import Loading from '../Shared/Loading';

const MyOrder = () => {

    const [user] = useAuthState(auth)

    const { isLoading, data: orders, refetch, isFetching } = useQuery(['orders'],
        async () => {
            return authenticatedApiClient.get(`/order?email=${user.email}`).then(data => data.data)
        }
    )

    if (isLoading || isFetching) {
        return <Loading />
    }


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Do you want to Cancel the Order?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Cancel',
            denyButtonText: `Don't Cancel`,
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`/order/${id}`)
                    .then(res => res.data)
                refetch()

                Swal.fire('Saved!', '', 'success')

            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }






    return (
        <div className='container max-w-[1700px] mx-auto'>
            <div className="title mb-8">
                <p className="title-text text-3xl font-extrabold px-10">My Orders</p>
            </div>
            <div class="overflow-x-auto px-10">
                <table class="table table-compact w-full ">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Product Qty</th>
                            <th>Product Price</th>
                            <th>Total Price</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Payment Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.Data.length ?
                                orders?.Data.map((data, index) => {
                                    return (
                                        <>
                                            <tr className='text-center'>
                                                <th>{index + 1}</th>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                <td>{data.productName}</td>
                                                <td>{data.quantity}</td>
                                                <td>{data.totalPrice / data.quantity}</td>
                                                <td>{data.totalPrice}</td>
                                                <td>{data.phone}</td>
                                                <td>{data.address}</td>
                                                <td className={data.paymentStatus === "unpaid" ? `badge badge-error` : `badge badge-success `}  >
                                                    {data.paymentStatus}</td>

                                                <td>
                                                    {
                                                        data.paymentStatus === "unpaid" ?
                                                            <button class="btn btn-error" onClick={() => handleDelete(data._id)}>Cancel</button>

                                                            :
                                                            <button class="btn btn-error" disabled onClick={() => handleDelete(data._id)}>Cancel</button>
                                                    }

                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                                :
                                <tr>

                                    <td className='text-center' colSpan={11}>You Have no current Orders</td>

                                </tr>

                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyOrder;