import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
// import About from './pages/About';
// import Schedule from './pages/Schedule';
// import Pricing from './pages/Pricing';
import Registration from './pages/Registration';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          {/* <Route path="about" element={<About />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="pricing" element={<Pricing />} /> */}
          <Route path="register" element={<Registration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}