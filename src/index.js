import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Protected from './components/Protected';
import Home from './Pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
    <Route path='signup' element={<Signup />}/>
    <Route path='login' element={<Login />}/>
    <Route path='/' element={<Protected />}/>
    <Route path='/home' index element={<Home />}/>
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
