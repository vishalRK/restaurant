import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className="bg-red-500 h-[50px] w-[100%] flex justify-center">
            <div className="w-[800px] flex justify-between">
                <div className="small:w-[20%] lg:hidden medium:hidden">
                    <img src="/icons/menu.svg" alt="" width={50} height={50} />
                </div>
                <div className="w-[10%] small:w-[30%]">
                    Logo
                </div>
                <div className="small:hidden w-[60%] h-[100%] flex justify-between">
                    <Link href="/" className="pt-3">Home</Link>
                    <Link href="/About" className="pt-3">About</Link>
                    <Link href="/Contact" className="pt-3">Contact Us</Link>
                    <Link href="/Blog" className="pt-3">Blogs</Link>
                </div>
                <div className='w-[10%] small:w-[30%]'>
                    <img src="/icons/avtar.svg" alt="" width={50} height={50} />
                </div>
            </div>
        </div>
    )
}

export default Navbar