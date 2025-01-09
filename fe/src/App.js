import Home from "./pages/Home";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizPage from "./pages/QuizPage";
import FlashcardPage from "./pages/FlashcardPage";

function App() {
  return (
    <main>
      <Router>
          <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/quiz" element={<QuizPage/>} />
                <Route path="/flashcard" element={<FlashcardPage/>} />
          </Routes>
      </Router>
    </main>

  );
}

export default App;
