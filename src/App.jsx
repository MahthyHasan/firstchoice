import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Preloader from './components/common/Preloader';
import useMainJs from './hooks/useMainJs';

import Home from './pages/Home';
import HomeV2 from './pages/HomeV2';
import HomeV3 from './pages/HomeV3';
import HomeV4 from './pages/HomeV4';
import HomeV5 from './pages/HomeV5';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Doctors from './pages/Doctors';
import DoctorDetails from './pages/DoctorDetails';
import Appointment from './pages/Appointment';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import BlogSidebar from './pages/BlogSidebar';
import BlogDetails from './pages/BlogDetails';
import Shop from './pages/Shop';
import ShopDetails from './pages/ShopDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Facilities from './pages/Facilities';
import Packages from './pages/Packages';
import Pricing from './pages/Pricing';
import Event from './pages/Event';
import EventDetails from './pages/EventDetails';
import Testimonials from './pages/Testimonials';
import Faq from './pages/Faq';
import PatientResource from './pages/PatientResource';
import Career from './pages/Career';
import Login from './pages/Login';
import Register from './pages/Register';
import Password from './pages/Password';
import Location from './pages/Location';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermCondition from './pages/TermCondition';
import Error404 from './pages/Error404';

function AppContent() {
  useMainJs();
  return (
    <>
      <Preloader />
      <Header />
      <Routes>
        <Route path="/" element={<HomeV2 />} />
        <Route path="/home-v2" element={<HomeV2 />} />
        <Route path="/home-v3" element={<HomeV3 />} />
        <Route path="/home-v4" element={<HomeV4 />} />
        <Route path="/home-v5" element={<HomeV5 />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctor-details" element={<DoctorDetails />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-sidebar" element={<BlogSidebar />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop-details" element={<ShopDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/patient-resource" element={<PatientResource />} />
        <Route path="/career" element={<Career />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password" element={<Password />} />
        <Route path="/location" element={<Location />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/term-condition" element={<TermCondition />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
