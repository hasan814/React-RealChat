import { Toaster } from "sonner";
import { Outlet } from "react-router-dom";

import Header from "./components/layouts/Header";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      {/* Toast Notifications */}
      <Toaster richColors />

      {/* Header with Sticky Effect */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <Header />
      </header>

      {/* Main Content Area */}
      <main className="flex-grow mt-20 px-6 py-10 max-w-screen-lg mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default App;
