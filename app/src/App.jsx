import { useCallback, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import LeasingFlow from './components/LeasingFlow.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductPage from './pages/ProductPage.jsx';

export default function App() {
  const [leasing, setLeasing] = useState({ open: false, product: null });

  const openLeasing = useCallback((product = null) => {
    setLeasing({ open: true, product });
  }, []);

  const closeLeasing = useCallback(() => {
    setLeasing({ open: false, product: null });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage onOpenLeasing={() => openLeasing(null)} />} />
        <Route path="/product/:id" element={<ProductPage onOpenLeasing={openLeasing} />} />
        <Route path="*" element={<HomePage onOpenLeasing={() => openLeasing(null)} />} />
      </Routes>
      <Footer />
      {leasing.open && <LeasingFlow product={leasing.product} onClose={closeLeasing} />}
    </>
  );
}
