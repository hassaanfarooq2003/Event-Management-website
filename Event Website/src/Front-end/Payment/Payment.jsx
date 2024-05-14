import React, { useState, useEffect } from 'react';
import './payment.css';
import CreditCard from './CreditCard';

const Payment = ({ eventData }) => {
  const [cardId, setCardId] = useState('');
  const [ticketType, setTicketType] = useState('');

  useEffect(() => {
    const storedCardId = localStorage.getItem('cardId');
    if (storedCardId) {
      setCardId(storedCardId);
    }
  }, []);

  const handleTicketTypeChange = (event) => {
    setTicketType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary actions here, such as sending the data to the server
    // Then, navigate to the CreditCard component
    // You can use React Router or a state management library like Redux for navigation
  };

  return (
    <div className="paymentform-login">
      <div className="paymentform-form-container">
        <h2 className="paymentform-title">Payment Form</h2>
        {/* ADD THE REST for the input labels
            Also Make input label disabled */}
        {/* <div className="paymentform-event-info">
          <h3>{eventData.title}</h3>
          <p>{eventData.details}</p>
          <p>Location: {eventData.location}</p>
          <p>Date: {new Date(eventData.dateTime).toLocaleString()}</p>
        </div> */}
        <form className="paymentform-form" onSubmit={handleSubmit}>
          <div className="paymentform-input-group">
            <label htmlFor="cardId">Card ID</label>
            <input
              type="text"
              id="cardId"
              value={cardId}
              readOnly
            />
          </div>


          <div className="paymentform-input-group">
            <label htmlFor="ticketType">Ticket Type</label>
            <select id="ticketType" value={ticketType} onChange={handleTicketTypeChange}>
              <option value="">Select Ticket Type</option>
              <option value="vip">VIP</option>
              <option value="regular">Regular</option>
            </select>
          </div>
          <button type="submit" className="paymentform-sign">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;