import { createContext, useEffect } from "react";

const LoginContext = createContext();

const LoginContextProvider = ({ Children }) => {
  const [user, setUser] = useState({});

  const LoginUser = (user) => {
    setUser(user);
    localStorage.setItem("user", user);
  };
  const Logout = () => {
    setUser(null);
  };

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    const userBase = !userStorage ? {} : JSON.parse(userStorage);
    setUser(userBase);
  }, []);
  return (
    <LoginContext.Provider value={(user, LoginUser, Logout)}>
      {Children}
    </LoginContext.Provider>
  );
};
export { LoginContext, LoginContextProvider };
