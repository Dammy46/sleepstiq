"use client";
import React, { useState } from "react";
import classes from "./main.module.css";
import { accordionData, tabsLabel } from "@/utils/constant";

const FlexMain = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <div className={classes.flexMainBlock}>
      <div className="container">
        <div className={classes.mainFlexBlock}>
          <div className={classes.tabsBlock}>
            {tabsLabel.map((label) => (
              <div key={label} className={classes.tabLabelBlock}>
                <p
                  className={classes.tabLabel}
                  data-active={label === "Sleepstiq Product"}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
          <div className={classes.tabContentBlock}>
            {accordionData.map((q, i) => (
              <div key={i} className={classes.accItem}>
                <div
                  onClick={() => toggle(i)}
                  className={classes.accTitleBlock}
                >
                  <p
                    className={classes.accTitle}
                    data-selected={selected === i}
                  >
                    {q.title}
                  </p>
                </div>
                <div
                  data-selected={selected === i}
                  className={classes.accContentBlock}
                >
                  {q.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexMain;
