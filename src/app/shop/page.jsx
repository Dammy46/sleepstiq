import AboutProduct from "@/components/AboutProduct";
import Footer from "@/components/Footer";
import ShopHero from "@/components/Hero/ShopHero";
import ReviewSlide from "@/components/Slides/ReviewSlide";
import React from "react";

export const metadata = {
  title: " Shop",
};

const page = () => {
  return (
    <div>
      <ShopHero />
      <AboutProduct />
      <ReviewSlide />
      <Footer />
    </div>
  );
};

export default page;
