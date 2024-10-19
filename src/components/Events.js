import React from 'react';
import '../styles/Events.css';

const Events = () => {
  return (
    <div className="events" id="events">
      <h2>Upcoming Events</h2>
      <div className="event-list">
        <div className="event-item">
          <h3>Event 1</h3>
          <p>Date: October 25th</p>
          <p>Description: Fun and exciting event!</p>
        </div>
        <div className="event-item">
          <h3>Event 2</h3>
          <p>Date: November 3rd</p>
          <p>Description: Another great event coming up!</p>
        </div>
      </div>
    </div>
  );
};

export default Events;