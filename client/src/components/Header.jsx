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
      toast.success(response.data.message);
      onOpenChange(false);
    } catch (error) {
      toast.error(error.response.data.message || "email isn't found.");
    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("/api/auth/register", {
        name,
        email,
        password
      })

      toast.succes(response.data.message)
      alert("you can login now")
    } catch (error) {
      toast.error(error.response?.data?.message || "something went wrong.")
    }
  }

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

      <Button onPress={onOpen}>Login</Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className=" rounded shadow-xl border border-gray-200 bg-gray-100">
          {(onClose) => (
            <ModalBody>
              {login ? (<form onSubmit={handleSubmit} className='rounded flex backdrop-blur-m py-5 align-items-center justify-start flex-col gap-5'>
                <Link to="/">
                  <p className='text-3xl font-bold'>Login</p>
                </Link>
                <p>Welcome back racer.</p>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className=' border border-gray-300 p-2 rounded' placeholder='exemple@gmail.com' type="email" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} className=' border border-gray-300 p-2 rounded' placeholder='password' type="password" />
                <button className='bg-gray-300 border text-black border-none p-2 rounded hover:bg-gray-200 cursor-pointer' type='submit'>Login</button>
                <small>You can login with google.</small>
                <button className='rounded hover:bg-red-400 p-2 border-none bg-red-500 text-white cursor-pointer' type='button'>Google</button>
                <div className="cursor-pointer" onClick={() => navigateSignUp()}>
                  <p>You don't have an account racer ?  I got you <span className='text-blue-400 underline'>sign up</span> first.</p>
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
                  <button className='rounded hover:bg-red-400 p-2 border-none bg-red-500 hover:text-white cursor-pointer' type='button'>Google</button>
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