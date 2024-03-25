import { BrowserRouter, Routes, Route, Navigate, Link, Outlet } from 'react-router-dom'
import SignInPage from './pages/SignInPage';
import './style/index.css'
import Nav from './components/nav/nav'
import Main from './components/main/main'

function App() {
  return (
    <BrowserRouter>
      <>
      <div className='main-container'>
          <div>
            <Nav/>
          </div>
          <div>
            <Main/>
          </div>
        </div>
        <Routes>
          <Route path="/signin" element={<SignInPage/>}/>
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App