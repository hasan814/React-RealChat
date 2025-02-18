import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="text-center max-w-2xl">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 leading-tight">
        Real-Time Chat, <span className="text-blue-500">Seamlessly.</span>
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        Connect instantly with clients and support agents in a smooth and
        responsive environment.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <Link to="/client">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg">
            Start Chatting
          </Button>
        </Link>
        <Link to="/agent">
          <Button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 text-lg">
            Agent Login
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
