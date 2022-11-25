import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import NavBar from './pages/NavBar';
import CreateCard from './pages/createCard';
import PageInicio from './pages/inicio';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <App />
    <BrowserRouter>
        <NavBar/>
            <Routes>
            <Route path="/" element={<CreateCard />} />
            <Route path="/series" element={<PageInicio />} />
        </Routes>
    </BrowserRouter>
    </>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
