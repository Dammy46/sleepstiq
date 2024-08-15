import React from "react";
import classes from "./hero.module.css";
import Header from "../Header";
import Partner from "../Partners";
import Button from "../Button";

const Hero = () => {
  return (
    <div className={classes.heroBlock}>
      <div className="container">
        <Header />
        <div className={classes.heroContent}>
          <p className={classes.heroDesc}>We&apos;re here to help you</p>
          <h2 className={classes.heroTitle}>Relax & Rest</h2>
          <p className={classes.heroDesc}>
            With the aid of our Melatonin Sleepstiq, we can assure you that you
            can get quality sleep.
          </p>

          <Button label={"Visit shop"} styles={{ marginTop: "19px" }} />
        </div>
      </div>
      <Partner />
    </div>
  );
};

export default Hero;
