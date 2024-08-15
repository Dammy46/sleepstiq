import React from "react";
import classes from "./visit.module.css";
import Button from "../Button";

const VisitOurShop = () => {
  return (
    <div className={classes.visitBlock}>
      <div className="container">
        <h2 className={classes.visitTitle}>Visit Our Shop</h2>
        <p className={classes.visitDesc}>
          Our Personal Diffuser is an aromatherapy device that contains a blend
          of melatonin, lavender, and chamomile. A few breaths of our
          plant-based essential oil mist will mellow you out, quiet the mind,
          and lull you to bed.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <Button label={"Visit Shop"} />
        </div>
        <div className={classes.divider} />
      </div>
    </div>
  );
};

export default VisitOurShop;
