import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../hooks/useAuth";
import { FaGoogle } from "react-icons/fa";

interface LoginResponse {
  token?: string;
  access_token?: string;
  authentication_token?: string;
  auth_token?: string;
  jwt?: string;
  data?: {
    token?: string;
  };
}

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
  message?: string;
}

const LoginPage = () => {
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();

  const mutation = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => (await login(email, password)) as LoginResponse,

    onSuccess: (data: LoginResponse) => {
      console.log("LOGIN RESPONSE:", data);

      const token =
        data?.token ||
        data?.access_token ||
        data?.authentication_token ||
        data?.auth_token ||
        data?.jwt ||
        data?.data?.token;

      if (token) {
        authLogin(token);
        navigate("/", { replace: true });
      } else {
        alert("Login successful but no token found. Check console.");
      }
    },

    onError: (error: ApiError) => {
      console.error("Login error:", error);
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Login failed — check email/password or network.";
      alert(message);
    },
  });

  const handleLogin = (email: string, password: string) => {
    mutation.mutate({ email, password });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left: Form */}
      <div className="flex-1 flex items-center justify-center bg-white p-6 md:p-12 lg:p-16">
        <div className="w-full max-w-lg space-y-9">
          <div className="text-center">
            <img src="/logo.svg" alt="Logo" className="mx-auto h-12 w-auto" />
            <p className="mt-2 text-gray">
              Sign in to manage your organization
            </p>
          </div>

          {mutation.isError && (
            <div className="text-red-500 text-sm text-center">
              Invalid credentials
            </div>
          )}
          <LoginForm onSubmit={handleLogin} isLoading={mutation.isPending} />

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray">
                Or continue with
              </span>
            </div>
          </div>

          <button
            type="button"
            disabled
            className="w-full flex items-center justify-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-primary-text opacity-80 cursor-not-allowed"
          >
            <FaGoogle className="h-5 w-5 text-primary" />
            Login with Google
          </button>

          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <a href="#" className="text-primary hover:underline">
              Contact administrator
            </a>
          </p>
        </div>
      </div>

      {/* Right: Promotional / Gradient Area */}
      <div className="hidden md:flex md:flex-1 relative items-center justify-center p-8 lg:p-16 text-white overflow-hidden">
        <img
          src="/login-image.png"
          alt="login background image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-700/70 to-indigo-800/90" />
        <div className="relative z-10 max-w-2xl text-center space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Welcome to the Future of HR Management
          </h2>
          <p className="text-lg lg:text-xl opacity-90">
            Streamline your workforce operations with powerful tools designed
            for modern HR professionals.
          </p>

          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-2xl">💡</span>
              <h3 className="text-xl font-semibold">HR Tip of the Day</h3>
            </div>
            <p className="text-base">
              Schedule regular one-on-ones to boost employee engagement by 40%.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile-only promo footer */}
      <div className="md:hidden bg-gradient-to-br from-purple-600 to-indigo-800 text-white p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome to the Future of HR</h2>
        <p className="mb-6">
          Streamline your workforce operations with powerful tools designed for
          modern HR professionals.
        </p>
        <div className="bg-white/10 rounded-xl p-5">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-xl">💡</span>
            <h3 className="font-semibold">HR Tip of the Day</h3>
          </div>
          <p>
            Schedule regular one-on-ones to boost employee engagement by 40%.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
