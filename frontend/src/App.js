import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'views/Home';
import './App.css';
import 'normalize.css';

function App() {
  return (
    <BrowserRouter>
      <span>Hello React!</span>
      <Routes>
        <Route path='home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
