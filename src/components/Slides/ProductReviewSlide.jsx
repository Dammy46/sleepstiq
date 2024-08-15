"use client";
import React from "react";
import "swiper/css";
import classes from "./slide.module.css";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { products } from "@/utils/constant";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";

const ProductReviewSlide = () => {
  return (
    <div
      className={`${classes.reviewSlideBlock} ${classes.productReviewSlideBlock}`}
    >
      <div className="swiperWrap">
        <Swiper
          style={{
            paddingTop: "30px",
            marginTop: "1em",
            paddingBottom: "80px",
            overflow: "visible",
          }}
          spaceBetween={"40px"}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {products.map(({ productimg, name, desc }, index) => (
            <SwiperSlide key={name + index}>
              <div className={classes.productCard}>
                <div className={classes.productImg}>
                  <Image src={productimg} alt={name} fill />
                </div>
                <div className={classes.cardBody}>
                  <p>{desc}</p>
                  <div style={{ marginTop: "auto" }}>
                    <h2 className={classes.name}>{name}</h2>
                    <div className="stars">
                      {[1, 2, 3, 4, 5].map((star, i) => (
                        <IoStarSharp
                          key={i}
                          style={{
                            width: "12px",
                            height: "12px",
                            color: "#27AE60",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductReviewSlide;
