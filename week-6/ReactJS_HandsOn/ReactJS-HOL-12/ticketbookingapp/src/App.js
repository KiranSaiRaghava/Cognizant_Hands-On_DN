import React, { useState } from 'react';

function UserGreeting() {
  return (
    <div>
      <h1>Welcome back</h1>
      <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '5px', maxWidth: '400px' }}>
        <h3>🎟️ Flight Booking Portal</h3>
        <p>You are logged in! You can now select seats and book your flights.</p>
        <button style={{ backgroundColor: '#28a745', color: '#fff', border: 'none', padding: '8px 12px', cursor: 'pointer' }}>
          Book Tickets Now
        </button>
      </div>
    </div>
  );
}


function GuestGreeting() {
  return (
    <div>
      <h1>Please sign up.</h1>
      <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '5px', maxWidth: '400px', backgroundColor: '#f9f9f9' }}>
        <h3>✈️ Available Flights (Browsing Mode)</h3>
        <ul>
          <li>Flight AI-101: Delhi to New York (View Only)</li>
          <li>Flight BA-204: Mumbai to London (View Only)</li>
        </ul>
        <p style={{ color: 'red', fontSize: '14px' }}>*Please log in to book tickets.</p>
      </div>
    </div>
  );
}


function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}


function LoginButton(props) {
  return (
    <button onClick={props.onClick} style={{ padding: '5px 10px', marginTop: '10px' }}>
      Login
    </button>
  );
}


function LogoutButton(props) {
  return (
    <button onClick={props.onClick} style={{ padding: '5px 10px', marginTop: '10px' }}>
      Logout
    </button>
  );
}


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  
  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
    
      <Greeting isLoggedIn={isLoggedIn} />
      
      
      {button}
    </div>
  );
}

export default App;