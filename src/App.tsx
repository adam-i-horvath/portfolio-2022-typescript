import { Routes, Route } from 'react-router-dom';

import Navbar from './components/components.navbar';
import Home from './pages/pages.home';
import About from './pages/pages.about';
import Contact from './pages/pages.contact';
import Projects from './pages/pages.projects';
import Footer from './components/component.footer';
import ScrollToTop from './components/component.scroll';

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
