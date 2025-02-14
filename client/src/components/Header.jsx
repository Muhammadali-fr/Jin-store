import { Link } from "react-router-dom"


// assets 
import Logo from "../assets/Logo.svg";
import Search from "../assets/search.svg";
import user from "../assets/user.svg";
import heart from "../assets/heart.svg";
import bag from "../assets/bag.svg";

const Header = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between gap-3 py-5" >
      <img src={Logo} alt="logo" />
      <div className="w-5/6 flex">
        <input className="w-full bg-gray-200 p-2 outline-0 rounded" placeholder="Search for products, categories or brands..." type="text" />
        <img className="relative right-8 cursor-pointer" src={Search} alt="search" />
      </div>

        <div className="flex items-center justify-center gap-1">
          <img src={user} alt="user" />
          <div>
            <p className="text-sm">Sign In</p>
            <p className="font-bold">Account</p>
          </div>
        </div>

        <Link>
          <img src={heart} alt="heart" />
        </Link>

        <Link>
          <img src={bag} alt="bag" />
        </Link>
    </nav>
  )
}

export default Header