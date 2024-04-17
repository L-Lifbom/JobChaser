import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import JobsPage from './pages/JobsPage';
import SignUpPage from './pages/SignUpPage';
import { useAuth } from './components/AuthContext';
import './style/index.css';
function App() {
    return (_jsx(BrowserRouter, { children: _jsxs("div", { className: 'body-container', children: [_jsx(Nav, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/jobs", element: _jsx(JobsPage, {}) }), _jsx(Route, { path: "/signin", element: _jsx(SignInPage, {}) }), _jsx(Route, { path: "/signup", element: _jsx(SignUpPage, {}) }), _jsx(Route, { path: "/", element: _jsx(Navigate, { replace: true, to: "/jobs" }) })] })] }) }));
}
function Nav() {
    const { user, signOut } = useAuth();
    return (_jsxs("div", { className: 'nav-bar', children: [_jsx("ul", { children: _jsx("li", { children: _jsx(Link, { to: "/jobs", children: "Jobs" }) }) }), _jsxs("div", { className: 'login-nav-container', children: [_jsx("div", { className: 'horizontal-line' }), user ? (_jsxs(_Fragment, { children: [_jsxs("p", { children: ["Logged in as ", _jsx("span", { children: user.email })] }), _jsx("button", { onClick: () => signOut(), children: "Sign Out" })] })) : (_jsxs(_Fragment, { children: [_jsx(Link, { to: "/signin", children: "Sign In" }), _jsx(Link, { to: "/signup", children: "Sign Up" })] }))] })] }));
}
export default App;
