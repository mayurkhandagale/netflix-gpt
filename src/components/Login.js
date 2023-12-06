import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
  const [isSingInForm, setIsSingInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSingInForm(!isSingInForm);
  }

  return (
    <div className='bg-gradient-to-b from-black'>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='background-image' />
      </div>
      <form className='absolute p-12 my-36 mx-auto right-0 left-0 bg-black w-3/12 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4' >{isSingInForm ? "Sign In" : "Sign Up"}   </h1>
        {!isSingInForm && <input type="text" placeholder="Name" className='p-2 my-2 w-full' />}
        <input type="email" placeholder="Email Address" className='p-2 my-2 w-full' />
        <input type="password" placeholder="Password" className='p-2 my-2 w-full ' />
        <button className='p-2 my-2 rounded-lg bg-red-700 w-full'>{isSingInForm ? "Sign In" : "Sign Up"}</button>
        <p className='p-2' onClick={toggleSignInForm} >{isSingInForm ? "New to Netflix? Sign up now." : "Already Registered, Sing in now."}</p>
      </form>
    </div>
  )
}

export default Login;