import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post("/api/auth/register", {
                name,
                email,
                password
            })

            alert("you can login now")
        } catch (error) {
            alert(error, "error while signing up.")
        }
    }

    return (
        <div className='sign-up w-full mx-auto h-screen flex items-center justify-center'>
            <form onSubmit={(e) => handleSubmit(e)} className='rounded flex w-2/6 backdrop-blur-md bg-black/50 p-8 text-white align-items-center justify-start flex-col gap-5'>
                <Link to="/">
                    <p className='text-5xl font-bold'>Sign-up</p>
                </Link>
                <input required value={name} onChange={e => setName(e.target.value)} className=' border border-gray-300 p-2 rounded' placeholder='Muhammadali' type="text" />
                <input required value={email} onChange={e => setEmail(e.target.value)} className=' border border-gray-300 p-2 rounded' placeholder='exemple@gmail.com' type="email" />
                <input required value={password} onChange={e => setPassword(e.target.value)} className=' border border-gray-300 p-2 rounded' placeholder='password' type="password" />
                <button className='bg-white text-black border-none p-2 rounded hover:bg-gray-200 cursor-pointer' type='submit'>Sign up</button>
                <small>You can sign up with google.</small>
                <button className='rounded hover:bg-red-400 p-2 border-none bg-red-500 hover:text-white cursor-pointer' type='button'>Google</button>
                <Link to="/login">
                    <p>Already have an account <span className='text-blue-400 underline'>sign up</span>.</p>
                </Link>
            </form>

        </div>
    )
}

export default Signup