/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Technology from './pages/Technology';
import Metrics from './pages/Metrics';
import Library from './pages/Library';
import Contact from './pages/Contact';
import { LeadWizardProvider } from './components/LeadWizardProvider';

export default function App() {
  return (
    <BrowserRouter>
      <LeadWizardProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="technology" element={<Technology />} />
            <Route path="metrics" element={<Metrics />} />
            <Route path="library" element={<Library />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </LeadWizardProvider>
    </BrowserRouter>
  );
}
