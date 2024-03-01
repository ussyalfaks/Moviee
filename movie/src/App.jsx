import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Trailer from './Trailer';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/movie/:id" element={<Trailer/>} />
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
