'use client'

import Modal from '@mui/material/Modal'
import React, { useState } from 'react'
import { BiSolidUser } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { RxCross2 } from "react-icons/rx";
import { closeModal, openSignupModal } from '@/redux/modalSlice';

function LoginModal() {

    const openModal = useSelector((state: any) => state.modals.modalOpen);
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        
    }

    function clickedOpenSignup() {
        dispatch(openSignupModal());
    }



    return (
        <>
            <Modal open={openModal === "login"} onClose={() => dispatch(closeModal())} className='flex justify-center items-center border border-none'>
                <div className='w-[90%] h-fit bg-white md:w-[400px] rounded-lg flex flex-col items-center outline-none relative'>
                    <div className='flex flex-col items-center pt-[48px] px-[32px] pb-[24px] w-full'>
                        <h2 className='text-[#032b41] text-xl font-bold mb-[24px]'>Log in to Summarist</h2>
                        <button className='flex bg-[#3a579d] h-10 relative text-white w-full rounded justify-center items-center hover:bg-[#25396b]'>
                            <h2 className='text-[16px]'>Login as a Guest</h2>
                            <BiSolidUser className='flex absolute items-center justify-center w-[36px] h-[36px] left-[2px]'/>
                        </button>
                        <div className='flex items-center my-4 w-full before:content-[""] before:block before:grow before:h-[1px] before:bg-[#bac8ce]
                        after:content-[""] after:block after:grow after:h-[1px] after:bg-[#bac8ce]'>
                            <span className='mx-6 text-[14px] text-[#394547] font-medium'>or</span>
                        </div>
                        <button className='flex bg-[#4285f4] h-10 relative text-white w-full rounded justify-center items-center hover:bg-[#3367d6] cursor-not-allowed'>
                            <h2 className='text-[16px]'>Login with Google</h2>
                            <div className='flex absolute items-center justify-center w-[36px] h-[36px] left-[2px] bg-white rounded'>
                                <img className='w-[24px] h-[24px]' src='/assets/google.png'/>
                            </div>
                        </button>
                        <div className='flex items-center my-4 w-full before:content-[""] before:block before:grow before:h-[1px] before:bg-[#bac8ce]
                        after:content-[""] after:block after:grow after:h-[1px] after:bg-[#bac8ce]'>
                            <span className='mx-6 text-[14px] text-[#394547] font-medium'>or</span>
                        </div>
                        <input type="email" placeholder='Email Address' onChange={e => setEmail(e.target.value)}
                        className='h-10 border border-[2px] rounded border-[#bac8ce] text-[#394547] w-full px-3 mb-4 text-sm focus:border-[#2bd97c] outline-none'></input>
                        <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)}
                        className='h-10 border border-[2px] rounded border-[#bac8ce] text-[#394547] w-full px-3 mb-4 text-sm focus:border-[#2bd97c] outline-none'></input>
                        <button className='flex bg-[#2bd97c] h-10 relative text-white w-full rounded justify-center items-center hover:bg-[#20ba68]' onClick={handleLogin}>
                            <h2 className='text-[16px] text-black'>Login</h2>
                        </button>
                    </div>
                    <button className='text-[#116be9] text-[14px] font-light mb-4 cursor-not-allowed'>Forgot your password?</button>
                    <button className='text-[#116be9] text-[14px] font-light mb-4' onClick={clickedOpenSignup}>Don't have an account?</button>
                    <RxCross2 className='text-3xl absolute top-2 right-2 cursor-pointer hover:opacity-50' onClick={() => dispatch(closeModal())}/>
                </div>
            </Modal>
        </>
  )
}

export default LoginModal