import HeroSection from "../elements/HeroSection";
import Footer from "../elements/Footer";
import FeaturesSection from "../elements/FeaturesSection";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900 px-6">
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default HomePage;
