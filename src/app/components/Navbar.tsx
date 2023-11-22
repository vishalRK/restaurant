"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isToggle, setIsToogle] = useState(false);
  const [isAboutOpen, setAboutOpent] = useState(false);
  return (
    <div className="bg-red-500 h-[50px] w-[100%] flex justify-center">
      <div className="w-[800px]  flex justify-between medium:justify-center lg:relative">
        <div className="small:w-[20%] medium:hidden">
          {!isToggle ? (
            <img
              src="/icons/menu.svg"
              alt=""
              className="transition-top ease duration-300 delay-300"
              width={50}
              height={50}
              onClick={() => setIsToogle(!isToggle)}
            />
          ) : (
            <img
              src="/icons/close.svg"
              alt=""
              width={50}
              height={50}
              className="transition-transform ease duration-700 hover:transform scale-110"
              onClick={() => setIsToogle(!isToggle)}
            />
          )}
        </div>
        <div className="w-[10%] small:w-[60%] small:text-center pt-3 text-center small:pt-3">
          <h1>Logo</h1>
        </div>
        <div
          className={`w-[60%] h-[100%] medium:w-[70%] small:absolute small:top-[50px] small:left-0  small:bg-white flex small:flex small:flex-col  medium:justify-evenly ${
            isToggle ? "small:block" : "small:hidden "
          }`}
        >
          <Link
            href="/"
            className="pt-3 small:pl-1 small:pb-4 small:text-start small:text-[30px] "
          >
            Home
          </Link>
          <div className=""  onMouseEnter={() => setAboutOpent(true)} onMouseLeave={() => setAboutOpent(false)}>
            <h3
              className="pt-3 small:pl-1 small:pb-4  small:text-start small:text-[30px] cursor-pointer ">
              About
            </h3>
            <ol className={`${isAboutOpen?"medium:absolute medium:h-[10%] medium:w-[20%]  medium:left-[32%] lg:left-[30%] text-[22px] medium:top-12 small:relative medium:bg-[#ef4444] transform scale-75 group-hover:scale-100 transition duration-150 ease-in-out origin-top":"hidden"}`}>
              <li className="text-center small:text-start medium:bg-[#ef4444]"><Link href={"/About/Gallery"}>Gallery</Link></li>
              <li className="text-center small:text-start medium:bg-[#ef4444]"><Link href={"/About/Gallery"}>Info</Link></li>
            
            </ol>
          </div>
          <Link
            href="/Contact"
            className="pt-3 small:pl-1 small:pb-4 small:text-start small:text-[30px]"
          >
            Contact Us
          </Link>
          <Link
            href="/Blog"
            className="pt-3 small:pl-1 small:pb-4 small:text-start small:text-[30px]"
          >
            Blogs
          </Link>
        </div>
        <div className="w-[10%] small:w-[20%]">
          <img src="/icons/avtar.svg" alt="" width={50} height={50} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
