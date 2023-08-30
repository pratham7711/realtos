import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import PhoneIcon from "@mui/icons-material/Phone";
import logoblue from "../../public/logoblue.png";
import { Button, styled } from "@mui/material";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const NavButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    lineHeight: 1.5,
    color:"#606266",
    backgroundColor: "transparent",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#F2F2F2",
      borderColor: "#F2F2F2",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#F2F2F2",
      borderColor: "#F2F2F2",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem #F2F2F2",
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 20); // Adjust the scroll position threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={styles.container}  
    >
      <div
        className={styles.left}
      >
        <Image
          src={logoblue}
          width={200}
          height={50}
          alt="Realtos"
        />
          <NavButton> Home</NavButton>
          <NavButton> Projects</NavButton>
          <NavButton> About Us</NavButton>
          <NavButton> Contact Us</NavButton>
          </div>
        <div
          className={styles.right}
        >
          <PhoneIcon fontSize="small"></PhoneIcon>  
          <p style={{ marginLeft: "0.5rem" }}> 011-21156-21156</p>
        </div>
    </div>
  );
};

export default Header;
