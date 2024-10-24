import React, { useState } from 'react'
import myimg from '../assets/img.jpg'
import { MdRemoveRedEye } from "react-icons/md";


const Login = () => {
    // ----------------variable part start
      const [email , setEmail] = useState('')
      const [password , setPassword] = useState('')
      const [emailError , setEmailError] = useState('')
      const [passwordError , setPasswordError] = useState('')


    // ================function part start
    const handelEmail =(e)=>{
        console.log(e.target.value)
        setEmail(e.target.value)

    }
    const handelPassword =(e)=>{
        console.log(e.target.value)
        setPassword(e.target.value)

    }
    const handelsubmit =(e)=>{
        e.preventDefault()
        if(email== ''){
            setEmailError('Enter Your Email')
           
        }
        if(password==''){
            setPasswordError('Enter Your Password')

        }

    }





  return (
    <>
    <div className="div">
    <div className=' relative'>
            {/* <img src={myimg} alt="img" /> */}
        <div className=' absolute bg-black w-[340px] h-[418px] flex flex-col justify-center items-center border-[2px] border-solid border-white rounded-lg top-[250px] left-[600px] bg-transparent backdrop-blur-[2px]'>
           <div>
           <h1 className='text-white font-sans font-semibold text-2xl'>Login To your Account</h1>
           </div>
            <form onSubmit={handelsubmit}>
                <div className='flex flex-col'>
                    <label className='text-white font-sans font-normal text-lg'>Email</label>
                    <input onChange={handelEmail} className='bg-transparent text-white font-sans font-light border-none outline-none' type="text" placeholder='Enter your mail' />
                    <span className=' absolute inline-block w-[237px] h-[2px] bg-white top-[140px] left-[48px]'></span>
                    <p className=' absolute top-[145px] font-medium font-sans text-red-600 text-sm'>{emailError}</p>
                </div>
                <div className='flex flex-col mt-[18px]'>
                <label  className='text-white font-sans font-normal text-lg mt-[12px]'>Password</label>
                <input onChange={handelPassword}  className='bg-transparent text-white font-sans font-light border-none outline-none' type="password" placeholder='Enter your password' />
                <span className=' absolute inline-block w-[237px] h-[2px] bg-white top-[221px] left-[48px]'></span>
                <p className=' absolute top-[226px] font-medium font-sans text-red-600 text-sm'>{passwordError}</p>
                </div>
                <div className=' flex justify-between mt-[30px] gap-[18px]'>
                    <div className=' flex items-center'>
                    <input className='border-solid border-[#fff] border-[2px] mt-[3px]' type="checkbox" />
                    <p className=' font-sans font-light text-white'>Rebember me</p>
                    </div>
                    <div>
                    <a className=' font-sans font-light text-white' href="#">Forgot Password?</a>
                    </div>
                </div>
                <div className=' mt-[30px]'>
                    <button type=' submit' className=' active:scale-[1.1] bg-white pt-[1px] pb-[4px] px-[95px] rounded-lg text-black font-sans text-xl font-semibold'>Login</button>
                </div>
                <div className='flex justify-between mt-[6px]'>
                <a className=' font-sans font-light text-white' href="#">Don't have an account?</a>
                <a className=' font-sans font-light text-white' href="#">Sign Up</a>
                </div>
            </form>
        </div>



    </div>
    </div>
    
    
    </>
  )
}

export default Login