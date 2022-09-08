import React from 'react';
import { useForm } from "react-hook-form";
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {useNavigate } from 'react-router-dom';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    let errorMessage;

    if(loading){
        return <div className='flex justify-center h-screen items-center'>
            <button class="btn btn-ghost loading ">loading</button>
        </div>
    }

    if(error){
        errorMessage = <p className='text-error'>*{error?.message}</p>
    }

    const onSubmit = data=> {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
        navigate('/admin');
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-3xl font-bold text-gray">Admin Login</h2>
                    <div >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input 
                                type="email" 
                                placeholder="Email" 
                                class="input input-bordered rounded-lg w-full max-w-xs" 
                                {...register("email", {
                                    required : {
                                        value: true,
                                        message: '*Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@ruet.ac.bd/,
                                        message: '*Invalid Email'
                                    }
                                })}/>
                                <label class="label">
                                    {errors.email?.type === 'required' && <span class="label-text text-error">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span class="label-text text-error">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input 
                                type="password" 
                                placeholder="Password" 
                                class="input input-bordered rounded-lg w-full max-w-xs" 
                                {...register("password", {
                                    required : {
                                        value: true,
                                        message: '*password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: '*Passwords must be at least 6 characters long'
                                    }
                                })}/>
                                <label class="label">
                                    {errors.password?.type === 'required' && <span class="label-text text-error">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span class="label-text text-error">{errors.password.message}</span>}
                                </label>
                            </div>
                            {errorMessage}
                            <input className='mt-4 btn w-full max-w-xs rounded-lg' type="submit" value="Login"/>
                        </form>
                    </div>
                    
                    {/* <p className='text-center text-secondary pt-4'>
                        <Link to='/staff-login'>Switch to staff login</Link>
                    </p> */}
                    
                </div>
            </div>
        </div>
    );
};

export default Login;