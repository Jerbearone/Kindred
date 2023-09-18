import { useEffect, useState } from "react";
import { getProductById } from "../../api/api";

export default function CheckoutCard ({productId, quantity,  addToTotal}) {
    const [product, setProduct] = useState({})
    useEffect(()=> {
        const getCartItem = async() => {
            const response = await getProductById(productId);
            setProduct(response);
        }
        getCartItem();
    },)
    return (
    <div className="flex-column items-center justify-center mb-12 mr-12 ml-12">
        <div className="flex items-center justify-center overflow-hidden rounded-lg w-full h-16  mb-4 ">
            <img className="flex items-center justify-center overflow-hidden rounded-lg h-16 w-16" src={product.image}/>
        </div>
        <h6 className=" font-semibold uppercase text-gray-600">{product.title}</h6>
        <p className="text-gray-400 border-b border-gray-200" >x {quantity}</p>

    </div>
    )
}