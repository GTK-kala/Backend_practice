import { createContext, useEffect, useState } from "react";

export const ContextApi = createContext(null);

const ContextProvide = (props) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const ContextValue = {
    id,
    role,
    name,
    isLoggedIn,
    setId,
    setRole,
    setName,
    setIsLoggedIn,
  };
  useEffect(() => {
    const FetchData = async () => {
      try {
        const url = "http://localhost:3001/auth/verify";

        const response = await fetch(url, {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          console.log("Failed to verify user");
          setIsLoggedIn(false);
          return;
        }

        const data = await response.json();

        const user = data.user;

        setId(user.id);
        setName(user.name);
        setRole(user.role);
        setIsLoggedIn(true);
      } catch (error) {
        console.log("Verify Error:", error);
        setIsLoggedIn(false);
      }
    };
    FetchData();
  }, [isLoggedIn]);
  return (
    <ContextApi.Provider value={ContextValue}>
      {props.children}
    </ContextApi.Provider>
  );
};

export default ContextProvide;
