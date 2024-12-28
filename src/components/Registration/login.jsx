import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/userApiService"; 
import {jwtDecode} from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(null); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {

      const data = {
        username: username,
        password: password,
      };

      const response = await login(data);
      const decoded = jwtDecode(response);

      localStorage.setItem("token", response);
      localStorage.setItem("username", decoded.sub);

      navigate("/movies"); 
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8  mt-[6vh]">
      <div className="sm:mx-auto p-10 sm:w-full sm:max-w-sm bg-black bg-opacity-50 pb-[20vh]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-4xl/9 font-bold tracking-tight text-white">
            Sign in
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form method="POST" className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm/6 font-medium text-white"
              >
                User Name
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} 
                  autoComplete="username"
                  className="block w-full rounded-md bg-white-opacity-50 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-400 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-white"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white-opacity-50 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-white focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-400 sm:text-sm/6"
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-yellow-400 shadow-sm hover:transition-colors transition-duration-600 hover:bg-yellow-400 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="font-semibold text-blue-300 hover:text-blue-400"
            >
              Start a 14 day free trial
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
