import { createContext, useState, useEffect } from "react";

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
    const token = localStorage.getItem("auth_token");
    try {
      const url = "http://localhost:3001/auth/verify";
      const res = fetch(url, {
        method: "GET",
        headers: {
          authorization: `${token}`,
        },
        // credentials : "include"
      });
      const data = res.json();
      const user = data.user;
      setId(user.users_id);
      setName(user.name);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  }, [isLoggedIn]);
  return (
    <ContextApi.Provider value={ContextValue}>
      {props.children}
    </ContextApi.Provider>
  );
};

export default ContextProvide;
