"use client";
import React from "react";
import classes from "./story.module.css";
import { IoPlay } from "react-icons/io5";
import "swiper/css";

const Story = () => {
  return (
    <div className={classes.storyBlock}>
      <div className="container">
        <div className={classes.storyFlex}>
          <div className={classes.storyContent}>
            <p className={classes.storySubTitle}>Our Amazing Story</p>
            <h2 className={classes.storyTitle}>10k+Happy Customers</h2>
            <p className={classes.storyDesc}>
              There’s no secret sauce, no wizard behind the curtain. What makes
              Aerolab tick is an interdisciplinary team with a framework that
              fosters candid collaboration.
            </p>

            <h5 className={classes.more}>
              {" "}
              <IoPlay /> More know About us
            </h5>
          </div>
          <div className={classes.storyReview}>
            <div className={classes.reviewBlock}>
              <p className={classes.reviewText}>
                I’m a very anxious person but use this and feel so relaxed and
                sleep way better now with the aid of sleepstiq.{" "}
              </p>
              <div className={classes.userBlock}>
                <div className={classes.userAvatar}>
                  <img
                    src="/assets/images/dummy-avatar.png"
                    alt="user-profile"
                  />
                </div>
                <div className={classes.userInfo}>
                  <p className={classes.username}>James Miller</p>
                  <p className={classes.userRole}>CEO, Techbias</p>
                </div>
              </div>
              <div className={classes.dotsBlock}>
                <div className={classes.dot} />
                <div className={classes.dot} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
