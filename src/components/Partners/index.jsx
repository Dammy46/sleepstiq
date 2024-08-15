import React from "react";
import classes from "./partner.module.css";
import { partners } from "@/utils/constant";

const Partner = () => {
  return (
    <div className={classes.partnerBlock}>
      {partners.map((partner, index) => (
        <div className={classes.partnerLogo} key={index}>
          <img src={partner} alt="partner" />
        </div>
      ))}
      <div className={classes.mobileContainer}>
        <div className={classes.firstLogoBlock}>
          {partners.map((partner, index) => (
            <div
              className={`${classes.partnerLogo} ${classes.mobilePartnerLogo}`}
              key={index}
            >
              <img src={partner} alt="partner" />
            </div>
          ))}
        </div>
        <div className={classes.firstLogoBlock}>
          {partners.map((partner, index) => (
            <div
              className={`${classes.partnerLogo} ${classes.mobilePartnerLogo}`}
              key={index}
            >
              <img src={partner} alt="partner" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
