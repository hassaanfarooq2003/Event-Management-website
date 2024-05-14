import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Back-end/Header';
import Homepage from './Front-end/homepage';
import Footer from './Back-end/Footer';
import Events from './Front-end/Events/Events';
import CardForm from './Front-end/CreateMyCardsForm/CardForm';
import MyCards from './Front-end/MyCards/MyCards';
import ReservedCards from './Front-end/ReservedCards/ReservedCards';
import Login from './Front-end/Login_Signup/Login';
import Signup from './Front-end/Login_Signup/Signup';
import Contact from './Front-end/Contact/Contact';
import Payment from './Front-end/Payment/Payment'
import './App.css';
import CreditCard from './Front-end/Payment/CreditCard';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/events" element={<Events />} />
            <Route path="/create-card" element={<CardForm />} />
            <Route path="/my-cards" element={<MyCards />} />
            <Route path="/reserved-cards" element={<ReservedCards />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;