import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { ScrollToTop } from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import Places from './pages/Places.jsx';
import Food from './pages/Food.jsx';
import Events from './pages/Events.jsx';
import Temples from './pages/Temples.jsx';
import Plan from './pages/Plan.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <div className="page">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<Places />} />
          <Route path="/food" element={<Food />} />
          <Route path="/events" element={<Events />} />
          <Route path="/temples" element={<Temples />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
