import React from "react";
import classes from "./hero.module.css";
import Header from "../Header";

const ShopHero = () => {
  return (
    <div className={classes.shopHeroBlock}>
      <div className="container">
        <Header />
        <div className={classes.heroContent}>
          <p className={classes.heroDesc}>We&apos;re here to help you</p>
          <h2 className={classes.heroTitle}>Relax & Rest</h2>
        </div>
      </div>
    </div>
  );
};

export default ShopHero;
