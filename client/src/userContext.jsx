import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await axios.get("/api/auth/profile", { withCredentials: true });
                console.log("Foydalanuvchi ma’lumoti:", data);
                setUser(data);
            } catch (error) {
                console.error("Profil ma’lumotlarini olishda xatolik:", error);
            }
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
