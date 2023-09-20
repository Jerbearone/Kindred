import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function SearchBar({products, setSearchedProducts}) {
  const [searchWords, setSearchWords] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(()=> {
    if (searchWords == "" ) {
      console.log("search words is null")
    } else {
      const tempFilteredArray = [];
          products.map((product) => {
            console.log(product.title);
            if (((product.title).toLowerCase()).includes(searchWords.toLowerCase()) || ((product.category).toLowerCase()).includes(searchWords.toLowerCase()) ||
            ((product.description).toLowerCase()).includes(searchWords.toLowerCase())){
              tempFilteredArray.push(product);
            }
          })
          setFilteredProducts(tempFilteredArray);
          setSearchedProducts(tempFilteredArray);
    }

  }, [products])
  
  return (
  <div className="bg-white p-2 w-full rounded-md">
    <div className="mt-3 mb-2 border-2 py-1 px-3 flex justify-between rounde-md rounded-md">
      <input onChange={(e) => {
        setSearchWords(e.target.value);
      }} className="flex-grow outline-none text-gray-600 focus:text-blue-600" type="text" placeholder="Search Products" />
      <spa>
        <svg onClick={()=> {
          navigate("/")
          const tempFilteredArray = [];
          products.map((product) => {
            console.log(product.title);
            if (((product.title).toLowerCase()).includes(searchWords.toLowerCase()) || ((product.category).toLowerCase()).includes(searchWords.toLowerCase()) ||
            ((product.description).toLowerCase()).includes(searchWords.toLowerCase())){
              tempFilteredArray.push(product);
            }
          })
          setFilteredProducts(tempFilteredArray);
          setSearchedProducts(tempFilteredArray);
          console.log(tempFilteredArray);
          //navigate("/")

        }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-blue-400 transition duration-100 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </spa>
    </div>
</div>
    )
}