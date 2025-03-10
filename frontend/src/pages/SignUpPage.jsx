import { motion } from "framer-motion";
import Input from "../components/Input";
import { Loader, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";


const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { signup, error, isLoading, setUserEmail } = useAuthStore();
  const handleSignUp = async (e) => {
    e.preventDefault();
  
    if (!name || !email || !password) {
      toast.error("Please fill out all fields.");
      // alert("Please fill out all fields.");
      return;
    }
    const nameRegex = {
      length: /^.{4,}$/
      
    };
  
    if (!nameRegex.length.test(name)) {
      toast.error("Name must be at least 4 characters long.");
      return;
    }
    // Password validation rules
    const passwordRegex = {
      length: /^.{6,}$/,
      uppercase: /[A-Z]/,
      lowercase: /[a-z]/,
      number: /[0-9]/,
      specialChar: /[^A-Za-z0-9]/
    };
  
    if (!passwordRegex.length.test(password)) {
      toast.error("Password must be at least 6 characters long.");
      // alert("Password must be at least 6 characters long.");
      return;
    }
  
    if (!passwordRegex.uppercase.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      //alert("Password must contain at least one uppercase letter.");
      return;
    }
  
    if (!passwordRegex.lowercase.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      //alert("Password must contain at least one lowercase letter.");
      return;
    }
  
    if (!passwordRegex.number.test(password)) {
      toast.error("Password must contain at least one number.");
      //alert("Password must contain at least one number.");
      return;
    }
  
    if (!passwordRegex.specialChar.test(password)) {
      toast.error("Password must contain at least one special character.");
      //alert("Password must contain at least one special character.");
      return;
    }
  
    try {
      await signup(email, password, name);
      setUserEmail(email); // store email to state
      toast.success("Account created successfully. Please verify your email.");
      navigate("/verify-email");
    } catch (error) {
      console.error(error);
    }
  };
  
  // const handleSignUp = async (e) => {
  //   e.preventDefault();

  //   if (!name || !email || !password) {
  //     alert("Please fill out all fields.");
  //     return;
  //   }

  //   try {
  //     await signup(email, password, name);
  //     setUserEmail(email); // store email to state
  //     navigate("/verify-email");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Create Account
        </h2>

        <form onSubmit={handleSignUp}>
          <Input
            icon={User}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={Mail}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}

          <PasswordStrengthMeter password={password} />

          <motion.button
            className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader className="animate-spin mx-auto" size={24} />
            ) : (
              "Sign Up"
            )}
          </motion.button>
        </form>
      </div>

      <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <Link to={"/login"} className="text-green-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUpPage;
