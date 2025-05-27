import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"

const Login = () => {
     const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
    return (
        <div>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    </form>
                    <h3 className="font-bold text-lg ">Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 mt-4'>
                        <div>
                            <span>Enter Your Email</span><br />
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                id="signin-email"
                                name="email"
                                required
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div>
                            <span>Enter Your Password</span><br />
                            <input
                                {...register("password", { required: true })}
                                type="password"
                                id="signin-password"
                                name="password"
                                required
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div><br />
                        {errors.exampleRequired && <span className='text-[#000]'>This field is required</span>}
                        <div className='flex justify-between items-center'>
                            <button className='btn text-white bg-pink-500'>Login</button>
                            <p>Not register? {" "} <Link to='/signup' className='text-primary underline cursor-pointer'>Signup</Link>
                                {""}
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login