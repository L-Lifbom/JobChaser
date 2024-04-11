import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AuthProvider from './components/AuthContext';
import { store } from './store/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  </React.StrictMode>,
)
