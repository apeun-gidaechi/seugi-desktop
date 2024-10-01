import React, { createContext, PropsWithChildren, useContext, useState, useEffect } from "react";

interface UserContextType {
    id: number;
    email: string;
    birth: string;
    name: string;
    picture: string;
}

type UserDispatchContextType = (user: UserContextType | null) => void;

const UserContext = createContext<UserContextType | null>(null);
const UserDispatchContext = createContext<UserDispatchContextType | null>(null);

interface Props extends PropsWithChildren { }

export const UserContextProvider = ({ children }: Props) => {
    const [user, setUser] = useState<UserContextType | null>(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    return (
        <UserContext.Provider value={user}>
            <UserDispatchContext.Provider value={setUser}>
                {children}
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const user = useContext(UserContext);
    return user;
};

export const useUserDispatchContext = () => {
    const setUser = useContext(UserDispatchContext);
    if (setUser == null) {
        throw new Error();
    }
    return setUser;
};
