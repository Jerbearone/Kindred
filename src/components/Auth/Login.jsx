import { useState } from "react"
import { loginUser } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { addCurrentUser, loginThroughLocalStorage } from "../../api/userLocalStorage";


export default function Login({username, setUsername}){
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [userNameInput, setUserNameInput] = useState("");
    const [inputFailed, setInputFailed] = useState(false);

    const changeUserName = (e) => {
        setUserNameInput(e.target.value);
    }
    const changeUserPassword = (e) => {
        setPassword(e.target.value);
    }

    const attemptUserLogin = async () => {
        if (username != null && password != null) {
            //login user
          
                const loggedInUser = await loginUser(userNameInput, password);
                console.log(loggedInUser);
                try {
                    if (loggedInUser.token) {
                        await addCurrentUser(userNameInput);
                        setUsername(userNameInput);
                        navigate("/")
                    }
                    
                    } catch (error) {
                    console.log(error);
                    setInputFailed(true)
                    try {
                        const isUser = await loginThroughLocalStorage(userNameInput, password);
                        if (isUser) {
                            await addCurrentUser(userNameInput);
                            setUsername(userNameInput)
                            navigate("/")
                        }
                        
                    } catch (error) {
                        //make user register
                        setInputFailed(true);     
                    }
                }    
            } else {
                setInputFailed(true);
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
        <div>
            {inputFailed && <p className="block text-red-700 text-sm font-bold mb-2">Username or password incorrect</p>}
        </div>

        <button onClick={(e) => {e.preventDefault();attemptUserLogin()}}
            className="w-full bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300 mt-8"
            type="submit">Login</button>
        </form>
    </div>

    )
}