import React, { useState } from "react";

const provincesData = [
  {
    name: "Kigali",
    districts: ["Kigali City Centre", "Nyarugenge", "Kicukiro", "Gasabo"],
  },
  {
    name: "Northern Province",
    districts: ["Musanze", "Gakenke", "Rulindo", "Burera"],
  },
  {
    name: "Western Province",
    districts: ["Rubavu", "Nyabihu", "Rutsiro", "Karongi"],
  },
  {
    name: "Southern Province",
    districts: ["Huye", "Muhanga", "Nyanza", "Kamonyi"],
  },
  {
    name: "Eastern Province",
    districts: ["Nyagatare", "Kayonza", "Gatsibo", "Kirehe"],
  },
];

const LoginRegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
    setSelectedDistrict("");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-tr from-blue-100 via-white to-blue-200">
      <div className="flex justify-center items-center w-full max-w-7xl">
        <div
          className={`flex justify-center items-center w-full p-8 transition-all duration-500 ${
            isRegistering ? "lg:w-[700px]" : "lg:w-[600px]"
          }`}
        >
          <div className="bg-white rounded-lg p-10 flex w-full">
            <div className="w-full">
              <div className="text-center mb-6">
                <img
                  src="logo.png"
                  alt="IGA Tech Logo"
                  className="mx-auto h-12 w-auto object-contain mb-4"
                />
                <h2 className="text-3xl font-bold text-gray-800">
                  Welcome to IGA Tech
                </h2>
              </div>
              <form>
                {isLogin ? (
                  <>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 mt-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="password" className="block text-gray-700">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-2 mt-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your password"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                      Login
                    </button>
                  </>
                ) : (
                  <>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 mt-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="password" className="block text-gray-700">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-2 mt-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Create a password"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="confirmPassword"
                        className="block text-gray-700"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        className="w-full px-4 py-2 mt-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Confirm your password"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="gender" className="block text-gray-700">
                        Gender
                      </label>
                      <select
                        id="gender"
                        className="w-full px-4 py-2 mt-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 mt-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="dob" className="block text-gray-700">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        id="dob"
                        className="w-full px-4 py-2 mt-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="province" className="block text-gray-700">
                        Province
                      </label>
                      <select
                        id="province"
                        className="w-full px-4 py-2 mt-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={selectedProvince}
                        onChange={handleProvinceChange}
                      >
                        <option value="">Select Province</option>
                        {provincesData.map((province, index) => (
                          <option key={index} value={province.name}>
                            {province.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {selectedProvince && (
                      <div className="mb-4">
                        <label
                          htmlFor="district"
                          className="block text-gray-700"
                        >
                          District
                        </label>
                        <select
                          id="district"
                          className="w-full px-4 py-2 mt-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          value={selectedDistrict}
                          onChange={(e) => setSelectedDistrict(e.target.value)}
                        >
                          <option value="">Select District</option>
                          {provincesData
                            .find(
                              (province) => province.name === selectedProvince
                            )
                            ?.districts.map((district, index) => (
                              <option key={index} value={district}>
                                {district}
                              </option>
                            ))}
                        </select>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                      Register
                    </button>
                  </>
                )}
              </form>

              <div className="mt-4 text-center">
                <button
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setIsRegistering(!isRegistering);
                  }}
                  className="text-blue-600 hover:underline"
                >
                  {isLogin
                    ? "Don't have an account? Register"
                    : "Already have an account? Login"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
