import { ReactNode, createContext, useContext, useState } from "react";

interface IUserContextData {
  user: {
    id: string;
    name: string;
    role: string;
  };
  updateUser: (key: "id" | "name" | "role", value: string) => void;
}

const UserContext = createContext({} as IUserContextData);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState({
    id: "1",
    name: "José",
    role: "admin",
  });

  function updateUser(key: keyof typeof user, value: string) {
    setUser((currentState) => {
      return {
        ...currentState,
        [key]: value,
      };
    });
  }

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

function useUser(): IUserContextData {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within an AuthProvider.");
  }

  return context;
}

export { UserProvider, useUser };
