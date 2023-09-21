import { useState } from "react"
import { sortPriceHighToLow, sortPriceLessThan100, sortPriceLowToHigh } from "../../utils/productFilters";

export default function FilterView({products, setProductCategories}) {
    const [dropDownToggle, setDropDownToggle] = useState(false);
    return (

<div className="flex flex-col content-end w-full justify-end items-end mt-4 ">
    <div className="flex content-end w-32 justify-end items-end mr-24 ">
        <button onClick={() => {setDropDownToggle(!dropDownToggle)}}
         type="button" className="border border-gray-300 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500">
            Filter
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z">
                </path>
            </svg>
        </button>
    </div >
    {dropDownToggle && <div className="h-0 z-20 overflow:visible w-32 mr-24 bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
        <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                <span className="flex flex-col">
                <button onClick={async() => {
                    const filteredProducts = await sortPriceLowToHigh(products);
                    setProductCategories(filteredProducts);
                }} className="mb-2 w-full max-w-xs mx-auto bg-blue-600 hover:bg-blue-500 transition duration-300 text-white rounded-lg 
                px-3 py-1 font-semibold"><i className="mdi mdi-lock-outline mr-1"></i>Low to high</button>
                </span>
            </a>
            <a href="#" className="text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                <span className="flex flex-col">
                <button onClick={async()=> {
                    const filteredProducts = await sortPriceHighToLow(products);
                    setProductCategories(filteredProducts);

                }} className="mb-2 w-full max-w-xs mx-auto bg-blue-600 hover:bg-blue-500 transition duration-300 text-white rounded-lg px-3 py-1 font-semibold"><i className="mdi mdi-lock-outline mr-1"></i>High to low</button>
                </span>
            </a>
            <a href="#" className=" text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                <span className="flex flex-col">
                <button onClick={async() => {
                    const filteredProducts = await sortPriceLessThan100(products);
                    setProductCategories(filteredProducts);
                }} className="block w-full max-w-xs mx-auto bg-blue-600 hover:bg-blue-500 transition duration-300 text-white rounded-lg px-3  font-semibold"><i className="mdi mdi-lock-outline mr-1"></i>Less than $100</button>
                </span>
            </a>
        </div>
    </div>}
</div>

    )
}