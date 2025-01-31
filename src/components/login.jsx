import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Remember Me:", rememberMe);

    navigate("/dashboard");
  };

  return (
    <div className="bg-white flex justify-start items-center min-h-screen pl-8">
      <div
        className="w-[453px]"
        style={{
          position: "absolute",
          top: "168px",
          left: "93px",
          gap: "22px",
          height: "auto",
        }}
      >
        <h2
          className="text-left text-4xl font-bold text-black mb-2 
          font-bricolage text-[40px] leading-[48px]"
        >
          Welcome back
        </h2>
        <p className="text-left text-sm text-gray-500 mb-6">
          Enter your credentials to login
        </p>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full max-w-xs px-4 py-1 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder=" "
            />
            <label
              htmlFor="username"
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-600 transition-all duration-200 ease-in-out ${
                username ? "text-transparent" : ""
              }`}
            >
              Fullnames
            </label>
          </div>

          <div className="relative mb-4">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full max-w-xs px-4 py-1 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-600 transition-all duration-200 ease-in-out ${
                email ? "text-transparent" : ""
              }`}
            >
              Email
            </label>
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full max-w-xs px-4 py-1 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder=" "
            />
            <label
              htmlFor="phone"
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-600 transition-all duration-200 ease-in-out ${
                phone ? "text-transparent" : ""
              }`}
            >
              Phone Number
            </label>
          </div>

          <div className="relative mb-6">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full max-w-xs px-4 py-1 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-600 transition-all duration-200 ease-in-out ${
                password ? "text-transparent" : ""
              }`}
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full max-w-xs py-2 bg-yellow-500 text-black font-semibold rounded-[30px] hover:bg-yellow-600 transition-colors"
          >
            Login
          </button>
        </form>

        <div className="flex items-center space-x-24 mt-4 text-sm">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-1"
            />
            <label htmlFor="rememberMe" className="text-gray-400">
              Remember me
            </label>
          </div>

          <div className="text-gray-400 hover:underline">
            <a href="#">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
