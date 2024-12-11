
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Photos } from './pages/Photos';
import { Videos } from './pages/Videos';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
