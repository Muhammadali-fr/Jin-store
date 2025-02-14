import {Link} from 'react-router-dom';

const Signup = () => {
    return (
        <div className='sign-up w-full mx-auto h-screen flex items-center justify-center'>
            <form className='rounded flex w-2/6 backdrop-blur-md bg-black/50 p-8 text-white align-items-center justify-start flex-col gap-5'>
                <Link to="/">
                    <p className='text-5xl font-bold'>Sign-up</p>
                </Link>
                <input className=' border border-gray-300 p-2 rounded' placeholder='nimadir..' type="text" />
                <input className=' border border-gray-300 p-2 rounded' placeholder='nimadir..' type="email" />
                <input className=' border border-gray-300 p-2 rounded' placeholder='nimadir..' type="password" />
                <button className='border border-black p-2 rounded hover:bg-black hover:text-white cursor-pointer' type='submit'>Sign up</button>
                <small>You can sign up with google.</small>
                <button className='border border-red-700 p-2 hover:bg-red-500 hover:text-white cursor-pointer' type='button'>Google</button>
                Link
            </form>

        </div>
    )
}

export default Signup