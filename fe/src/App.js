import Home from "./pages/Home";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Practice from "./pages/Practice";

function App() {
  return (
    <main>
      <Router>
          <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/practice" element={<Practice/>} />
          </Routes>
      </Router>
    </main>

  );
}

export default App;
