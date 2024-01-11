"use client"
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';

type FormDataType = {
  fullname: string;
  email: string;
  password: any;
  message: any;
}

const initialFormData: FormDataType = {
  fullname: '',
  email: '',
  password: "",
  message: '',
}


const Contactme = () => {

  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (event: any) => {
    setFormData(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log({ formData });
    axios.post('https://jsonplaceholder.typicode.com/posts', formData)
      .then((response: { data: React.SetStateAction<FormDataType>; }) => {
        setFormData(response.data);
        // Handle the response as needed
      })
      .catch((error: any) => {
        console.error('POST Error:', error);
        // Handle errors, if any
      });
  }

  return (
    <div className=' text-slate-700 xl:max-w-5xl mx-auto mt-10 py-10'>
      <h1 className='mb-10 text-center text-xl font-semibold'>LOGIN</h1>
      <div className=' grid lg:grid-cols-2'>
        <div className="heading px-3 ">
          <h4 className='text-4xl lg:text-5xl font-semibold'>Lest chat. <br /> Tell me about your project.</h4>
          <p className='mt-10  text-base font-medium'>Lets's create something together</p>
          <div className='flex justify-center items-center px-6 py-6 bg-white shadow-xl w-80 rounded-xl my-7'>
            <div className="icon bg-[#F2EFFF] p-3 text-xl rounded-lg">
              <HiOutlineMail />
            </div>
            <div className="email ml-2 text-base font-medium">
              <p>Mail me at</p>
              <p className='text-[#562AF1]'>abdullah563823@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="form p-6 border border-[#cacaca] rounded-xl shadow-xl mx-3">
          <h1 className='text-center font-medium text-2xl'>You'r information</h1>
          <form onSubmit={handleSubmit} action="" method="post" className='grid grid-cols-1 gap-5 mt-6'>

            {/* for fullname */}
            <input value={formData.fullname} onChange={handleChange} name='fullname' className='bg-[#F7F6FE] outline-indigo-500 p-3 rounded-md' type="text" placeholder='Full name*' />

            {/* for email */}
            <input value={formData.email} onChange={handleChange} name='email' className='bg-[#F7F6FE] outline-indigo-500 p-3 rounded-md' type="text" placeholder='Email address*' />
            {/* for subject */}
            <input value={formData.password} onChange={handleChange} name='password' className='bg-[#F7F6FE] outline-indigo-500 p-3 rounded-md' type="password" placeholder='Password' />
            <p className='font-medium'>Tell us more about your project</p>

            {/* for message */}
            <textarea value={formData.message} onChange={handleChange} className='bg-[#F7F6FE] outline-indigo-500 p-3 rounded-md' name="message" id="" ></textarea>

            {/* for submit */}
            <button className='bg-[#562AF1] text-white shadow-2xl  font-medium w-40 py-4 rounded-md' type='submit'>Send message</button>
          </form>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Contactme