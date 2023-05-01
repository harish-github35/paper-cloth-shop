import { User } from "firebase/auth";
import { ReactNode, createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener } from "../utils/firebase";

interface UserContextType {
  currentUser: User | null;
}

export const UserContext = createContext<UserContextType>({
  currentUser: null,
});

interface Action {
  type: "SET_USER";
  payload: User | null;
}

const userReducer = (user: User | null, action: Action): User | null => {
  const { type, payload } = action;
  switch (type) {
    case "SET_USER":
      return payload;
    default:
      return user;
  }
};

interface Props {
  children: ReactNode;
}
export const UserContextProvider = ({ children }: Props) => {
  // const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentUser, dispatch] = useReducer(userReducer, {} as User);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      dispatch({ type: "SET_USER", payload: user });
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
};
