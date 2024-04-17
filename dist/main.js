import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthProvider from './components/AuthContext';
import { store } from './store/store';
import { Provider } from 'react-redux';
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(AuthProvider, { children: _jsx(Provider, { store: store, children: _jsx(App, {}) }) }) }));
