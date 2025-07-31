
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Toast from "../../components/Toast";

const LoginPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    identifier: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [toastState, setToastState] = useState({ open: false, type: "success", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${process.env.API_BASE_URL || "https://api2.pixelprimp.com"}/api/clients/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      let data;
      try {
        data = await res.json();
      } catch (jsonErr) {
        setToastState({ open: true, type: "error", message: "Invalid server response." });
        return;
      }
      if (res.ok && data && data.success) {
        setToastState({ open: true, type: "success", message: (data.data && data.data.message) || data.message || "Login successful!" });
        setForm({ identifier: "", password: "" });
        // Save user details to localStorage for Navbar
        if (typeof window !== "undefined" && data.data) {
          localStorage.setItem("pixelprimp_user", JSON.stringify({
            id: data.data.id,
            name: data.data.name,
            email: data.data.email,
            phone: data.data.phone,
            token: data.data.token,
            identifier: form.identifier
          }));
        }
        setTimeout(() => {
          router.push("/");
        }, 1200);
      } else {
        setToastState({ open: true, type: "error", message: (data && (data.message || (data.data && data.data.message))) || "Login failed." });
      }
    } catch (err) {
      setToastState({ open: true, type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
      setTimeout(() => setToastState((t) => ({ ...t, open: false })), 3500);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-200/60 via-purple-200/60 to-pink-100/60 dark:from-gray-900 dark:to-gray-800 px-2">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white/90 dark:bg-gray-900/90 shadow-2xl rounded-3xl p-10 w-full max-w-lg space-y-7 animate-fade-in border border-gray-100 dark:border-gray-800 backdrop-blur-xl"
        autoComplete="off"
      >
        <h2 className="text-3xl font-extrabold text-center mb-2 text-gray-800 dark:text-white tracking-tight">Login to your account</h2>
        <p className="text-center text-gray-500 dark:text-gray-300 mb-6 text-base">Welcome back to PixelPrimp</p>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1" htmlFor="identifier">Email or Phone</label>
            <input
              type="text"
              name="identifier"
              id="identifier"
              placeholder="Email or phone"
              value={form.identifier}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg transition"
            />
          </div>
          <div className="relative">
            <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1" htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg transition pr-12"
            />
            <button
              type="button"
              tabIndex={-1}
              className="absolute top-9 right-4 text-gray-400 hover:text-blue-500 focus:outline-none"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.657.403-3.22 1.125-4.575M15 12a3 3 0 11-6 0 3 3 0 016 0zm6.364-2.364A9.956 9.956 0 0022 9c0 5.523-4.477 10-10 10a9.956 9.956 0 01-4.636-1.364" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm2.828-2.828A9.956 9.956 0 0122 12c0 5.523-4.477 10-10 10S2 17.523 2 12c0-2.21.896-4.21 2.343-5.657" /></svg>
              )}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg transition-all duration-300 text-lg disabled:opacity-60 mt-2"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
              Logging in...
            </span>
          ) : (
            "Login"
          )}
        </button>
        <div className="text-center text-gray-500 dark:text-gray-300 mt-4 text-base">
          Don't have an account? <a href="/signup" className="text-blue-600 hover:underline font-semibold">Sign Up</a>
        </div>
        {toastState.open && (
          <Toast
            type={toastState.type}
            message={toastState.message}
            onClose={() => setToastState((t) => ({ ...t, open: false }))}
          />
        )}
      </form>
    </div>
  );
};

export default LoginPage;