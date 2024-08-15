import React from "react";
import classes from "./shopNow.module.css";
import Image from "next/image";
import Button from "../Button";

const ShopNow = () => {
  return (
    <div className={classes.shopNowBlock}>
      <div className="container">
        <div className={classes.divider} />
        <div className={classes.shopNowFlex}>
          <div className={classes.shopNowImgBlock}>
            <div className={classes.shopNowProductImg}>
              <Image src={"/assets/images/shop-now.png"} alt="shop-now" fill />
            </div>
            <ul className={classes.shopNowProductFeatureBlock}>
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
                  100% drug-free, plant-based ingredients. 3rd-party lab tested.
                </span>
              </li>
            </ul>
          </div>
          <div className={classes.shopNowContent}>
            <h2 className={classes.shopNowContentTitle}>Shop Now</h2>
            <p className={classes.shopNowContentDesc}>
              Our Personal Diffuser is an aromatherapy device that contains a
              blend of melatonin, lavender, and chamomile. A few breaths of our
              plant-based essential oil mist will mellow you out, quiet the
              mind, and lull you to bed.
            </p>
            <div>
              <Button label={"Visit shop"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopNow;
