import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div className="antialiased flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
