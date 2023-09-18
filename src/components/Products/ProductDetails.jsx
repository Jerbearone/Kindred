import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { addItemToCart } from "../../api/cartLocalStorage";
import { getCurrentUserName } from "../../api/userLocalStorage";

export default function ProductDetails() {
    const [productDetails, setProductDetails] = useState({})
    const [userName, setUsername] = useState("")
    const location = useLocation()
    useEffect(()=>{
        const addUsersName = async() => {
            const currentUser = await getCurrentUserName();
            setUsername(currentUser);
        }
        addUsersName()
        setProductDetails(location.state);
        console.log(productDetails)

    },[])
    
    return (
            <div className="container  w-full h-400 p-4 flex flex-col items-center">
                <div className="card flex flex-col justify-center w-full p-20 bg-white rounded-lg shadow-2xl">
                <div className="prod-title">
                    <p className="text-sm uppercase text-gray-900 font-bold mt-10 mb-10">{productDetails.title}</p>
                  
                </div>
                <div className="prod-img">
                    <img src={productDetails.image}
                        className="w-full h-60 object-contain object-center" />
                </div>
                <div className="prod-description w-full flex flex-col items-center  ">
                    <p className="text-sm uppercase text-gray-900 font-bold w-1/2 mt-10 mb-10">{productDetails.description}</p>
                </div>
                <div className="prod-info grid gap-10 flex flex-row items-center">
                    <div>
                    
                    </div>
                    <div className="flex flex-col justify-between items-center text-gray-900">
                    
                    <button
                        onClick={()=> {
                            addItemToCart(userName,productDetails.id, 1)
                        }}
                            className="px-12 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
                        to cart</button>
                    </div>
                    <p className="font-bold text-xl">${productDetails.price}</p>
                </div>
                </div>
            </div>


    )

}