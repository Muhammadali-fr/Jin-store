import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

// ui
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@heroui/react";


// Assets 
import EmailSvg from "../assets/email.png";
import googleSvg from "../assets/google.png";

// context 
import { UserContext } from "../userContext";


const Header = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);
  const { user } = useContext(UserContext);

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
      toast.error(error.response?.data?.message || "Email isn't found.");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/register", {
        name,
        email,
        password,
      });

      toast("You signed up successfully. Please log in.", {
        duration: 6000,
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
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong.");
    }
  };

  const navigateSignUp = () => {
    setLogin(!login);
  };

  return (
    <nav className="container mx-auto">
      <div className="flex items-center justify-between gap-3 p-2">
        <Link to="/">
          <h1>Logo</h1>
        </Link>

        <ul className="flex items-center justify-center gap-3">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        {!user &&
          <Button className="bg-violet-700 text-white rounded px-7" onPress={onOpen}>Login</Button>
        }
        
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur  flex items-center justify-center z-50">
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className="rounded-2xl shadow-xl border border-gray-400 bg-white">
              <ModalBody>
                {login ? (
                  <form onSubmit={handleSubmit} className="rounded flex py-5 flex-col gap-5">
                    <p className="text-4xl font-extrabold text-center">Hello!</p>
                    <p className="text-gray-600 text-center">Welcome back racer.</p>
                    <input
                      autoFocus
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border border-gray-300 p-3 rounded-2xl"
                      placeholder="example@gmail.com"
                      type="email"
                    />
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border border-gray-300 rounded-2xl p-3"
                      placeholder="password"
                      type="password"
                    />
                    <button className="bg-[#2c2f44] hover:bg-gray-500 text-white font-bold py-3 rounded-2xl cursor-pointer flex items-center justify-center p-5" type="submit">
                      <img className="w-5 mr-2" src={EmailSvg} alt="email" /> Sign in
                    </button>
                    <small className="text-gray-700">You can login with Google.</small>
                    <button className="bg-[#D0D2DE] hover:bg-gray-200 py-3 rounded-2xl text-black cursor-pointer flex items-center justify-center p-5 font-extrabold" type="button">
                      <img className="w-5 mr-2" src={googleSvg} alt="google" /> Continue with Google
                    </button>
                    <div className="cursor-pointer" onClick={navigateSignUp}>
                      <p className="text-gray-700">
                        Don't have an account? <span className="text-black underline">Sign up</span> first.
                      </p>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleSignUp} className="rounded flex py-5 flex-col gap-5">
                    <p className="text-4xl font-extrabold text-center">Sign-up</p>
                    <p className="text-center text-gray-500">Continue with email.</p>
                    <input required value={name} onChange={e => setName(e.target.value)} className="border border-gray-300 p-3 rounded-2xl" placeholder="Your Name" type="text" />
                    <input required value={email} onChange={e => setEmail(e.target.value)} className="border border-gray-300 p-3 rounded-2xl" placeholder="example@gmail.com" type="email" />
                    <input required value={password} onChange={e => setPassword(e.target.value)} className="border border-gray-300 p-3 rounded-2xl" placeholder="password" type="password" />
                    <button className="bg-[#2c2f44] hover:bg-gray-500 text-white font-bold py-3 rounded-2xl cursor-pointer flex items-center justify-center p-5" type="submit">
                      <img className="w-5 mr-2" src={EmailSvg} alt="email" /> Sign up
                    </button>
                    <small className="text-gray-500">You can sign up with Google.</small>
                    <button className="bg-[#D0D2DE] hover:bg-gray-200 py-3 rounded-2xl text-black cursor-pointer flex items-center justify-center p-5 font-extrabold" type="button">
                      <img className="w-5 mr-2" src={googleSvg} alt="google" /> Continue with Google
                    </button>
                    <div className="cursor-pointer" onClick={navigateSignUp}>
                      <p className="text-gray-500">
                        Already have an account? <span className="text-black underline">Sign in</span>.
                      </p>
                    </div>
                  </form>
                )}
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      )}
    </nav>
  );
};

export default Header;
