import React from 'react';

function App() {
  
  const element = "Office Space";

  
  const sr = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80";

  
  const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space" />;

  
  const ItemName = { Name: "DBS", Rent: 50000, Address: 'Chennai' };

  
  const officeSpaces = [
    { Name: "DBS", Rent: 50000, Address: 'Chennai' },
    { Name: "Regus Premium", Rent: 75000, Address: 'Bangalore' },
    { Name: "WeWork Hub", Rent: 58000, Address: 'Mumbai' }
  ];

   
  const getRentStyle = (rentAmount) => {
    
    if (rentAmount <= 60000) {
      return { color: 'red', fontWeight: 'bold' };
    } else {
      return { color: 'green', fontWeight: 'bold' };
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      <h1>{element} , at Affordable Range</h1>
      
      
      {jsxatt}

      <hr />

      
      <h2>Single Office View (From Object)</h2>
      <h1>Name: {ItemName.Name}</h1>
      <h3 style={getRentStyle(ItemName.Rent)}>Rent: Rs. {ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3>

      <hr />

      
      <h2>All Available Office Spaces (From Loop)</h2>
      {officeSpaces.map((office, index) => (
        <div key={index} style={{ marginBottom: '25px', borderBottom: '1px dashed #ccc', paddingBottom: '10px' }}>
          <h3>Name: {office.Name}</h3>
    
          <p style={getRentStyle(office.Rent)}>Rent: Rs. {office.Rent}</p>
          <p>Address: {office.Address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;