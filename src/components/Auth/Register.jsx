import { useState } from "react"
import { registerUser } from "../../api/userLocalStorage";

export default function Register(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [inputFailed, setInputFailed] = useState(false);

    const submitForm = async(e) => {
        e.preventDefault();
        if (username.length > 7 && email.length > 8 && password.length > 7 && confirmPassword == password) {
            console.log("calling register")
            registerUser(username, password);
        } else {
            //display some error message
            setInputFailed(true);
        }
    }
    return (

        <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Registration Form</h1>
        <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input onChange={(e)=> {
                setUsername(e.target.value);
            }} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text" id="name" name="name" placeholder="John Doe"></input>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input onChange={(e) => {
                setEmail(e.target.value);
            }} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="email" id="email" name="email" placeholder="john@example.com"></input>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input onChange={(e)=> {
                setPassword(e.target.value);
            }} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="password" id="password" name="password" placeholder="********"></input>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">Confirm Password</label>
            <input onChange={(e)=> {
                setConfirmPassword(e.target.value);
            }} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="password" id="confirm-password" name="confirm-password" placeholder="********"></input>
        </div>
       
        <div>
            {inputFailed && <p className="block text-red-700 text-sm font-bold mb-2">Username, password, and email must have a min length of 7 characters</p>}
        </div>
        <button
        onClick={(e)=> {
            submitForm(e);

        }}
            className="w-full bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300"
            type="submit">Register</button>
        </form>
    </div>

    )
}