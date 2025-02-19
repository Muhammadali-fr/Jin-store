import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get("/api/auth/profile")
            .then(({ data }) => {
                setUser(data);
            })
            .catch((error) => {
                console.error("Error fetching user:", error);
                setUser(null);
            });
    }, []); // `[]` qoldi, chunki `useEffect` faqat bir marta ishga tushishi kerak

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
