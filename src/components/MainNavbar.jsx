import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useEffect } from "react";
import { deleteCurrentUser, getCurrentUserName } from "../api/userLocalStorage";

export default function MainNavbar({username, setUsername, products, setSearchedProducts, setShowSideNav}) {
    const navigate = useNavigate();
    useEffect(()=>{
        const setupUsername = async() => {
            const data = await getCurrentUserName();
            const setinitialUsersName = async() => {
                console.log(`username: ${data}`);
                if (data!= null) {
                    console.log(`logged in user: ${data}`)
                    setUsername(data);
                } else {
                    console.log(`No user: ${data}`)
                    setUsername("")
                }
            }
            await setinitialUsersName();     
        }
        setupUsername(); 
    },[])

    return (
    <>
        <nav id="header" className="w-full z-30 top-10 py-1 bg-white shadow-lg border-b border-blue-300 mt-1">
            <div className="w-full flex items-center justify-around mt-0 px-10 py-1">
                {//implement toggle option here
                }
                <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
                    <svg onClick={()=> {
                        setShowSideNav(true);
                    }} className="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>
                
                <input className="hidden" type="checkbox" id="menu-toggle"/>
                <div className=" hidden md:flex md:items-center w-3/5 order-3 md:order-1" id="menu">
                    <div>
                </div>
                    <nav>
                    <ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                        <li><Link className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" to="/">Products</Link></li>
                    </ul>
                    </nav>
                    <SearchBar products={products} setSearchedProducts={setSearchedProducts}></SearchBar>
                </div>
                <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
                    <div className="auth flex items-center w-full md:w-full">
                    <p className="text-gray-500 dark:text-gray-400 mr-5 mt-2">
                     <a href="/cart" className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
                     {username != "" && <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 18 21">
                        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                    </svg>}
                        </a></p>
                    {<button onClick={async()=>{
                        //login
                        if (username == null) {
                            const tempName = await getCurrentUserName();
                            console.log(tempName)
                            setUsername(tempName);
                            navigate("/login");
                        } else {
                            //logout
                            await deleteCurrentUser(username);
                            setUsername("")
                            navigate("/login");
                        }
                        }}
                     className="bg-blue-600 text-gray-200  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">{username == "" ? "Log in" : "Log out"}</button>}
                    {username == "" && <button onClick={()=>{
                        navigate("/register")
                    }} className="bg-transparent text-gray-800  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">Sign up</button>}
                    </div>
                </div>
            </div>
        </nav>
    </>)

}