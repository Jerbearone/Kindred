import { useNavigate } from "react-router-dom"
import { deleteItemFromCart, updateItemFromCart } from "../../api/cartLocalStorage";
import { useEffect, useState } from "react";
import { getProductById } from "../../api/api";

export default function CartCard({productId, quantity, username, addToTotal, rerenderFromDelete}) {
    const [product, setProduct] = useState({})
    const [productsQuantity, setProductsQuantity] = useState(quantity);

    //get individual item by fetching item by id
    useEffect(()=> {
        const getCartItem = async() => {
            const response = await getProductById(productId);
            setProduct(response);
        }
        getCartItem();
    },)
    const navigator = useNavigate();
    const viewProductDetails = () => {
        navigator("productinfo", {state: product} )
    }
    const callDeleteItem = async() => {
        await rerenderFromDelete();
    }

   
    return (
       
            <div className="container w-full h-200 p-4 ml-10  flex-col">
                <div className="card flex flex-col justify-center w-full p-10 bg-white rounded-lg shadow-2xl">
                <div className="prod-title">
                    <p className="text-sm uppercase text-gray-900 font-bold truncate mb-10">{product.title}</p>
                  
                </div>
                <div className="prod-img">
                    <img onClick={viewProductDetails} src={product.image}
                        className="w-full h-24 object-contain object-center" />
                </div>
                <div className="prod-info grid gap-10">
                    <div>
                    
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center text-gray-900">
                    
                    <button onClick={() =>{if (productsQuantity >= 1){
                        setProductsQuantity(productsQuantity -1)
                        updateItemFromCart(username, productId, productsQuantity -1);
                        addToTotal(product.price * -1)
                    }}}
                            className="px-4 py-2 mr-4 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">-
                            </button>
                            <p className="text-sm uppercase text-gray-900 font-bold truncate">{productsQuantity}</p>
                            <button onClick={() =>{
                                setProductsQuantity(productsQuantity +1); 
                                updateItemFromCart(username, productId, productsQuantity +1);
                                addToTotal(product.price)

                            }}
                            className="px-4 py-2 ml-4 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">+</button>
                    </div>
                    <p className="font-bold text-xl">${product.price * productsQuantity}</p>
                    <button onClick={async()=> {
                        await deleteItemFromCart(username, productId);
                        await callDeleteItem();

                    }} className="hover:text-blue-600">remove from cart</button>
                </div>
                </div>
            </div>
 

    )
}