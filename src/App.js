import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Education from './pages/Education';
import Background from './pages/Background';
import Performances from './pages/Performances';
import Interpretation from './pages/Interpretation';
import Community from './pages/Community';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/background" element={<Background />} />
          <Route path="/performances" element={<Performances />} />
          <Route path="/interpretation" element={<Interpretation />} />
          <Route path="/community" element={<Community />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
