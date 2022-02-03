import React from "react";
import { useState } from "react";


const Auth = () => {
 //You can changed it when your done 

 const [ isSIgnup, setIsSignup] = useState(true);

 const switchSignup = (e) => {
     e.preventDefault()
     setIsSignup(!isSIgnup)
 }

    return ( 
        <div className="flex h-screen bg-gray-200">
            <div className="w-full max-w-xs m-auto bg-gray-50 rounded p-5">
                <form>
                    <div>
                        <label className="block mb-2 text-cyan-400" htmlFor="username">Username</label>
                        <input className="w-full p-2 mb-6 text-cyan-800 border-b-2 border-gray-400 outline-none focus: bg-gray-300 " type="text" name="username" />
                    </div>
                    <div>
                        <label className="block mb-2 text-cyan-400" htmlFor="password">Password</label>
                        <input className="w-full p-2 mb-6 text-cyan-800 border-b-2 border-gray-400 outline-none focus: bg-gray-300 " type="text" name="password"/>
                    </div>
                    <div className="flex">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded " onClick="">Submit</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-auto" onClick={(e) => switchSignup(e)}>SWITCH TO {isSIgnup ? 'SIGNIN' : 'SIGNUP'}</button>
                    </div>
                </form>
                
            </div>
        </div>
     );
}
 
export default Auth;