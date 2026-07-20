import React, { useState } from 'react';

function App() {
  // State management for the counter
  const [counter, setCounter] = useState(5);

  // State management for Currency Converter form inputs
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  // 1. Increment Button calls multiple operations
  const handleIncrement = () => {
    // Operation A: Increment the counter value
    setCounter(prevCount => prevCount + 1);
    // Operation B: Say Hello followed by a static message (matching image)
    alert("Hello! Member1");
  };

  // 2. Decrement Button reduces counter value
  const handleDecrement = () => {
    setCounter(prevCount => prevCount - 1);
  };

  // 3. Dynamic function accepting arguments dynamically
  const handleSayWelcome = (message) => {
    alert(message);
  };

  // 4. Handler demonstrating a synthetic event property usage
  const handleSyntheticEvent = (e) => {
    // 'e' is the React SyntheticEvent object wrapper
    alert("I was clicked");
  };

  // 5. Handles submission and processing calculation for currency exchange
  const handleSubmit = (e) => {
    // Prevent default browser form refresh behavior via synthetic event object
    e.preventDefault();
    
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount)) {
      alert("Please enter a valid numeric amount.");
      return;
    }

    // According to the image: inputting 80 into Amount yields 6400 (Conversion rate is 80)
    const convertedAmount = parsedAmount * 80;
    alert(`Converting to ${currency} Amount is ${convertedAmount}`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Dynamic counter readout */}
      <div>
        <h3>{counter}</h3>
      </div>

      {/* Counter action buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', width: '120px', gap: '5px', marginBottom: '30px' }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={() => handleSayWelcome('welcome')}>Say welcome</button>
        <button onClick={handleSyntheticEvent}>Click on me</button>
      </div>

      {/* Currency Converter Layout Section */}
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