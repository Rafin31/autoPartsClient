import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import Loading from '../../Shared/Loading';

const ManageProducts = () => {

    const { isLoading, data: allProducts, refetch, isFetching } = useQuery(['allProducts'],
        async () => {
            return axios.get(`/products`).then(data => data.data)
        }
    )

    if (isLoading || isFetching) {
        return <Loading />
    }

    const handleDelete = (id) => {


        Swal.fire({
            title: 'Do you want to Delete the product?',
            showDenyButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: `Cancel`,
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`/products/${id}`)
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
        <div className='container mx-auto max-w-[1700px] px-10 '>
            <div className="title mb-8">
                <p className="title-text text-3xl font-extrabold">Manage Orders</p>
            </div>
            <div class="overflow-x-auto ">
                <table class="table table-compact w-full ">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Description</th>
                            <th>Seller Name</th>
                            <th>Available</th>
                            <th>Minimum Order Qty</th>
                            <th> Price</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allProducts.Data.length ?
                                allProducts?.Data.map((data, index) => {
                                    return (
                                        <>
                                            <tr className='text-center'>
                                                <th>{index + 1}</th>
                                                <td>{data.name}</td>
                                                <td>{data.description.slice(0, 50) + "..."}</td>
                                                <td>{data.Saller_name}</td>
                                                <td>{data.available}</td>
                                                <td>{data.minimum_order_qty}</td>
                                                <td>{data.price}</td>
                                                <td> <img src={data.img} className=" mx-auto laptop:w-[30%] 
                                                mobile:w-[100%]" alt="Avatar Tailwind CSS Component" /></td>

                                                <td>
                                                    <button class="btn btn-warning" onClick={() => handleDelete(data._id)}>Delete</button>
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
        </div >
    );
};

export default ManageProducts;