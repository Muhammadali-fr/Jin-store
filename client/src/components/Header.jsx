import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";

// toast
import toast from "react-hot-toast";

// ui 
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@heroui/react";

// assets 
import EmailSvg from "../assets/email.png";
import googleSvg from "../assets/google.png";

const Header = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password
      });
      toast.promise(
        new Promise((resolve) => setTimeout(() => resolve(response.data.message), 800)),
        {
          loading: "Signing in account...",
          success: response.data.message,
          error: "Could not create account.",
        }
      );
      onOpenChange(false);
    } catch (error) {
      toast.error(error.response.data.message || "email isn't found.");
    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/register", {
        name,
        email,
        password,
      });

      toast.promise(
        new Promise((resolve) => setTimeout(() => resolve(response.data.message), 800)),
        {
          loading: "Creating account...",
          success: response.data.message,
          error: "Could not create account.",
        }
      );

      setLogin(true);
      onOpenChange(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong.");
    }
  };

  const navigateSignUp = () => {
    if (login) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  }

  return (
    <nav className="container mx-auto flex items-center justify-between gap-3 py-5" >
      <Link to="/">
        <h1>Logo</h1>
      </Link>

      <Button className="bg-violet-700 text-white rounded px-7" onPress={onOpen}>Login</Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className=" rounded-2xl shadow-xl border border-gray-400 bg-gray-100">
          {(
            <ModalBody>
              {login ? (<form onSubmit={handleSubmit} className='rounded flex backdrop-blur-m py-5 align-items-center justify-start flex-col gap-5'>
                <Link to="/">
                  <p className='text-4xl font-extrabold text-center font-hello'>Hello!</p>
                </Link>
                <p className="text-gray-600 text-center">Welcome back racer.</p>
                <input autoFocus value={email} onChange={(e) => setEmail(e.target.value)} className=' border border-gray-300 p-3 rounded-2xl' placeholder='exemple@gmail.com' type="email" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} className=' border border-gray-300 rounded-2xl p-3' placeholder='password' type="password" />
                <button className='bg-[#2c2f44] hover:bg-gray-500 border text-white font-bold border-none py-3 rounded-2xl cursor-pointer flex items-center justify-between p-5 font-hello' type='submit'> <img className="w-5" src={EmailSvg} alt="google" /> Sign in <span></span></button>
                <small className="text-gray-700">You can login with google.</small>
                <button className='bg-[#D0D2DE] hover:bg-gray-200 py-3 rounded-2xl border-none text-black cursor-pointer flex items-center justify-between p-5 font-extrabold font-hello' type='button'> <img className="w-5" src={googleSvg} alt="email" />Continue with Google <span></span></button>
                <div className="cursor-pointer" onClick={() => navigateSignUp()}>
                  <p className="text-gray-700">You don't have an account racer ?  I got you <span className='text-black underline'>sign up</span> first.</p>
                </div>
              </form>)
                :
                (<form onSubmit={(e) => handleSignUp(e)} className='rounded flex py-5 align-items-center justify-start flex-col gap-5'>
                  <Link to="/">
                    <p className='text-3xl font-bold'>Sign-up</p>
                  </Link>
                  <input required value={name} onChange={e => setName(e.target.value)} className=' border border-gray-300 p-2 rounded' placeholder='Muhammadali' type="text" />
                  <input required value={email} onChange={e => setEmail(e.target.value)} className=' border border-gray-300 p-2 rounded' placeholder='exemple@gmail.com' type="email" />
                  <input required value={password} onChange={e => setPassword(e.target.value)} className=' border border-gray-300 p-2 rounded' placeholder='password' type="password" />
                  <button className='bg-gray-300 border text-black border-none p-2 rounded hover:bg-gray-200 cursor-pointer' type='submit'>Sign up</button>
                  <small>You can sign up with google.</small>
                  <button className='rounded hover:bg-red-400 p-2 border-none bg-red-500 text-white cursor-pointer' type='button'>Google</button>
                  <div className="cursor-pointer" onClick={() => navigateSignUp()}>
                    <p>Already have an account <span className='text-blue-400 underline'>sign up</span>.</p>
                  </div>
                </form>)}
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </nav>
  )
}

export default Header