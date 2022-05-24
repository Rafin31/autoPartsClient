import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import googleIcon from '../../Assets/icons/google-logo.png'
import loadingSpinnerGif from '../../Assets/Loading/Dual Ring-1.4s-197px.gif'

import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import Swal from 'sweetalert2';



const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [
        signInWithGoogle,
        googleUser,
        googleLoading,
        googleError] = useSignInWithGoogle(auth);


    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password)
    };

    const handleGoogleSignUp = (event) => {
        signInWithGoogle()
    }


    if (error || googleError) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error || googleError,
        })
    }

    if (user || googleUser) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Signed up',
            showConfirmButton: false,
            timer: 1500
        })

        navigate('/')
    }

    return (
        <div className='container max-w-[1700px] mx-auto h-[auto] '>
            <div className="hero min-h-full bg-base-200 py-20">
                <div className="hero-content flex-row lg:flex-row-reverse flex-wrap">
                    <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="nameInput">
                                    <span>User Name</span>
                                    <input type="text" placeholder="Your name" className={`input input-bordered w-full max-w-xs ${errors?.name && "border-2 border-red-600"}`}

                                        {...register("name",
                                            {
                                                required: {
                                                    value: true,
                                                    message: "name Required"
                                                },
                                                minLength: {
                                                    value: 4,
                                                    message: "Name should be at least 4 characters "
                                                }
                                            },
                                        )} />


                                    {errors.name?.type === 'required' && <span className="ml-2 font-bold label-text-alt text-red-500">{errors.name.message}</span>}
                                    {errors.name?.type === 'minLength' && <span className="ml-2 font-bold label-text-alt text-red-500">{errors.name.message}</span>}

                                </div>



                                <div className="emailInput  my-6">
                                    <span>Email</span>
                                    <input type="text" placeholder="Email" className={`input input-bordered w-full max-w-xs ${errors?.email && "border-2 border-red-600"}`}

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

                                <div className="passwordInput">
                                    <span>Password</span>
                                    <input type="password" placeholder="Password" className={`input input-bordered w-full max-w-xs ${errors?.password && "border-2 border-red-600"}`}

                                        {...register("password",
                                            {
                                                required: {
                                                    value: true,
                                                    message: "password Required"
                                                },
                                                minLength: {
                                                    value: 8,
                                                    message: "Password must be at least 8 characters"
                                                }
                                            },
                                        )} />


                                    {errors.password?.type === 'required' && <span className="ml-2 font-bold label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="ml-2 font-bold label-text-alt text-red-500">{errors.password.message}</span>}

                                </div>

                                {
                                    !loading ?
                                        <>
                                            <input className='btn text-white tracking-widest border-0 my-5 
                                              bg-gradient-to-r from-cyan-500 to-blue-500 w-full
                                            hover:from-blue-500 hover:to-cyan-500' type="submit" value={"Sign Up"} />
                                        </>
                                        :
                                        <>
                                            <button className='btn text-white tracking-widest border-0 my-5 
                                        bg-gradient-to-r from-cyan-500 to-blue-500 w-full
                                      hover:from-blue-500 hover:to-cyan-500' disabled >
                                                <svg role="status" className="max-h-6 max-w-6 animate-spin mx-auto text-gray-200 dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                </svg>
                                            </button>
                                        </>
                                }

                            </form>
                            <div className="signIn text-center">
                                <p className='text-xs'>Already Signed up? <Link className='text-blue-500' to={"/login"}>Sign in here</Link></p>
                            </div>

                            <div className="divider">OR</div>

                            {
                                !googleLoading ?
                                    <>
                                        <button className="w-full border-[1px] border-white shadow-lg py-2 px-10 hover:shadow-sm" onClick={(e) => handleGoogleSignUp(e)}>
                                            <img src={googleIcon} className='inline mr-3 w-6' alt="icon" srcSet="" />
                                            Google
                                        </button>
                                    </>
                                    :
                                    <>
                                        <button className="w-full border-[1px] border-white shadow-lg py-2 px-10 hover:shadow-sm" onClick={(e) => handleGoogleSignUp(e)} disabled>
                                            <img src={loadingSpinnerGif} className='inline mr-3 w-2' alt="icon" srcSet="" />
                                            <svg role="status" className="max-h-6 max-w-6 animate-spin mx-auto text-gray-200 dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                            </svg>


                                        </button>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;