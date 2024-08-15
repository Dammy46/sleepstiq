"use client";
import React from "react";
import classes from "./about.module.css";
import Image from "next/image";
import Button from "../Button";

const AboutProduct = () => {
  return (
    <div className={classes.aboutBlock}>
      <div className="container">
        <div className={classes.aboutProductFlex}>
          <div className={classes.productImgBlock}>
            <div className={classes.productImg}>
              <Image src={"/assets/images/shop-now.png"} fill alt="product" />
            </div>
          </div>
          <div className={classes.productContentBlock}>
            <div className={classes.productContent}>
              <h2 className={classes.title}>About Product</h2>
              <p className={classes.desc}>
                Our Personal Diffuser is an aromatherapy device that contains a
                blend of melatonin, lavender, and chamomile. A few breaths of
                our plant-based essential oil mist will mellow you out, quiet
                the mind, and lull you to bed.
              </p>
              <ul className={classes.productFeatures}>
                <li>
                  <span style={{ fontStyle: "italic" }}>
                    Promotes calm and relaxation.
                  </span>
                </li>
                <li>
                  <span style={{ fontStyle: "italic" }}>
                    Inhalation allows for a rapid effect.
                  </span>
                </li>
                <li>
                  <span style={{ fontStyle: "italic" }}>
                    100% drug-free, plant-based ingredients. 3rd-party lab
                    tested.
                  </span>
                </li>
              </ul>
              <div className={classes.unitFlex}>
                <div className={classes.priceBlock}>
                  <p className={classes.unitBlockTitle}>Price</p>
                  <p
                    className={classes.unitBlockTitle}
                    style={{ fontWeight: 600 }}
                  >
                    USD 50
                  </p>
                </div>
                <div className={classes.unitBlock}>
                  <p
                    className={classes.unitBlockTitle}
                    style={{ marginBottom: "5px" }}
                  >
                    Unit
                  </p>
                  <input type="number" name="" id="" />
                </div>
              </div>
              <Button label={"Buy"} className={classes.buyBtn} />
            </div>
          </div>
        </div>
        <div className={classes.divider}></div>
      </div>
    </div>
  );
};

export default AboutProduct;
