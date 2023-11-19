"use client";
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [isToggle,setIsToogle] = useState(false);
    console.log(isToggle);
    return (
        <div className="bg-red-500 h-[50px] w-[100%] flex justify-center">
            <div className="w-[800px] flex justify-between">
                <div className="small:w-[20%] lg:hidden medium:hidden">
                    {!isToggle ? <img src="/icons/menu.svg" alt="" className="transition-top ease duration-300 delay-300" width={50} height={50}  onClick={() => setIsToogle(!isToggle)}/>
                    :<img src="/icons/close.svg" alt="" width={50} height={50} className="transition-transform ease duration-700 hover:transform scale-110"  onClick={() => setIsToogle(!isToggle)}/>
                }
                </div>
                <div className="w-[10%] small:w-[60%] small:text-center pt-3 text-center small:pt-3">
                   <h1>Logo</h1>
                </div>
                <div className={`w-[60%] h-[100%] small:absolute small:top-[50px] small:left-0  small:bg-white lg:flex small:flex small:flex-col  medium:justify-between ${isToggle?"small:block":"small:hidden"}`}>
                    <Link href="/" className="pt-3 small:pl-1 small:pb-4 small:text-start small:text-[30px] ">Home</Link>
                    <Link href="/About" className="pt-3 small:pl-1 small:pb-4 small:text-start small:text-[30px]">About</Link>
                    <Link href="/Contact" className="pt-3 small:pl-1 small:pb-4 small:text-start small:text-[30px]">Contact Us</Link>
                    <Link href="/Blog" className="pt-3 small:pl-1 small:pb-4 small:text-start small:text-[30px]">Blogs</Link>
                </div>
                <div className='w-[10%] small:w-[20%]'>
                    <img src="/icons/avtar.svg" alt="" width={50} height={50} />
                </div>
            </div>
        </div>
    )
}

export default Navbar