import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import { authenticatedApiClient } from '../../Services/AuthHttp';

const AddReview = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [user] = useAuthState(auth)

    const [value, setValue] = useState(5);

    const onSubmit = (data) => {

        const review = {
            name: data.name,
            email: data.email,
            rating: value,
            review: data.review
        }

        authenticatedApiClient.post("/review", { review })
            .then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Review Has been placed',
                        text: `Your Review Has been placed. Thank you`,
                    })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Something Went Wrong',
                        text: `Something Went Wrong. Try again`,
                    })
                }
            })





    }
    return (
        <div className='container mx-w-[1700px] mx-auto'>

            <div className="title mb-8">
                <p className="title-text text-3xl font-extrabold">Add a review</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="nameInput mb-5">
                    <input type="text" name='name' placeholder='Your name' className={` input input-bordered w-full  ${errors?.name && "border-2 border-red-600"}`}

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
                    <input readOnly type="text" name='email' value={user?.email} className={` input input-bordered w-full  ${errors?.email && "border-2 border-red-600"}`}

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

                <Rating
                    className='pb-5'
                    readonly={false}
                    emptySymbol={<AiOutlineStar className='text-yellow-400 text-5xl' />}
                    placeholderSymbol={<AiFillStar className='text-yellow-400 text-5xl' />}
                    fullSymbol={<AiFillStar className='text-yellow-400 text-5xl' />}
                    onChange={(event) => {
                        setValue(event);
                    }}
                />

                <div className="reviewInput mb-5">
                    <textarea type="text" name='review' placeholder='Your Review' className={` input input-bordered w-full  ${errors?.review && "border-2 border-red-600"}`}

                        {...register("review",
                            {
                                required: {
                                    value: true,
                                    message: "Review Required"
                                }
                            },
                        )} />


                    {errors.review?.type === 'required' && <span className="ml-2 font-bold label-text-alt text-red-500">{errors.review.message}</span>}


                </div>

                <button type='submit' htmlFor="my-modal-4" className="btn text-white tracking-widest border-0 
                           bg-gradient-to-r from-cyan-500 to-blue-500  w-full
                           hover:from-blue-500 hover:to-cyan-500">Submit</button>



            </form>
        </div>
    );
};

export default AddReview;