import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

// auth 
import AuthModal from "./AuthModal";

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

const Header = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();


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

        <Button className="bg-violet-700 text-white rounded px-7" onPress={onOpen}>Login</Button>
      </div>

      {isOpen && (
        <AuthModal />
      )}
    </nav>
  );
};

export default Header;
