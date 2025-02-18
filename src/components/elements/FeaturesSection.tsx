import FeatureCard from "./FeatureCard";
import { FaComments, FaRocket, FaUserShield } from "react-icons/fa";

const features = [
  {
    icon: <FaComments className="text-blue-600 text-4xl mx-auto" />,
    title: "Live Messaging",
    description:
      "Instant real-time messaging with smooth UI and real-time updates.",
  },
  {
    icon: <FaRocket className="text-blue-600 text-4xl mx-auto" />,
    title: "Lightning Fast",
    description: "Optimized for speed, ensuring no delays in conversation.",
  },
  {
    icon: <FaUserShield className="text-blue-600 text-4xl mx-auto" />,
    title: "Secure & Private",
    description: "End-to-end encryption keeps your conversations safe.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl text-center">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </section>
  );
};

export default FeaturesSection;
