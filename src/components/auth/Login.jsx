import { useAuth } from "@contexts/AuthContext";
import Google from "@public/images/icons/google.svg";
import Logo from "@public/images/logo-big.svg";
import SignIn from "@public/images/sign-in.webp";
import { message } from "antd"; // Import Ant Design's message API
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";

const users = [
  { username: "akash", password: "akash123", role: "superadmin" },
  { username: "admin", password: "admin123", role: "admin" },
  { username: "doctor", password: "doc123", role: "doctor" },
  { username: "patient", password: "patient123", role: "patient" },
  { username: "newaz.blinto@gmail.com", password: "newaz", role: "admin" },
];

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // For managing loading state
  const [buttonDisabled, setButtonDisabled] = useState(false); // For controlling button state

  // Use Ant Design's message API
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    message.loading("Logging in...");

    // Fake authentication
    const foundUser = users.find(
      (user) =>
        user.username === form.username && user.password === form.password
    );

    if (!foundUser) {
      message.error("Invalid username or password");
      setLoading(false);
      return;
    }

    const token = "fake-token-123"; // This would normally be a JWT
    login(token, foundUser.role); // Pass the role to login function

    message.success("Login successful");
    navigate("/admin"); // Redirect after login

    setLoading(false);
  };

  return (
    <>
      {contextHolder} {/* Render message context */}
      {/* Light/Dark Mode Button */}
      <button
        type="button"
        className="light-dark-toggle leading-none inline-block transition-all text-[#fe7a36] absolute top-[20px] md:top-[25px] ltr:right-[20px] rtl:left-[20px] ltr:md:right-[25px] rtl:md:left-[25px]"
        onClick={toggleDarkMode}
      >
        <i className="material-symbols-outlined !text-[20px] md:!text-[22px]">
          {isDarkMode ? "dark_mode" : "light_mode"}
        </i>
      </button>
      {/* Sign In Form */}
      <div className="bg-white dark:bg-[#0a0e19] py-[60px] md:py-[80px] lg:py-[135px]">
        <div className="mx-auto px-[12.5px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1255px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px] items-center">
            <div className="xl:ltr:-mr-[25px] xl:rtl:-ml-[25px] 2xl:ltr:-mr-[45px] 2xl:rtl:-ml-[45px] rounded-[25px] order-2 lg:order-1">
              <img
                src={SignIn}
                alt="sign-in-image"
                className="rounded-[25px]"
                loading="lazy"
              />
            </div>
            <div className="xl:ltr:pl-[90px] xl:rtl:pr-[90px] 2xl:ltr:pl-[120px] 2xl:rtl:pr-[120px] order-1 lg:order-2">
              <img src={Logo} alt="logo" className="inline-block dark:hidden" />
              <img src={Logo} alt="logo" className="hidden dark:inline-block" />
              <div className="my-[17px] md:my-[32px]">
                <h1 className="font-semibold text-[22px] md:text-xl lg:text-2xl mb-[5px] md:mb-[7px]">
                  Sign In
                </h1>
                <p className="font-regular lg:text-md text-[#6C757D] dark:text-gray-400 leading-[24px]">
                  Sign in to access your dashboard, manage appointments, and
                  keep everything running smoothly
                </p>
              </div>
              <div className="flex items-center justify-between mb-[20px] md:mb-[23px] gap-[12px]">
                <div className="grow">
                  <div className="text-center w-full rounded-md transition-all py-[8px] md:py-[12px] px-[15px] md:px-[25px] text-black dark:text-white border border-[#D6DAE1] bg-white dark:bg-[#0a0e19] dark:border-[#172036] shadow-sm hover:border-primary-500 cursor-pointer flex items-center justify-center gap-[10px]">
                    <img
                      src={Google}
                      className="w-5 h-5 object-contain"
                      alt="google"
                    />
                    <span className="font-medium lg:text-md text-[#1E1E1E] dark:text-gray-400">
                      Sign in with Google
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-[15px] relative">
                <label className="mb-[5px] text-base md:mb-[5px] text-black dark:text-white font-medium block">
                  Email / Username
                </label>
                <input
                  type="text"
                  onChange={(e) =>
                    setForm({ ...form, username: e.target.value })
                  }
                  className="h-[45px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                  placeholder=""
                />
              </div>
              <div className="mb-[8px] relative" id="passwordHideShow">
                <label className="mb-[5px] md:mb-[5px] text-base text-black dark:text-white font-medium block">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                    className="h-[45px] rounded-md text-black dark:text-white border border-gray-200 dark:border-[#172036] bg-white dark:bg-[#0c1427] px-[17px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500"
                    id="password"
                    placeholder=""
                  />
                  <button
                    className="absolute top-1/2 -translate-y-1/2 text-lg ltr:right-[20px] rtl:left-[20px]  transition-all hover:text-primary-500"
                    onClick={togglePasswordVisibility}
                    type="button"
                  >
                    <i
                      className={`ri-eye${showPassword ? "" : "-off"}-line`}
                    ></i>
                  </button>
                </div>
              </div>
              <a
                href="forgot-password.html"
                className="inline-block text-primary-500 transition-all font-regular text-base hover:underline"
              >
                Forgot Password?
              </a>
              <button
                onClick={handleSubmit}
                disabled={buttonDisabled} // Disable button during login
                className={`md:text-md block w-full text-center transition-all rounded-md font-medium mt-[20px] md:mt-[24px] py-[12px] px-[25px] text-white ${
                  buttonDisabled
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-primary-500"
                } hover:bg-primary-400`}
              >
                <span className="flex items-center justify-center gap-[5px]">
                  {/* <i className="material-symbols-outlined">login</i> */}
                  Sign In
                </span>
              </button>
              <p className="mt-[15px] md:mt-[24px]">
                Don’t have an account?{" "}
                <Link
                  to={"/register"}
                  className="text-primary-500 transition-all font-semibold hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
