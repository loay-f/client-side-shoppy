import Categories from "../components/Categories";
import Features from "../components/Features";
import Hero from "../components/Hero";
import PromoSection from "../components/PromoSection";
import TrendingProducts from "../components/TrendingProducts";

const Home = () => {
  return (
    <div className="flex flex-col gap-32">
      <Hero />
      <Categories />
      <TrendingProducts title="Trending Products" />
      <PromoSection />
      <TrendingProducts title="Featured Products" />
      <Features />
    </div>
  );
};

export default Home;
