import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Video from './pages/video';
import Header from './components/Navigation/Navbar';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/video/:id' element={<Video />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
