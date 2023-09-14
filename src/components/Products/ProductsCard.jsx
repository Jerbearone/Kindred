import { useNavigate } from "react-router-dom"
import { addItemToCart } from "../../api/cartLocalStorage";

export default function ProductsCard({product, username}) {
  
    const navigator = useNavigate();
    const viewProductDetails = () => {
        navigator("productinfo", {state: product} )
    }
    
    return (
        <div className="w-screen h-90vh flex justify-center items-center min-h-screen">
            <div className="container max-w-sm w-full h-400 p-4 ">
                <div className="card flex flex-col justify-center w-full p-20 bg-white rounded-lg shadow-2xl">
                <div className="prod-title">
                    <p className="text-sm uppercase text-gray-900 font-bold truncate">{product.title}</p>
                    <p className="uppercase text-sm text-gray-400">
                    {product.category}
                    </p>
                </div>
                <div className="prod-img">


                    <img onClick={viewProductDetails} src={product.image}
                        className="w-full h-60 object-contain object-center" />
                </div>
                <div className="prod-info grid gap-10">
                    <div>
                    
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                    
                    <button onClick={() => {
                        addItemToCart(username,product.id, 1)
                        console.log(username)
                        
                    }}
                            className="px-12 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
                        to cart</button>
                    </div>
                    <p className="font-bold text-xl">${product.price}</p>

                    
                </div>



                </div>
            </div>
        </div>

    )
}