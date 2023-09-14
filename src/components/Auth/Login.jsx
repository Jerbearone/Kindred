import { useState } from "react"
import { loginUser } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { addCurrentUser } from "../../api/userLocalStorage";


export default function Login(){
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const changeUserName = (e) => {
        setUsername(e.target.value);
    }
    const changeUserPassword = (e) => {
        setPassword(e.target.value);
    }

    const attemptUserLogin = async () => {
        if (userName != null && password != null) {
            //login user
          
                const loggedInUser = await loginUser(userName, password);
                console.log(loggedInUser);
                if (loggedInUser.token) {
                    await addCurrentUser(userName);
                    navigate("/")
                }
    
            }
    }

   
    return (

        <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input onChange={changeUserName} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text" id="name" name="name" placeholder="John Doe"></input>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input onChange={changeUserPassword} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="password" id="password" name="password" placeholder="********"></input>
        </div>

        <button onClick={(e) => {e.preventDefault();attemptUserLogin()}}
            className="w-full bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300 mt-8"
            type="submit">Login</button>
        </form>
    </div>

    )
}