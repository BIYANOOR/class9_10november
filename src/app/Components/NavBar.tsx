"use client";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-blue-600 h-14 w-full flex justify-around items-center">
            {/* Logo */}
            <div>
                <Image
                 src="/Images/logo.png"
                 alt="logo"
                 height={80} 
                 width={80}
                />
            </div>

            {/* Subtitle */}
            <div><h6>Tuition Free Education Program on Latest Technologies</h6></div>

            {/* Nav Links */}
            <ul className="flex">
                <li className="h-10 w-32"><a href="#home" className="text-white">Home</a> </li>
                <li className="h-10 w-32">Apply</li>
                <li className="h-10 w-32">Jobs</li>
                <li className="h-10 w-32">Result</li>
                <li className="relative h-10 w-32 cursor-pointer" onClick={toggleDropdown}>
                    Courses
                    {isDropdownOpen && (
                        <ul className="absolute bg-white text-black top-full mt-1 w-32 shadow-lg rounded">
                            <li className="p-2 hover:bg-gray-200"><h6>Core Courses</h6></li>
                            <li className="p-2 hover:bg-gray-200"><h6>Advanced Courses</h6></li>
                            <li className="p-2 hover:bg-gray-200"><h6>Earn as you learn</h6></li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
