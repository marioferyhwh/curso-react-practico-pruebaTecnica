import { createContext, useEffect, useState } from "react";

const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  console.log("loginContextProvider");
  const [user, setUser] = useState({});
  const LoginUser = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };
  const Logout = () => {
    setUser(null);
    localStorage.setItem("user", "{}");
  };

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    const userBase = !userStorage ? {} : JSON.parse(userStorage);
    setUser(userBase);
  }, []);
  return (
    <LoginContext.Provider value={{ user, LoginUser, Logout }}>
      {children}
    </LoginContext.Provider>
  );
};
export { LoginContext, LoginContextProvider };
