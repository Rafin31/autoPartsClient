import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import googleIcon from '../../Assets/icons/google-logo.png'

const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className='container max-w-[1700px] mx-auto h-[auto] '>
            <div class="hero min-h-full bg-base-200 py-20">
                <div class="hero-content flex-row lg:flex-row-reverse flex-wrap">
                    <div class="card flex-shrink-0 w-full max-w-sm  bg-base-100">
                        <div class="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="nameInput">
                                    <span>User Name</span>
                                    <input type="text" placeholder="Your name" class={`input input-bordered w-full max-w-xs ${errors?.name && "border-2 border-red-600"}`}

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
                                    <input type="text" placeholder="Email" class={`input input-bordered w-full max-w-xs ${errors?.email && "border-2 border-red-600"}`}

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
                                    <input type="password" placeholder="Password" class={`input input-bordered w-full max-w-xs ${errors?.password && "border-2 border-red-600"}`}

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



                                <input className='btn text-white tracking-widest border-0 my-5 
                             bg-gradient-to-r from-cyan-500 to-blue-500 w-full
                            hover:from-blue-500 hover:to-cyan-500' type="submit" value={"Sign Up"} />


                                <div className="signIn text-center">
                                    <p className='text-xs'>Already Signed up? <Link className='text-blue-500' to={"/login"}>Sign in here</Link></p>
                                </div>

                                <div class="divider">OR</div>

                                <button className="w-full border-[1px] border-white shadow-lg py-2 px-10 hover:shadow-sm" >
                                    <img src={googleIcon} className='inline mr-3 w-6' alt="icon" srcset="" />
                                    Google
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;