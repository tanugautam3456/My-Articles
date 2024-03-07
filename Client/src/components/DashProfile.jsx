import React from 'react'
import {useSelector ,} from 'react-redux'
import {Button,TextInput} from 'flowbite-react'

export default function DashProfile() {
    const {currentUser}= useSelector((s)=>s.user)
    
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
        <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
        <form className='flex flex-col gap-4'>
            <div className='w-32 h-32 self-center overflow-hidden cursor-pointer shadow-md rounded-full'>
                <img src={currentUser.profilePicture} 
                className='rounded-full w-full h-full object-cover border-8 border-[lightgray]'/>
                 </div>
                <TextInput type='text' id='username' placeholder='username'defaultValue={currentUser.username} />
                <TextInput type='text' id='email' placeholder='email'defaultValue={currentUser.email} />
                <TextInput type='text' id='password' placeholder='password'/>
                <Button type='submit' gradientDuoTone='purpleToBlue' outline>UPDATE</Button>
        </form>
        <div className='text-red-500 flex justify-between mt-5 font-semibold'>
        <span className='cursor-pointer'>Delete</span>
        <span className='cursor-pointer'>Sign Out</span>
        </div>
    </div>
  )
}
