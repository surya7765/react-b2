import './App.css';
import Home from './components/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from './components/pages/Counter';
import TodoApp from './components/pages/Todo';
import News from './components/pages/News';
import Feedback from './components/pages/Feedback';
import GameApp from './components/game/GameApp';
import Dashboard from './auth/Dashboard';
import Login from './auth/Login';
import ProtectedRoute from './auth/ProtectedRoute';
import { AuthProvider } from './auth/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/news" element={<ProtectedRoute><News/></ProtectedRoute>} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/game" element={<GameApp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}


export default App;
