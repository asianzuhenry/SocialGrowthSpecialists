import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Packages from '../pages/Packages';
import WhyUs from '../pages/WhyUs';
import Contact from '../pages/Contact';

const AppRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/why-us" element={<WhyUs />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  </Routes>
);

export default AppRoutes;
