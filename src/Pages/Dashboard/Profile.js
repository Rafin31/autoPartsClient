import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Profile = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const [user] = useAuthState(auth)

    const { isLoading, data: userInfo, refetch, isFetching } = useQuery(['userInfo'],
        async () => {
            return axios.get(`/users/${user.email}`).then(data => data.data)
        }
    )

    if (isLoading || isFetching) {
        return <Loading />
    }

    const onSubmit = (data) => {


        axios.put(`/users/${user.email}`, { data })
            .then(res => console.log(res.data))

        refetch()
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Profile Info Updated',
            showConfirmButton: false,
            timer: 1500
        })
    }



    return (
        <div className='container max-w-[1700px] mx-auto px-10'>
            <div className="title mb-8">
                <p className="title-text text-3xl font-extrabold">My Profile</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="nameInput mb-5">
                    <input type="text" name='name' placeholder='Your name' defaultValue={userInfo.Data[0].name && userInfo.Data[0].name} className={` input input-bordered w-full  ${errors?.name && "border-2 border-red-600"}`}

                        {...register("name",
                            {
                                required: {
                                    value: true,
                                    message: "Name Required"
                                }
                            },
                        )} />


                    {errors.name?.type === 'required' && <span className="ml-2 font-bold label-text-alt text-red-500">{errors.name.message}</span>}


                </div>

                <div className="emailInput mb-5">
                    <input readOnly type="text" name='email' defaultValue={userInfo.Data[0].email} className={` input input-bordered w-full  ${errors?.email && "border-2 border-red-600"}`}

                        {...register("email",
                            {
                                required: {
                                    value: true,
                                    message: "Email Required"
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Invalid Email'
                                }
                            },
                        )} />


                    {errors.email?.type === 'required' && <span className="ml-2 font-bold label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="ml-2 font-bold label-text-alt text-red-500">{errors.email.message}</span>}

                </div>

                <div className="phoneInput mb-5">
                    <input type="number" defaultValue={userInfo.Data[0].phoneNumber} name='number' placeholder='Your Phone Number' className={` input input-bordered w-full  ${errors?.number && "border-2 border-red-600"}`}

                        {...register("number",
                            {
                                required: {
                                    value: true,
                                    message: "Phone Number Required"
                                }
                            },
                        )} />


                    {errors.number?.type === 'required' && <span className="ml-2 font-bold label-text-alt text-red-500">{errors.number.message}</span>}

                </div>

                <div className="addressInput mb-5">
                    <input type="text" defaultValue={userInfo.Data[0].address} name='number' placeholder='Your Address' className={` input input-bordered w-full  ${errors?.address && "border-2 border-red-600"}`}

                        {...register("address",
                            {
                                required: {
                                    value: true,
                                    message: "Address Required"
                                }
                            },
                        )} />


                    {errors.address?.type === 'required' && <span className="ml-2 font-bold label-text-alt text-red-500">{errors.address.message}</span>}

                </div>

                <div className="linkdinInput mb-5">
                    <input type="text" defaultValue={userInfo.Data[0].linkdinLink} name='number' placeholder='Your Linkdin Profile Link' className={` input input-bordered w-full  ${errors?.linkdin && "border-2 border-red-600"}`}

                        {...register("linkdin",
                            {
                                required: {
                                    value: true,
                                    message: "Linkdin Profile Link Required"
                                }
                            },
                        )} />


                    {errors.linkdin?.type === 'required' && <span className="ml-2 font-bold label-text-alt text-red-500">{errors.linkdin.message}</span>}

                </div>




                <button type='submit' htmlFor="my-modal-4" className="btn text-white tracking-widest border-0 
                           bg-gradient-to-r from-cyan-500 to-blue-500  w-full
                           hover:from-blue-500 hover:to-cyan-500">Update</button>



            </form>
        </div>
    );
};

export default Profile;