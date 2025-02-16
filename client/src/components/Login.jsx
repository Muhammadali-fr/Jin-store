import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

// toast 
import toast from "react-hot-toast"

const Signup = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/auth/login", {
                email,
                password
            })
            toast.success(response.data.message);
            navigate("/");
        } catch (error) {
            alert("you can't  logged in", error);
        }
    }

    return (
        <div className='login w-full mx-auto h-screen flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='rounded flex w-2/6 backdrop-blur-md bg-black/50 p-8 text-white align-items-center justify-start flex-col gap-5'>
                <Link to="/">
                    <p className='text-5xl font-bold'>Login</p>
                </Link>
                <p>Welcome back racer.</p>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className=' border border-gray-300 p-2 rounded' placeholder='exemple@gmail.com' type="email" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} className=' border border-gray-300 p-2 rounded' placeholder='password' type="password" />
                <button className='bg-white text-black border-none p-2 rounded hover:bg-gray-200 cursor-pointer' type='submit'>Sign up</button>
                <small>You can login with google.</small>
                <button className='rounded hover:bg-red-400 p-2 border-none bg-red-500 hover:text-white cursor-pointer' type='button'>Google</button>
                <Link to="/sign-up">
                    <p>You don't have an account racer, I got you <span className='text-blue-400 underline'>sign up</span> first.</p>
                </Link>
            </form>

        </div>
    )
}

export default Signup