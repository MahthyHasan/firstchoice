import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Preloader from './components/common/Preloader';
import useMainJs from './hooks/useMainJs';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Public pages
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
import Location from './pages/Location';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermCondition from './pages/TermCondition';
import Error404 from './pages/Error404';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import EmailVerificationPage from './pages/auth/EmailVerificationPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';

// Dashboard Pages
import PatientDashboard from './pages/dashboard/PatientDashboard';
import AdminDashboard from './pages/dashboard/AdminDashboard';

function AppContent() {
  useMainJs();
  const location = useLocation();

  // Hide header & footer on auth pages and dashboard screens
  const isDashboardOrAuth =
    location.pathname.startsWith('/dashboard') ||
    location.pathname === '/login' ||
    location.pathname === '/register' ||
    location.pathname === '/verify-email' ||
    location.pathname === '/forgot-password' ||
    location.pathname === '/reset-password';

  return (
    <>
      <Preloader />
      {!isDashboardOrAuth && <Header />}

      <Routes>
        {/* Public Website Routes */}
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
        <Route path="/location" element={<Location />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/term-condition" element={<TermCondition />} />

        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        {/* Protected Dashboard Routes */}
        <Route
          path="/dashboard/patient/*"
          element={
            <ProtectedRoute role="patient">
              <PatientDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/admin/*"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Error404 />} />
      </Routes>

      {!isDashboardOrAuth && <Footer />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
