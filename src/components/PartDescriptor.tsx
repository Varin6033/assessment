import React, { useState } from 'react';

const PartDescriptor = ({ name, amount }: { name: string; amount: number }) => {
  const [notes, setNotes] = useState('');
  return (
    <div className="partsInfo">
      <h3>Name: {name}</h3>
      <h3>Amount: {amount}</h3>
      <h3>Description: Lorem Ipsum dolor sit amet</h3>
      <h3>
        Notes: <input value={notes} className="inputClass" onChange={e => setNotes(e.target.value)} />
      </h3>
    </div>
  );
};

export default PartDescriptor;
