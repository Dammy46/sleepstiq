import React from "react";
import Header from "../Header";
import classes from "./hero.module.css";
import { IoIosSearch } from "react-icons/io";

const FaqHero = () => {
  return (
    <div className={classes.faqHeroBlock}>
      <div className="container">
        <Header />
        <div className={classes.heroContent}>
          <p className={classes.heroDesc}>We're here to help you</p>
          <h2 className={classes.heroTitle}>How can we assist?</h2>
          <div className={classes.searchInputBlock}>
            <IoIosSearch className={classes.searchIcon} />
            <input
              type="text"
              className={classes.searchInput}
              placeholder="Search FAQs here"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqHero;
