import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import Loading from '../../Shared/Loading';

const ManageOrders = () => {

    const { isLoading, data: orders, refetch, isFetching } = useQuery(['allOrders'],
        async () => {
            return axios.get(`/orders`).then(data => data.data)
        }
    )

    if (isLoading || isFetching) {
        return <Loading />
    }


    const handleDelivery = (id) => {

        axios.put(`/delivered/${id}`)
            .then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Product Shipped',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                }
            })


        refetch()
    }



    return (
        <div className='container mx-auto max-w-[1700px] px-10 '>
            <div className="title mb-8">
                <p className="title-text text-3xl font-extrabold">Manage Orders</p>
            </div>
            <div class="overflow-x-auto ">
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
                                                        data.paymentStatus === "pending" && data.paymentStatus !== "shipped" ?
                                                            <button class="btn btn-warning" onClick={() => handleDelivery(data._id)}>Delivered</button>

                                                            :
                                                            <button class="btn btn-warning" disabled onClick={() => handleDelivery(data._id)}>Delivered</button>
                                                    }

                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                                :
                                <tr>

                                    <td className='text-center' colSpan={11}>No  Orders</td>

                                </tr>

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;