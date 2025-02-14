import React from 'react'

const Signup = () => {
    return (
        <div  className='sign-up w-full mx-auto h-screen flex items-center justify-center'>
            <form className='flex w-96 text-white align-items-center justify-start flex-col gap-5'>
                <p className='text-5xl font-bold'>Sign-up</p>
                <input className='bg-gray-200 border border-gray-300 p-2 rounded' placeholder='nimadir..' type="text" />
                <input className='bg-gray-200 border border-gray-300 p-2 rounded' placeholder='nimadir..' type="email" />
                <input className='bg-gray-200 border border-gray-300 p-2 rounded' placeholder='nimadir..' type="password" />
                <button className='border border-black p-2 rounded hover:bg-black hover:text-white cursor-pointer' type='submit'>Sign up</button>
                <small>You can sign up with google.</small>
                <button className='border border-red-700 p-2 hover:bg-red-500 hover:text-white cursor-pointer' type='button'>Google</button>
            </form>

        </div>
    )
}

export default Signup