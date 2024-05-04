import React from 'react'
import { useForm } from 'react-hook-form'
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Here you can handle form submission logic
    };
    return (
        <>
        <Navbar/>
            <div className="min-h-screen flex items-start justify-center bg-gray-50 pt-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 ">
                    <div>
                        <h2 className="text-center text-3xl font-extrabold text-gray-900">Contact Us</h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="rounded-md shadow-sm ">
                            <div className='mb-1'>
                                <label className='text-lg '>
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    {...register("name", { required: true })}
                                    autoComplete="name"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter your name"
                                />
                                {errors.name && <p className="mt-1 text-red-500 text-sm">Name is required</p>}
                            </div>

                            <div className='mb-1'>
                                <label className='text-lg '>
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    {...register("email", { required: true })}
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter your email"
                                />
                                {errors.name && <p className="mt-1 text-red-500 text-sm">Email is required</p>}
                            </div>
                            <div className='mt-1'>
                                <label className='text-lg '>
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    type="text"
                                    {...register("message", { required: true })}
                                    autoComplete="message"
                                    required
                                    className="appearance-none rounded-none relative block w-full h-28 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter your message" >
                                </textarea>
                                {errors.name && <p className="mt-1 text-red-500 text-sm">Password is required</p>}
                            </div>
                        </div>
                        <button class="ml-40 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Contact
