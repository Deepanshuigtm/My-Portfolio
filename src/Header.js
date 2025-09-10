import React, { useState, useEffect } from "react";
import logoo from "./logoo.png";
import "./header.css";
import CardNav from "./Components/CardNav";

export default function Headers() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    {
      label: "Home",
      bgColor: "#0D0716",
      textColor: "#ffffffff",
      links: [
        { label: "Main Page", ariaLabel: "Go to Home Page", path: "/" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#ffffffff",
      links: [
        { label: "My Projects", ariaLabel: "View My Projects", path: "/project" },
      ],
    },
    {
      label: "About",
      bgColor: "#271E37",
      textColor: "#ffffffff",
      links: [
        { label: "About Me", ariaLabel: "About Me", path: "/about" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#ffffffff",
      links: [
        { label: "Contact Me", ariaLabel: "Contact Me", path: "/contact" },
      ],
    },
  ];

  const headerContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: isMobile ? "0 1rem" : "0 2rem",
    background: "transparent",
    position: "fixed",
    width: "100%",
    backdropFilter: "blur(2px)",
    zIndex: "99",
    fontSize: "1.1rem",
    flexDirection: isMobile ? "column" : "row",
  };

  return (
    <div style={headerContainer}>
      {/* Logo */}
      {/* <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <img style={{ width: "7rem", height: "auto" }} src={logoo} alt="logo" />
        <h2 style={{ fontSize: isMobile ? "1.2rem" : "2rem" }}>
          Deepanshu&apos;s Portfolio
        </h2>
      </div> */}

      {/* CardNav Component */}
      <CardNav
        logo={logoo}
        logoAlt="Deepanshu's Portfolio Logo"
        items={items}
        baseColor="#000"
        menuColor="#fff"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />

      {/* Resume Button */}
      {/* <button
        style={{
          padding: isMobile ? "0.5rem 1rem" : "0.7rem 1.5rem",
          borderRadius: "32px",
          border: "2px solid #000",
          color: "#000",
          fontSize: isMobile ? "1rem" : "1.4rem",
          backgroundColor: "#fff",
          cursor: "pointer",
          transition: "all 0.3s",
        }}
      >
        Resume
      </button> */}
    </div>
  );
}