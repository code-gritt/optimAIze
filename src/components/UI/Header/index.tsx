"use client";

import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  AbsoluteLinks,
  BurgerMenu,
} from "./styles";
import ic_bars from "../../../../public/svgs/ic_bars.svg";
import { GetStartedButton } from "@/components";
import AnimatedLink from "@/components/Common/AnimatedLink";
import { useState } from "react";
import { motion } from "framer-motion";
import { links, menu } from "./constants";
import { useAuthStore } from "@/lib/store";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, token, clearAuth } = useAuthStore();
  const handleLogout = () => {
    clearAuth();
    // Optional: Refresh or redirect to login
    window.location.href = "/login";
  };

  return (
    <Wrapper>
      <Inner>
        <LogoContainer
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          {/* Modern geometric "O" monogram in #2B892E */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer hexagon */}
            <polygon
              points="20,2 36,10 36,30 20,38 4,30 4,10"
              stroke="#2B892E"
              strokeWidth="3"
              fill="none"
            />
            {/* Inner circle for "O" effect */}
            <circle cx="20" cy="20" r="8" fill="#2B892E" />
          </svg>

          {/* OptimAIze Text in white */}
          <span
            style={{
              fontWeight: 700,
              fontSize: "1.5rem",
              color: "#FFFFFF",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            OptimAIze
          </span>

          <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              variants={menu}
              animate={isOpen ? "open" : "closed"}
              initial="closed"
            ></motion.div>
            <img src={ic_bars.src} alt="bars" />
          </BurgerMenu>
        </LogoContainer>

        <Nav className={isOpen ? "active" : ""}>
          {links.map((link, i) => (
            <AnimatedLink key={i} title={link.linkTo} />
          ))}
        </Nav>

        <CallToActions className={isOpen ? "active" : ""}>
          {user && token ? (
            <>
              <button
                onClick={() => (window.location.href = "/dashboard")}
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
              <span className="credits ml-2">Credits: {user.credits}</span>
              <span className="avatar ml-2">
                {user.email.charAt(0).toUpperCase()}
              </span>
            </>
          ) : (
            <>
              <AnimatedLink title="Login" />
              <GetStartedButton padding="0.5rem 0.75rem" />
            </>
          )}
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;
