import { useState } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function ResponsiveSidebar({username, setUsername, products, setSearchedProducts,showSideNav, setShowSideNav}){
    return (
        <div className={`fixed top-0 transition-all duration-1000 h-screen mt-5 fixed z-10 ${showSideNav ? "-left-0 w-64" : "-left-64 w-64"}`}>
            <aside className="flex flex-col w-64 h-screen px-2 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
                <div className="flex w-full justify-center mt-10 ">
                    <svg onClick={()=> {
                        setShowSideNav(false);
                    }} className="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </div>
    <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="-mx-3 space-y-6 ">
            <div className="w-full">
            <nav>
                <SearchBar products={products} setSearchedProducts={setSearchedProducts}></SearchBar>
                    <ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                        <li><Link className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" to="/">Products</Link></li>
                    </ul> 
                    </nav>
            </div>
        </nav>
    </div>
</aside>
            

        </div>
    )
}