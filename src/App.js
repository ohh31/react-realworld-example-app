import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Setting from './pages/Setting';
import Editor from './pages/Editor';
import Article from './pages/Article';
import SignUp from './pages/SignUp';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/article" element={<Article />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
