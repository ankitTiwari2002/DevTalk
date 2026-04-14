import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSignup = async () => {
    try {
      const user = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(user.data.data));
      navigate("/profile");
    } catch (err) {
      setError(err.response.data);
      console.log(err);
    }
  };

  const handleLogin = async () => {
    try {
      const user = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(user.data));
      navigate("/");
    } catch (err) {
      setError(err.response.data);
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background is now clean and formal */}

      <div className="max-w-md w-full relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-slate-900 rounded-2xl shadow-xl border border-slate-800 mb-4">
            <img src="/logo.png" alt="DevTalk Logo" className="w-12 h-12" />
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">
            DevTalk
          </h1>
          <p className="text-slate-400 font-medium">
            Connect with elite developers worldwide.
          </p>
        </div>

        <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            {isLoginForm ? "Welcome Back" : "Create Account"}
          </h2>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            {!isLoginForm && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 px-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter First Name..."
                    className="w-full bg-slate-800/50 text-white border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 px-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter Last Name..."
                    className="w-full bg-slate-800/50 text-white border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 px-1">
                Email Address
              </label>
              <input
                type="email"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                placeholder="Enter Email Address..."
                className="w-full bg-slate-800/50 text-white border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 px-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password..."
                className="w-full bg-slate-800/50 text-white border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                required
              />
            </div>

            {error && (
              <div className="bg-red-900/20 border border-red-500/50 rounded-xl p-3 text-red-400 text-sm font-medium">
                {error}
              </div>
            )}

            <button
              type="submit"
              onClick={isLoginForm ? handleLogin : handleSignup}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-500/20 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isLoginForm ? "Sign In" : "Get Started"}
            </button>
          </form>

          <div className="mt-8 text-center">
            <button
              className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
              onClick={() => {
                setIsLoginForm((value) => !value);
                setError("");
              }}
            >
              {isLoginForm
                ? "Don't have an account? Sign up"
                : "Already have an account? Sign in"}
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-slate-500 text-sm">
          Protected by enterprise-grade security.
        </p>
      </div>
    </div>
  );
};

export default Login;
