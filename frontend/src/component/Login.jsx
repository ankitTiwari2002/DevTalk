import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiUser, FiArrowRight, FiGithub, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSignup = async () => {
    setIsLoading(true);
    setError("");
    try {
      const user = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(user.data.data));
      navigate("/profile");
    } catch (err) {
      setError(err.response?.data || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async () => {
    setIsLoading(true);
    setError("");
    try {
      const user = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(user.data));
      navigate("/");
    } catch (err) {
      setError(err.response?.data || "Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleForm = () => {
    setIsLoginForm((prev) => !prev);
    setError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 60% 0%, #0f172a 0%, #070b14 60%, #030508 100%)" }}>

      {/* Ambient glows */}
      <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[500px] h-[260px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.13) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[380px] h-[180px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)" }} />

      {/* Card wrapper */}
      <div className={`relative z-10 w-full max-w-[380px] mx-4 transition-all duration-700 ease-out ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}>

        {/* ── Card ── */}
        <div style={{
          background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          boxShadow: "0 32px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03) inset",
          padding: "32px 28px 28px",
          backdropFilter: "blur(24px)",
        }}>

          {/* Card header */}
          <div className="mb-6">
            <div className="flex items-center gap-2.5 mb-5">
              <div style={{
                width: 32, height: 32, borderRadius: 10,
                background: "linear-gradient(135deg, #6366f1, #818cf8)",
                boxShadow: "0 4px 12px rgba(99,102,241,0.4)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <span className="text-white font-bold" style={{ fontSize: 11, letterSpacing: "0.03em" }}>DT</span>
              </div>
              <span className="text-slate-300 font-semibold text-[13px] tracking-wide">DevTalk</span>
            </div>
            <h1 className="text-white font-bold tracking-tight" style={{ fontSize: "1.15rem", marginBottom: 4 }}>
              {isLoginForm ? "Welcome back" : "Create an account"}
            </h1>
            <p className="text-slate-500" style={{ fontSize: "11.5px" }}>
              {isLoginForm ? "Sign in to continue to your account." : "Join thousands of developers today."}
            </p>
          </div>

          {/* ── Form ── */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-3">

            {/* Name row — signup only */}
            <div className={`grid grid-cols-2 gap-2.5 overflow-hidden transition-all duration-500 ease-in-out ${
              isLoginForm ? "max-h-0 opacity-0 pointer-events-none" : "max-h-24 opacity-100"
            }`}>
              {[
                { val: firstName, set: setFirstName, ph: "First name" },
                { val: lastName,  set: setLastName,  ph: "Last name"  },
              ].map(({ val, set, ph }) => (
                <div key={ph} className="group relative">
                  <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-600 group-focus-within:text-indigo-400 transition-colors pointer-events-none" />
                  <input
                    type="text" value={val} onChange={(e) => set(e.target.value)} placeholder={ph}
                    className="w-full text-slate-100 text-[12px] pl-8 pr-3 py-2.5 rounded-xl outline-none placeholder:text-slate-600 transition-all"
                    style={{ background: "rgba(15,23,42,0.7)", border: "1px solid rgba(100,116,139,0.25)" }}
                    onFocus={e => e.target.style.borderColor = "rgba(99,102,241,0.5)"}
                    onBlur={e => e.target.style.borderColor = "rgba(100,116,139,0.25)"}
                  />
                </div>
              ))}
            </div>

            {/* Email */}
            <div className="group relative">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-600 group-focus-within:text-indigo-400 transition-colors pointer-events-none" />
              <input
                type="email" value={emailId} onChange={(e) => setEmailId(e.target.value)}
                placeholder="Email address" required
                className="w-full text-slate-100 text-[12.5px] pl-9 pr-3 py-2.5 rounded-xl outline-none placeholder:text-slate-600 transition-all"
                style={{ background: "rgba(15,23,42,0.7)", border: "1px solid rgba(100,116,139,0.25)" }}
                onFocus={e => e.target.style.borderColor = "rgba(99,102,241,0.5)"}
                onBlur={e => e.target.style.borderColor = "rgba(100,116,139,0.25)"}
              />
            </div>

            {/* Password */}
            <div className="group relative">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-600 group-focus-within:text-indigo-400 transition-colors pointer-events-none" />
              <input
                type={showPassword ? "text" : "password"} value={password}
                onChange={(e) => setPassword(e.target.value)} placeholder="Password" required
                className="w-full text-slate-100 text-[12.5px] pl-9 pr-9 py-2.5 rounded-xl outline-none placeholder:text-slate-600 transition-all"
                style={{ background: "rgba(15,23,42,0.7)", border: "1px solid rgba(100,116,139,0.25)" }}
                onFocus={e => e.target.style.borderColor = "rgba(99,102,241,0.5)"}
                onBlur={e => e.target.style.borderColor = "rgba(100,116,139,0.25)"}
              />
              <button type="button" onClick={() => setShowPassword(v => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-400 transition-colors">
                {showPassword ? <FiEyeOff className="w-3.5 h-3.5" /> : <FiEye className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Forgot password */}
            {isLoginForm && (
              <div className="flex justify-end" style={{ marginTop: "-2px" }}>
                <button type="button" className="text-[11px] text-slate-500 hover:text-indigo-400 transition-colors">
                  Forgot password?
                </button>
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="flex items-start gap-2 px-3 py-2 rounded-lg text-red-400 text-[11.5px]"
                style={{ background: "rgba(239,68,68,0.07)", border: "1px solid rgba(239,68,68,0.18)" }}>
                <span className="flex-shrink-0 mt-px">⚠</span>
                <span>{error}</span>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit" onClick={isLoginForm ? handleLogin : handleSignup} disabled={isLoading}
              className="w-full group flex items-center justify-center gap-2 text-white font-semibold text-[12.5px] py-2.5 rounded-xl transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
                boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
                marginTop: "2px",
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 6px 24px rgba(99,102,241,0.45)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "0 4px 20px rgba(99,102,241,0.3)"}
            >
              {isLoading
                ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                : <><span>{isLoginForm ? "Sign In" : "Create Account"}</span>
                    <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" /></>
              }
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="h-px flex-1" style={{ background: "rgba(51,65,85,0.6)" }} />
            <span className="text-[10px] uppercase tracking-widest" style={{ color: "#475569" }}>or</span>
            <div className="h-px flex-1" style={{ background: "rgba(51,65,85,0.6)" }} />
          </div>

          {/* OAuth */}
          <div className="grid grid-cols-2 gap-2.5">
            {[
              { icon: <FcGoogle className="w-4 h-4" />, label: "Google" },
              { icon: <FiGithub className="w-4 h-4" />, label: "GitHub" },
            ].map(({ icon, label }) => (
              <button key={label}
                className="flex items-center justify-center gap-2 text-slate-400 hover:text-slate-200 text-[12px] py-2.5 rounded-xl transition-all duration-200"
                style={{ background: "rgba(15,23,42,0.6)", border: "1px solid rgba(100,116,139,0.2)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(100,116,139,0.4)"; e.currentTarget.style.background = "rgba(15,23,42,0.9)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(100,116,139,0.2)"; e.currentTarget.style.background = "rgba(15,23,42,0.6)"; }}
              >
                {icon} {label}
              </button>
            ))}
          </div>

          {/* Toggle */}
          <p className="mt-5 text-center text-[11.5px]" style={{ color: "#64748b" }}>
            {isLoginForm ? "Don't have an account? " : "Already have an account? "}
            <button onClick={toggleForm} className="font-semibold transition-colors focus:outline-none"
              style={{ color: "#818cf8" }}
              onMouseEnter={e => e.currentTarget.style.color = "#a5b4fc"}
              onMouseLeave={e => e.currentTarget.style.color = "#818cf8"}
            >
              {isLoginForm ? "Sign up free" : "Sign in"}
            </button>
          </p>
        </div>

        {/* Terms */}
        <p className="mt-5 text-center text-[11px]" style={{ color: "#334155" }}>
          By continuing, you agree to our{" "}
          <span className="cursor-pointer hover:text-slate-400 transition-colors" style={{ color: "#475569" }}>Terms</span>
          {" "}&{" "}
          <span className="cursor-pointer hover:text-slate-400 transition-colors" style={{ color: "#475569" }}>Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default Login;
