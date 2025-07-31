import React, { useEffect, useState } from "react";

export default function Toast({ type = "success", message, onClose, duration = 5000 }) {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 10);
    
    // Auto-dismiss timer
    let progressTimer;
    if (duration > 0) {
      const startTime = Date.now();
      progressTimer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, (duration - elapsed) / duration * 100);
        setProgress(remaining);
        
        if (remaining === 0) {
          handleClose();
        }
      }, 50);
    }

    return () => {
      clearTimeout(timer);
      if (progressTimer) clearInterval(progressTimer);
    };
  }, [duration]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return {
          bg: "bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600",
          border: "border-emerald-300/50",
          shadow: "shadow-emerald-500/25",
          icon: "🎉",
          glow: "shadow-emerald-400/30"
        };
      case "error":
        return {
          bg: "bg-gradient-to-br from-rose-400 via-red-500 to-pink-600",
          border: "border-rose-300/50",
          shadow: "shadow-rose-500/25",
          icon: "⚠️",
          glow: "shadow-rose-400/30"
        };
      case "warning":
        return {
          bg: "bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500",
          border: "border-amber-300/50",
          shadow: "shadow-amber-500/25",
          icon: "⚡",
          glow: "shadow-amber-400/30"
        };
      case "info":
        return {
          bg: "bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600",
          border: "border-blue-300/50",
          shadow: "shadow-blue-500/25",
          icon: "💎",
          glow: "shadow-blue-400/30"
        };
      default:
        return {
          bg: "bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600",
          border: "border-emerald-300/50",
          shadow: "shadow-emerald-500/25",
          icon: "🎉",
          glow: "shadow-emerald-400/30"
        };
    }
  };

  const styles = getTypeStyles();

  return (
    <div
      className={`fixed top-8 right-8 z-[9999] min-w-[300px] max-w-md backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 overflow-hidden
        transform transition-all duration-500 ease-out
        ${isVisible 
          ? 'translate-x-0 opacity-100 scale-100' 
          : 'translate-x-full opacity-0 scale-95'
        }
        ${styles.shadow} shadow-2xl ${styles.glow} hover:shadow-3xl hover:-translate-y-1
      `}
      role="alert"
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 ${styles.bg} opacity-90`} />
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent" />
      
      {/* Progress bar */}
      {duration > 0 && (
        <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full">
          <div 
            className="h-full bg-white/80 transition-all duration-75 ease-linear rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative flex items-center gap-4 p-6">
        {/* Icon with pulse animation */}
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30">
          <span className="text-2xl animate-pulse">{styles.icon}</span>
        </div>
        
        {/* Message */}
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-base leading-relaxed drop-shadow-sm">
            {message}
          </p>
        </div>
        
        {/* Close button */}
        <button
          onClick={handleClose}
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-xl bg-white/20 hover:bg-white/30 border border-white/30 text-white/90 hover:text-white transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Close notification"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-white/40 rounded-full animate-ping" />
      <div className="absolute top-6 left-8 w-1 h-1 bg-white/60 rounded-full animate-pulse" />
      <div className="absolute bottom-4 right-12 w-3 h-3 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
    </div>
  );
}

// Demo component to showcase the toast
function ToastDemo() {
  const [toasts, setToasts] = useState([]);

  const showToast = (type, message) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, type, message }]);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Ultra Modern Toast
        </h1>
        
        <div className="space-y-4">
          <button
            onClick={() => showToast("success", "Account created successfully! Welcome aboard! 🚀")}
            className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-semibold hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Show Success Toast
          </button>
          
          <button
            onClick={() => showToast("error", "Connection failed. Please check your network.")}
            className="w-full py-4 px-6 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-2xl font-semibold hover:from-rose-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Show Error Toast
          </button>
          
          <button
            onClick={() => showToast("warning", "Your session will expire in 5 minutes.")}
            className="w-full py-4 px-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl font-semibold hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Show Warning Toast
          </button>
          
          <button
            onClick={() => showToast("info", "New features are now available in your dashboard!")}
            className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Show Info Toast
          </button>
        </div>
      </div>

      {/* Render toasts */}
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          type={toast.type}
          message={toast.message}
          onClose={() => removeToast(toast.id)}
          duration={5000}
        />
      ))}
    </div>
  );
}