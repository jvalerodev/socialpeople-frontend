import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/home';
import Login from 'pages/login';
import Register from 'pages/register';
import Profile from 'pages/profile';
import Theme from 'theme';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Theme>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile/:userId" element={<Profile />} />
          </Routes>
        </Theme>
      </BrowserRouter>
    </div>
  );
};

export default App;
