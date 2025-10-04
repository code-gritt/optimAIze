"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/store";
import { register, login, getMe } from "@/lib/mutation";
import Loader from "@/components/Common/Loader/Loader";
import {
  Wrapper,
  Inner,
  Header,
  CardContainer,
  Card,
  TextCtn,
  Banner,
} from "./styles";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { setAuth } = useAuthStore();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const user = await register(email, password);
      const token = await login(email, password);
      const refreshedUser = await getMe(token);

      if (!refreshedUser) throw new Error("Failed to fetch user data");

      setAuth(refreshedUser, token);
      router.push("/dashboard");
    } catch (err: any) {
      console.error("Register error:", err);
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://optimaize-api.onrender.com/oauth/google";
  };

  if (loading) return <Loader />; // Conditional render

  return (
    <Wrapper>
      <Inner>
        <Header>
          <h1>Sign Up for OptimAIze</h1>
          <p>
            Create an account to start debugging and reviewing code with AI.
          </p>
        </Header>

        <CardContainer>
          <Card>
            <TextCtn>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/80"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full rounded-md border border-white-a08 bg-background/50 p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#2B892E]"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-white/80"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 w-full rounded-md border border-white-a08 bg-background/50 p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#2B892E]"
                    required
                  />
                </div>

                {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

                <button
                  type="submit"
                  className="w-full rounded-md bg-[#2B892E] px-4 py-2 text-white hover:bg-[#225f22] focus:outline-none focus:ring-2 focus:ring-[#2B892E]"
                >
                  Sign Up
                </button>

                <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-gray-600 px-4 py-2 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  onClick={handleGoogleLogin}
                >
                  Sign in with Google
                </button>
              </form>

              <p className="mt-4 text-center text-sm text-white/80">
                Already have an account?{" "}
                <a href="/login" className="text-[#2B892E] hover:underline">
                  Log In
                </a>
              </p>
            </TextCtn>
          </Card>
        </CardContainer>

        <Banner />
      </Inner>
    </Wrapper>
  );
}
