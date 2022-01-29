import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react'
import React from 'react';
import axios from "axios"

import { Link } from "react-router-dom";

function Login() {
    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
    return (
       <>
       <Header/>
       <div className="py-6">
  <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div className="hidden lg:block lg:w-1/2 bg-cover" style={{background:`url("https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80")`}}></div>
        <form onSubmit={handleSubmit}  className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">Welcome Back!</h2>
            
           
            <div  className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 lg:w-1/4"></span>
                <p className='text-blueGray text-xl'>Login with email</p>
                <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="mt-4">
            <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                </div>
                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" name="email" type="email" value={data.email} onChange={handleChange} placeholder="jesse@example.com"/>
            </div>
            <div className="mt-4">
                <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    
                </div>
                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" name="password" type="password" value={data.password} onChange={handleChange}/>
            </div>
            <div className="mt-8">
                <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <Link to="/signup" className="text-xs text-gray-500 uppercase">or sign up</Link>
                <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
            {error && alert(error)}
        </form>

    </div>
</div>
       <Footer className="bottom-0"/>
       </>
    )
}

export default Login
