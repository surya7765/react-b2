import './App.css';
import Home from './components/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from './components/pages/Counter';
import TodoApp from './components/pages/Todo';
import News from './components/pages/News';
import Feedback from './components/pages/Feedback';
import GameApp from './components/game/GameApp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/news" element={<News />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/game" element={<GameApp />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}


export default App;
