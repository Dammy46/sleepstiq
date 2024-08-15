import Hero from "@/components/Hero";
import Story from "@/components/Story";
import ShopNow from "@/components/ShopNow";
import Mission from "@/components/Mission";
import VisitOurShop from "@/components/VisitOurShop";
import ProductReview from "@/components/ProductReview";
import Footer from "@/components/Footer";
import ReviewSlide from "@/components/Slides/ReviewSlide";

export default function Home() {
  return (
    <div>
      <Hero />
      <Story />
      <ReviewSlide />
      <ShopNow />
      <Mission />
      <VisitOurShop />
      <ProductReview />
      <Footer />
    </div>
  );
}
