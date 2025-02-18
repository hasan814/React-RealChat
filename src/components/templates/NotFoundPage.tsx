import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-900 px-6">
      <div className="text-7xl">😢</div>

      <h1 className="text-4xl font-bold mt-4 text-gray-800">
        404 - Page Not Found
      </h1>
      <p className="mt-2 text-gray-600 text-lg text-center">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link to="/" className="mt-6">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg">
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
