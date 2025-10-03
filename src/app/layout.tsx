import Layout from "@/components/Layout";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OptimAIze",
  description: "AI-powered code review and debugging platform for developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
