import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import JobsPage from './pages/JobsPage';
import SignUpPage from './pages/SignUpPage';
import './style/index.css';

function App() {
  return (
    <BrowserRouter>
      <div className='main-container'>
        <Nav />
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<Navigate replace to="/jobs" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Nav() {
  return (
      <div className='nav-bar'>
        <ul>
          <li><Link to="/jobs">Jobs</Link></li>
        </ul>
        <div className='login-nav-container'>
          <div className='horizontal-line'></div>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>

  )
}

export default App;