import React from "react";
import classes from "./partner.module.css";
import { partners } from "@/utils/constant";
import Image from "next/image";

const Partner = () => {
  return (
    <div className={classes.partnerBlock}>
      {partners.map((partner, index) => (
        <div className={classes.partnerLogo} key={index}>
          <Image fill src={partner} alt="partner" />
        </div>
      ))}
      <div className={classes.mobileContainer}>
        <div className={classes.firstLogoBlock}>
          {partners.map((partner, index) => (
            <div
              className={`${classes.partnerLogo} ${classes.mobilePartnerLogo}`}
              key={index}
            >
              <Image fill src={partner} alt="partner" />
            </div>
          ))}
        </div>
        <div className={classes.firstLogoBlock}>
          {partners.map((partner, index) => (
            <div
              className={`${classes.partnerLogo} ${classes.mobilePartnerLogo}`}
              key={index}
            >
              <Image fill src={partner} alt="partner" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
