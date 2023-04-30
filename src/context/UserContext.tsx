import { User } from "firebase/auth";
import { ReactNode, createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener } from "../utils/firebase";

interface UserContextType {
  currentUser: User | null;
}

export const UserContext = createContext<UserContextType>({
  currentUser: null,
});

interface Props {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
};
