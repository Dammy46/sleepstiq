import React from "react";
import classes from "./navbar.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { navLinks } from "@/utils/constant";
import Link from "next/link";

const Navbar = ({ setIsActive, currentPath }) => {
  return (
    <div className={classes.navbarBlock}>
      <div className={classes.navbarContainer}>
        <div className={classes.flexItem}>
          <button
            className={"burger"}
            style={{ border: "none" }}
            onClick={() => setIsActive(false)}
          >
            <AiOutlineClose style={{ width: "20px", height: "20px" }} />
          </button>
        </div>
        <div className={classes.mobileLinks}>
          {navLinks.map(({ link, label }) => (
            <Link
              href={link}
              key={label}
              data-active={currentPath === link || undefined}
              className={"link"}
            >
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
