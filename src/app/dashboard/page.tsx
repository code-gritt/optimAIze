"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/store";
import { getMe } from "@/lib/mutation";
import {
  Wrapper,
  Inner,
  Header,
  CardContainer,
  Card,
  TextCtn,
  Banner,
} from "./styles";
import Loader from "@/components/Common/Loader/Loader";

interface User {
  id: number;
  email: string;
  role: string;
  credits: number;
}

export default function DashboardPage() {
  const { user, token, clearAuth, setUser } = useAuthStore();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        router.push("/login");
        return;
      }

      try {
        const fetchedUser: User | null = await getMe(token);
        if (!fetchedUser) throw new Error("User not authenticated");

        setUser(fetchedUser); // update store
      } catch (err: any) {
        setError(err.message || "Failed to load dashboard");
        if (err.message.includes("not authenticated")) router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [token, router, setUser]);

  const handleLogout = () => {
    clearAuth();
    router.push("/login");
  };

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return (
      <Wrapper>
        <p className="text-red-500 text-center mt-8">
          {error || "User not found."}
        </p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Inner>
        <Header>
          <h1>Welcome, {user.email.split("@")[0]}</h1>
          <p>Manage your OptimAIze experience.</p>
        </Header>

        <CardContainer>
          <Card>
            <TextCtn>
              <div className="navbar">
                <button
                  onClick={() => router.push("/dashboard")}
                  className="rounded-md bg-[#2B892E] px-4 py-2 text-white hover:bg-[#225f22] focus:outline-none focus:ring-2 focus:ring-[#2B892E]"
                >
                  Dashboard
                </button>
                <button
                  onClick={handleLogout}
                  className="ml-2 rounded-md bg-gray-600 px-4 py-2 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Logout
                </button>
                <span className="credits ml-auto">Credits: {user.credits}</span>
                <span className="avatar ml-2">
                  {user.email.charAt(0).toUpperCase()}
                </span>
              </div>
            </TextCtn>
          </Card>
        </CardContainer>

        <Banner />
      </Inner>
    </Wrapper>
  );
}
