import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  isLoading: boolean;
}

const LoginForm = ({ onSubmit, isLoading }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-primary-text"
        >
          Email Address
        </label>
        <div className="relative mt-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
            <FiMail className="h-5 w-5 text-gray" />
          </div>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="block w-full rounded-lg border border-gray-300 pl-10 pr-4 py-3 placeholder-gray focus:border-primary focus:ring-primary/100 sm:text-sm"
            required
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-primary-text"
        >
          Password
        </label>
        <div className="relative mt-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
            <FiLock className="h-5 w-5 text-gray" />
          </div>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="block w-full rounded-lg border border-gray-300 pl-10 pr-4 py-3 placeholder-gray focus:border-primary focus:ring-primary/100 sm:text-sm"
            required
          />
        </div>
        <div className="mt-2 text-right">
          <a href="#" className="text-sm text-primary hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-primary px-6 py-3.5 text-base font-medium text-white hover:bg-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        disabled={isLoading}
      >
        {isLoading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
};

export default LoginForm;
