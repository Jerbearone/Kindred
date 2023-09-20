import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUserName } from "../../api/userLocalStorage";
import { getItemsFromCart } from "../../api/cartLocalStorage";
import { getProductById } from "../../api/api";
import CheckoutCard from "./CheckoutCard";

export default function Checkout() {

    const [usersCart, setUsersCart] = useState({})
    const [totalPrice, setTotalPrice] = useState(0);
    const [currentUserName, setCurrentUsername] = useState("")
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
    },[])

    const addToTotal =(amount) => {setTotalPrice(totalPrice+amount)}
    return (
        <div className="min-w-screen min-h-screen  py-5 ml-10 mr-10">
            <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
                <div className="w-full">
                    <div className="-mx-3 md:flex items-start">
                        <div className="px-3 md:w-7/12 lg:pr-10">
                            <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                                <div className="w-full flex items-center">
                                    
                                    <div className="flex-grow pl-3">
                                        {
                                            Object.keys(usersCart).map((item)=> {
                                                //return <h1>{usersCart[item].quantity}</h1>
                                                return <CheckoutCard key={item} productId={item} addToTotal={addToTotal} quantity={usersCart[item].quantity} 
                                                ></CheckoutCard>
                                            })
                                        }
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="w-full mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                                <div className="w-full flex items-center justify-around">
                                    <div className="flex justify-around">
                                        <span className="text-gray-600">Total:</span>
                                    </div>
                                    <div className="pl-3">
                                        <span className="font-semibold text-gray-400 text-sm">USD</span> <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-3 md:w-5/12">
                            
                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                                <div className="w-full p-3 border-b border-gray-200">
                                    <div className="w-32">
                                        <span className="text-gray-600 font-semibold">Billing Address</span>
                                    </div>
                                    <div>
                                        <div className="mb-3">
                                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Full Name</label>
                                            <div>
                                                <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"  type="text"/>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Address</label>
                                            <div>
                                                <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"  type="text"/>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Address line 2</label>
                                            <div>
                                                <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="apt#" type="text"/>
                                            </div>
                                        </div>
                                        <div className="mb-3 -mx-2 flex items-end">
                                        <div className="px-2 w-1/3">
                                                <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Country/region</label>
                                                <input className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                    
                                                </input>
                                            </div>
                                            <div className="px-2 w-1/3">
                                                <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">State/province</label>
                                                <input className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                    
                                                </input>
                                            </div>
                                            <div className="px-2 w-1/3">
                                                <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Zip</label>
                                                <input className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                    
                                                </input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                                <div className="w-full p-3 border-b border-gray-200">
                                    <div className="mb-5">
                                            
                                            <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-6 ml-3"/>
                                        
                                    </div>
                                    <div>
                                        <div className="mb-3">
                                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Name on card</label>
                                            <div>
                                                <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text"/>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Card number</label>
                                            <div>
                                                <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text"/>
                                            </div>
                                        </div>
                                        <div className="mb-3 -mx-2 flex items-end">
                                            <div className="px-2 w-1/4">
                                                <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Expiration date</label>
                                                <div>
                                                    <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                        <option value="01">01 - January</option>
                                                        <option value="02">02 - February</option>
                                                        <option value="03">03 - March</option>
                                                        <option value="04">04 - April</option>
                                                        <option value="05">05 - May</option>
                                                        <option value="06">06 - June</option>
                                                        <option value="07">07 - July</option>
                                                        <option value="08">08 - August</option>
                                                        <option value="09">09 - September</option>
                                                        <option value="10">10 - October</option>
                                                        <option value="11">11 - November</option>
                                                        <option value="12">12 - December</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="px-2 w-1/4">
                                                <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                    <option value="2020">2020</option>
                                                    <option value="2021">2021</option>
                                                    <option value="2022">2022</option>
                                                    <option value="2023">2023</option>
                                                    <option value="2024">2024</option>
                                                    <option value="2025">2025</option>
                                                    <option value="2026">2026</option>
                                                    <option value="2027">2027</option>
                                                    <option value="2028">2028</option>
                                                    <option value="2029">2029</option>
                                                </select>
                                            </div>
                                            <div className="px-2 w-1/4">
                                                <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Security code</label>
                                                <div>
                                                    <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div>
                                <button className="block w-full max-w-xs mx-auto bg-blue-600 hover:bg-blue-500 transition duration-300 text-white rounded-lg px-3 py-2 font-semibold"><i className="mdi mdi-lock-outline mr-1"></i> PAY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
    )
}