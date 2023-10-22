import React from "react";

function NavBar() {
  return <>
        <nav className="bg-gray-500 fixed h-6">
             <h1 className=" text-red-600 text-3xl">Portfolio</h1>
            <div className="flex items-center gap-10">
                <a href="." className="text-white text-lg font-semibold hover:text-red-600">
                  Home
                </a>
                <a href="." className="text-white text-lg font-semibold">
                 About
                </a>
                <a href="." className="text-white text-lg font-semibold">
                 Projects
                </a>
                <a href="." className="text-white text-lg font-semibold">
                  Contact
                </a>
            </div>
        </nav>   
    </>
}

export default NavBar;