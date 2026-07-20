import React, { useState } from 'react';

function App() {
  
  const [counter, setCounter] = useState(5);

  
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  
  const handleIncrement = () => {
  
    setCounter(prevCount => prevCount + 1);
    
    alert("Hello! Member1");
  };

  
  const handleDecrement = () => {
    setCounter(prevCount => prevCount - 1);
  };

  
  const handleSayWelcome = (message) => {
    alert(message);
  };

  
  const handleSyntheticEvent = (e) => {
  
    alert("I was clicked");
  };

  
  const handleSubmit = (e) => {
    
    e.preventDefault();
    
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount)) {
      alert("Please enter a valid numeric amount.");
      return;
    }

  
    const convertedAmount = parsedAmount * 80;
    alert(`Converting to ${currency} Amount is ${convertedAmount}`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Dynamic counter readout */}
      <div>
        <h3>{counter}</h3>
      </div>

    
      <div style={{ display: 'flex', flexDirection: 'column', width: '120px', gap: '5px', marginBottom: '30px' }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={() => handleSayWelcome('welcome')}>Say welcome</button>
        <button onClick={handleSyntheticEvent}>Click on me</button>
      </div>

    
      <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
      
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'inline-block', width: '80px' }}>Amount:</label>
          <input 
            type="text" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'inline-block', width: '80px', verticalAlign: 'top' }}>Currency:</label>
          <textarea 
            rows="1"
            value={currency} 
            onChange={(e) => setCurrency(e.target.value)}
            style={{ resize: 'none', height: '24px', width: '170px' }}
          />
        </div>

        <div style={{ paddingLeft: '80px' }}>
          <button type="submit">Submit</button>
        </div>
      </form>

    </div>
  );
}

export default App;