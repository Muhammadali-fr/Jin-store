import React, { useState } from "react";

const SidebarLayout = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="flex h-screen">
            <div
                className={`${isOpen ? "w-64" : "w-16"
                    } bg-gray-800 text-white h-screen transition-all duration-300`}
            >
                <button
                    className="p-4 focus:outline-none w-full text-left"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "X" : "☰"}
                </button>
                {isOpen && (
                    <ul className="px-4 flex justify-center flex-col">
                        <li className="mb-2 p-2 hover:bg-gray-700 rounded cursor-pointer">
                            Home
                        </li>   
                        <li className="mb-2 p-2 hover:bg-gray-700 rounded cursor-pointer">
                            About
                        </li>
                        <li className="mb-2 p-2 hover:bg-gray-700 rounded cursor-pointer">
                            Contact
                        </li>
                    </ul>
                )}
            </div>

            <div className="flex-1 container mx-auto py-6 bg-gray-100">

            </div>
        </div>
    );
};

export default SidebarLayout;
