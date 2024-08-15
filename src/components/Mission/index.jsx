import React from "react";
import classes from "./mission.module.css";

const Mission = () => {
  return (
    <div className={classes.missionBlock}>
      <div className={`container`}>
        <div className={classes.missionFlex}>
          <div className={classes.missionContent}>
            <h2 className={classes.missionContentTitle}>Our Mission</h2>
            <p
              className={classes.missionContentDesc}
              style={{ margin: "30px 0" }}
            >
              We started Sleepstiq with 1 simple goal: to be your best friend at
              bedtime. We, just like you, deal with stress, unease, and trouble
              sleeping from a number of silly things like school, work, screens,
              numbers, and people. That's why we created products that aim to -
            </p>

            <p className={classes.missionContentDesc}>✓ Promote Calm </p>
            <p className={classes.missionContentDesc}>✓ Support Sleep</p>
            <p className={classes.missionContentDesc}>✓ Reduce Stress </p>
            <p className={classes.missionContentDesc}> ✓ Aid Relaxation</p>
          </div>
          <div className={classes.missionImgBlock} />
        </div>
      </div>
    </div>
  );
};

export default Mission;
