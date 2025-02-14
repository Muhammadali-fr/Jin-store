import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='login w-full mx-auto h-screen flex items-center justify-center'>
            <form className='rounded flex w-2/6 backdrop-blur-md bg-black/50 p-8 text-white align-items-center justify-start flex-col gap-5'>
                <Link to="/">
                    <p className='text-5xl font-bold'>Login</p>
                </Link>
                <p>Welcome back racer.</p>
                <input className=' border border-gray-300 p-2 rounded' placeholder='exemple@gmail.com' type="email" />
                <input className=' border border-gray-300 p-2 rounded' placeholder='password' type="password" />
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