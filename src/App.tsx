import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Technology from './pages/Technology';
import Metrics from './pages/Metrics';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="technology" element={<Technology />} />
            <Route path="metrics" element={<Metrics />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}
