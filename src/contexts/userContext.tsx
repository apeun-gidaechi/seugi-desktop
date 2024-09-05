import React, { createContext, PropsWithChildren, useContext, useState } from "react";

interface UserContextType {
    id: number;
    email: string;
    birth: string;
    name: string;
    picture: string;
}

// interface UserDispatchContextType extends React.Dispatch<React.SetStateAction<UserContextType | null>> { }

type UserDispatchContextType = (user: UserContextType) => void;

const UserContext = createContext<UserContextType | null>(null);
const UserDispatchContext = createContext<UserDispatchContextType | null>(null);

interface Props extends PropsWithChildren { }

export const UserContextProvider = ({ children }: Props) => {
    const [user, setUser] = useState<UserContextType | null>(null);
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
    if (user == null) {
        throw new Error();
    }
    return user;
}

export const useUserDispatchContext = () => {
    const setUser = useContext(UserDispatchContext);
    if (setUser == null) {
        throw new Error();
    }
    return setUser;
}