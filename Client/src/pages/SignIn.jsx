import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Label, TextInput } from 'flowbite-react'

function SignIn() {
  return (
    <div className='mt-20 min-h-screen'>

      <div className='flex p-3 max-w-4xl mx-auto flex-col md:flex-row md:items-center gap-5' >

        <div className='flex-1'>
          <Link to='/' className='font-bold text-4xl dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Tanu's</span>Blog
          </Link>
          <p className='text-sm mt-5'>this is a demo project.you can signup with your email and password or with Google.</p>
        </div>

        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your Username'/>
              <TextInput type='text' placeholder='Username'/>
            </div>
            <div>
              <Label value='Your Email'/>
              <TextInput type='text' placeholder='Email'/>
            </div>
            <div>
              <Label value='Your Password'/>
              <TextInput type='text' placeholder='Password'/>
            </div>
            <Button gradientDuoTone='purpleToPink'>SignUp</Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span> Have an Account</span>
            <Link to='/login' className='text-blue-500'>Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
