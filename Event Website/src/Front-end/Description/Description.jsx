import React from 'react';
import './Description.css';
import eventImage from '../../Images/event-homepage.svg';

const Description = () => {
  return (
    <div className="description-container">
      <div className="event-image-container">
        <img src={eventImage} alt="JS Galaxy Event" className="event-image" />
      </div>
      <div className="event-details">
        <h1 className="event-title">JS Galaxy: Exploring the Universe of JavaScript</h1>
        <div className="event-info">
          <p className="event-price">$299</p>
          <p className="event-category">Development</p>
          <p className="event-organizer">by Faizan | JS Mastery</p>
        </div>
        <button className="get-ticket-btn">Get Ticket</button>
        <div className="event-date-location">
          <p className="event-date">
            <span className="icon">📅</span>
            Wed, Dec 20, 2023 / 2:30 PM - 1:00 PM
          </p>
          <p className="event-location">
            <span className="icon">📍</span>
            Houston Space Center, TX
          </p>
        </div>
        <div className="event-description">
          <h2>What You'll Learn:</h2>
          <p>
            Embark on a cosmic journey through the galaxy of JavaScript
            at JS Galaxy! This event brings together JavaScript developers
            and enthusiasts for an out-of-this-world experience. Dive into
            deep-space discussions on the latest ECMAScript features,
            cutting-edge frameworks, and futuristic JavaScript
            technologies.
          </p>
          <a href="http://jsgalaxy.universe.com/" target="_blank" rel="noopener noreferrer">
            http://jsgalaxy.universe.com/
          </a>
        </div>
      </div>
    </div>
  );
};

export default Description;