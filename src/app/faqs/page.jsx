import FlexMain from "@/components/FlexMain";
import Footer from "@/components/Footer";
import FaqHero from "@/components/Hero/FaqHero";
import React from "react";

export const metadata = {
  title: "FaQs",
};

const page = () => {
  return (
    <div>
      <FaqHero />
      <FlexMain />
      <Footer />
    </div>
  );
};

export default page;
