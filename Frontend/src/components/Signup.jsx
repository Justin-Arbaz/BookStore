import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form"


const Signup = () => {
     const {
        register,
        handleSubmit,
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    return (
        <div className='flex justify-center items-center h-screen '>
            <div className="w-3/10 border-2 border-gray-100 p-5 shadow-md rounded-md">
                <div className="model-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    </form>
                    <h3 className="font-bold text-lg ">Signup</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 mt-4' method='dialog'>
                        <div>
                            <span>Enter Your Name</span>
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                id="signup-name"
                                name="name"
                                required
                                placeholder="Enter Your Full Name"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div>
                            <span>Enter Your Email</span>
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                id="signup-email"
                                name="email"
                                required
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div>
                            <span>Enter Your Password</span>
                            <input
                                {...register("password", { required: true })}
                                type="password"
                                id="signup-password"
                                name="password"
                                required
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>

                        <div className='flex justify-between items-center'>
                            <button className='btn text-white bg-pink-500'>Signup</button>
                            <p>Have Account {" "} <button to='/' className='text-primary underline cursor-pointer' onClick={()=> document.getElementById('my_modal_3').showModal()}>Login</button>
                                {""}
                            </p>

                        </div>
                    </form>
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default Signup