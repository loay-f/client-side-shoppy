import axios from "axios";
import { useState } from "react";
import { NavLink, redirect, useNavigate } from "react-router-dom";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const loginSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData.entries());

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    const isEmailValid = emailRegex.test(inputs.email);
    const isPasswordValid = passwordRegex.test(inputs.password);

    if (!inputs.email || !inputs.password) {
      // checks if inputs are empty
      setErrorMessage("please fill all inputs");
    } else if (!isEmailValid) {
      // Is email valid
      setErrorMessage("please enter a valid email");
    // } else if (isPasswordValid) {
      // Is password valid
      // setErrorMessage("please enter a valid password");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:3000/login",
          inputs
        );
        // Handle successful login, e.g., store tokens, redirect user
        console.log("Login successful:", response.data);
        const token = response.data.token;
        localStorage.setItem("authToken", token); // Store the token in localStorage
        navigate("/")
      } catch (err) {
        // Handle errors
        console.error("Login error:", err);
      }
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center items-center bg-gray-50 px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-5xl text-center font-blod font-serif">Shoppy</h1>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 mx-auto w-full max-w-sm">
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={loginSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <NavLink
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </NavLink>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                />
              </div>
            </div>

            <div className="text-red my-0">{errorMessage}</div>

            <div>
              <button
                type="submit"
                className={`flex w-full justify-center rounded-md bg-indigo-600 disabled:bg-gray-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <NavLink
              to={"/register"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Creat account
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
