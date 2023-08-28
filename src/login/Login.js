import React, { useState } from 'react';
import './Login.css'; // Import your CSS file

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [showTravelPackages, setShowTravelPackages] = useState(false); // Add state for showing travel packages

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  const handleSignupSubmit = () => {
    setShowTravelPackages(true); // Show travel packages after signing up
  };

  return (
    <div className="main-container">
      {showSignup ? (
        <SignupPage onSubmit={handleSignupSubmit} /> // Pass the onSubmit handler to SignupPage
      ) : (
        <div>
          <div className="content">
            <h1>Welcome to Travel and Tourism</h1>
            <p>Explore the world with our amazing travel packages.</p>
          </div>
          <div className="auth-options">
            <button className="auth-button" onClick={handleSignupClick}>
              Sign Up
            </button>
          </div>
        </div>
      )}

      {showTravelPackages && <TravelPackages />} 
    </div>
  );
}

function SignupPage({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(); 
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}> 
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  }

function TravelPackages() {
  // Travel packages component remains the same
  const packagesByRoad = [
    {
      id: 1,
      name: 'Road Trip Adventure',
      description: 'Explore scenic routes and beautiful landscapes by road.',
      price: '$199',
    },
    {
      id: 2,
      name: 'Coastal Drive Getaway',
      description: 'Enjoy a leisurely drive along the coastlines.',
      price: '$249',
    },
  ];

  const packagesByAir = [
    {
      id: 1,
      name: 'City-Hopper Tour',
      description: 'Visit multiple cities quickly and conveniently by air.',
      price: '$499',
    },
    {
      id: 2,
      name: 'Island Paradise Expedition',
      description: 'Fly to remote islands for an unforgettable experience.',
      price: '$799',
    },
  ];

  const packagesByTrain = [
    {
      id: 1,
      name: 'Transcontinental Journey',
      description: 'Cross the country by train and witness diverse landscapes.',
      price: '$349',
    },
    {
      id: 2,
      name: 'Mountain Express Expedition',
      description: 'Experience mountains and valleys from the comfort of a train.',
      price: '$299',
    },
  ];

  return (
    <div className="travel-packages">
      <h2>Travel Packages</h2>
      <div className="package-category">
        <h3>By Road</h3>
        <div className="package-list">
          {packagesByRoad.map((pkg) => (
            <div className="package" key={pkg.id}>
              <h4>{pkg.name}</h4>
              <p>{pkg.description}</p>
              <p>Price: {pkg.price}</p>
              <button>Book Now</button>
            </div>
          ))}
        </div>
      </div>
      <div className="package-category">
        <h3>By Air</h3>
        <div className="package-list">
          {packagesByAir.map((pkg) => (
            <div className="package" key={pkg.id}>
              <h4>{pkg.name}</h4>
              <p>{pkg.description}</p>
              <p>Price: {pkg.price}</p>
              <button>Book Now</button>
            </div>
          ))}
        </div>
      </div>
      <div className="package-category">
        <h3>By Train</h3>
        <div className="package-list">
          {packagesByTrain.map((pkg) => (
            <div className="package" key={pkg.id}>
              <h4>{pkg.name}</h4>
              <p>{pkg.description}</p>
              <p>Price: {pkg.price}</p>
              <button>Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default App