import React, { useState } from 'react';
import './App.css';

import Login from './login/Login'



function App() {
  const [showPackages, setShowPackages] = useState(false);

  const handleSignup = () => {
    setShowPackages(true); // Show packages when signup button is clicked
  };
  
    return (
      <div className="App">
        <Login onSignup={handleSignup} /> {/* Pass the onSignup callback */}
        
      </div>

  );
}

export default App;