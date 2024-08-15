"use client";
import "swiper/css";
import React from "react";
import classes from "./slide.module.css";
import { SwiperSlide, Swiper } from "swiper/react";
import { reviews } from "@/utils/constant";
import { IoStarSharp } from "react-icons/io5";
import { Autoplay } from "swiper/modules";

const ReviewSlide = () => {
  return (
    <div className={classes.reviewSlideBlock}>
      <div className={`swiperWrap ${classes.customSwiperWrap}`}>
        <Swiper
          style={{ padding: "30px 0", overflow: "visible" }}
          spaceBetween={"40px"}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {reviews.map(({ desc, name }, index) => (
            <SwiperSlide key={name + index}>
              <div className={classes.reviewCard} key={name}>
                <p className={classes.reviewDesc}>{desc}</p>
                <div className={classes.reviewerBlock}>
                  <p className={classes.reviewer}>{name}</p>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSlide;
