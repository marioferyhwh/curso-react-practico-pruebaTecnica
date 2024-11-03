import { useContext, useState } from "react";
import Layout from "../../Components/Layout";
import { LoginContext } from "../../Context/login";

function SignIn() {
  const { user, LoginUser, Logout } = useContext(LoginContext);
  if (!user?.email) {
    const [email, setEmail] = useState("");
    const [clave, setClave] = useState("");
    return (
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">Login</h1>
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Clave"
            className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
          />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              LoginUser({ email, clave });
            }}
            className="w-full rounded-lg border border-black text-white  bg-blue-500 py-2"
          >
            Login
          </button>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Log Out</h1>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          Logout();
        }}
        className="w-full rounded-lg border border-black text-white bg-red-400 py-2"
      >
        Log Out
      </button>
    </Layout>
  );
}

export default SignIn;
