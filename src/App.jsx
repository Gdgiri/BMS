import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Pages/HeroSection";
import AboutUs from "./Pages/AboutUs";
import ServicesSection from "./Pages/ServiceSection";
import ContactForm from "./Pages/ContactForm";
import SupportCards from "./Pages/SupportCards";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import BookingList from "./Pages/BookingList";
import Login from "./Pages/Login";
import ServiceRequestList from "./Pages/ServiceRequestList";
import ProtectedRoute from "./Components/ProtectedRoute";
import ContactButtons from "./Components/WhatsAppButton";

const App = () => {
  const location = useLocation();

  const isAdminPage =
    location.pathname === "/admin" ||
    location.pathname === "/login" ||
    location.pathname === "/data";

  return (
    <div>
      {/* ✅ Only show homepage content on '/' */}
      {!isAdminPage && (
        <>
          <Navbar />
          <HeroSection />
          <AboutUs />
          <ServicesSection />
          <ContactForm />
          <SupportCards />
          <Footer />
          <ContactButtons />
        </>
      )}

      {/* ✅ Only show admin content on '/admin' */}
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <div className="flex min-h-screen flex-col md:flex-row">
              <Nav />
              <ProtectedRoute>
                <div className="flex-1 overflow-auto">
                  <BookingList />
                </div>
              </ProtectedRoute>
            </div>
          }
        />

        <Route path="/data" element={<ServiceRequestList />} />
      </Routes>
    </div>
  );
};

export default App;
