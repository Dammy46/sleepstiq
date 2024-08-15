"use client";
import React, { useState } from "react";
import classes from "./header.module.css";
import Image from "next/image";
import { navLinks } from "@/utils/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import Navbar from "../Navbar";

const Header = () => {
  const currentPath = usePathname();
  const [isActive, setIsActive] = useState(false);
  return (
    <React.Fragment>
      <div className={classes.headerBlock}>
        <Link href={"/"}>
          <div className={classes.headerLogo}>
            <Image
              fill
              src={"/assets/svgs/sleepstiq-logo.svg"}
              alt="sleepstiq"
            />
          </div>
        </Link>
        <div className={classes.linksWrap}>
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
        <button className={"burger"} onClick={() => setIsActive(true)}>
          <HiMiniBars3BottomLeft style={{ width: "20px", height: "20px" }} />
        </button>
      </div>
      {isActive && (
        <Navbar setIsActive={setIsActive} currentPath={currentPath} />
      )}
    </React.Fragment>
  );
};

export default Header;
