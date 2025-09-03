import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import { Login } from './pages/Login.jsx';
import { Cadastro } from './pages/Cadastro.jsx';
import { NotFound } from './pages/NotFound.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },
  {
    path: '/home',
    element: <App/>
  },
  {
    path: '/cadastro',
    element: <Cadastro/>
  },
  {
    path: '*',
    element: <NotFound/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
