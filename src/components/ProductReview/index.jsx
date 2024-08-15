"use client";
import React from "react";
import classes from "./productReview.module.css";
import ProductReviewSlide from "../Slides/ProductReviewSlide";

const ProductReview = () => {
  return (
    <React.Fragment>
      <div className={classes.productReviewBlock}>
        <div className="container">
          <h2 className={classes.productReviewTitle}>Product Reviews</h2>
        </div>
      </div>
      <ProductReviewSlide />
    </React.Fragment>
  );
};

export default ProductReview;
