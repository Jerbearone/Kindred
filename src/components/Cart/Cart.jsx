import { useState, useEffect } from "react"
import { getItemsFromCart } from "../../api/cartLocalStorage"
import CartCard from "./CartCard"
import { getCurrentUserName } from "../../api/userLocalStorage";
import { getProductById } from "../../api/api";
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const [usersCart, setUsersCart] = useState({})
    const [totalPrice, setTotalPrice] = useState(0);
    const [currentUserName, setCurrentUsername] = useState("")
    const [deleteTrigger, setDeleteTrigger] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        let usersStarterTotal = 0;
        
        const loadUsersItems = async() => {
            const username = await getCurrentUserName();
            setCurrentUsername(username);
            const userItems = await getItemsFromCart(username)
            setUsersCart(userItems);
            //set total price for cart when user goes to cart page
         
            //user promise.all for map, this way the await will wait for the whole array .
            await Promise.all(Object.keys(userItems).map(async (item) => {
                const product = await getProductById(item);
                //console.log(product);
                //usersStarterTotal += userItems[item].quantity
                //console.log(userItems[item].quantity);
                const itemQuantity = (userItems[item].quantity);
                usersStarterTotal += product.price * itemQuantity
                console.log(usersStarterTotal)
            }))
            console.log(usersStarterTotal)
            await loadTotal();
            
        }

        const loadTotal = async () => {
            setTotalPrice(usersStarterTotal);
        }
        loadUsersItems()
    },[deleteTrigger])
    const rerenderFromDelete = async() => { setDeleteTrigger(!deleteTrigger)}

    const addToTotal =(amount) => {setTotalPrice(totalPrice+amount)}
    return (
    <div className="mr-4 flex-column w-full justify-around p-4 md:block lg:flex">
        <div className="lg:w-2/3 justify-between mb-4 md:w-full sm:w-full md:w-full mr-4">
        {Object.keys(usersCart).map((item)=> {
            //return <h1>{usersCart[item].quantity}</h1>
            return <CartCard key={item} productId={item} username={currentUserName} quantity={usersCart[item].quantity} addToTotal={addToTotal}
            rerenderFromDelete={rerenderFromDelete}></CartCard>

        })}
        </div>
        <div className="sticky top-4 h-full lg:w-1/5 shadow-2xl mr-8 ml-8 sm:text-sm ">
            <p className=" bg-white text-2xl font-bold mt-10">Total<br></br> ${totalPrice.toFixed(2)}</p>
            <button onClick={() => {
                    navigate("/checkout")
                }

            } className="px-4 mb-8 py-2 mr-4 ml-4 transition ease-in duration-200 uppercase rounded-full 
            hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Proceed to checkout</button>
        </div>
        
    </div>)
}