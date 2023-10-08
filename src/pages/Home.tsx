import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PartDescriptor from '../components/PartDescriptor';
import { decrementPart, incrementPart } from '../actions/parts';
import { partsSelector } from '../selectors/local';

import './Home.scss';

const Home = () => {
  const [selectedPart, setSelectedPart] = useState<string>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const parts = useSelector(partsSelector);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    dispatch({type: 'ADD_NEW_PART', name: inputValue})
  };

  return (
    <div>
      <h1>Enter a new part</h1>
      <div>
        <input
          type="text"
          className="inputClass"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new part..."
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <h1>Parts Counter</h1> 
      <hr />
      <ul className="partsList">
        {parts.map(part => (
          <li className={`partsItem ${selectedPart === part.name ? 'selected' : ''}`} key={part.name} onClick={() => setSelectedPart(part.name)}>
            <div className="description">{part.name} {part.amount}</div>
            <button
              onClick={e => {
                dispatch(incrementPart(part.name));
                e.stopPropagation();
              }}
            >
              +
            </button>
            <button
              onClick={e => {
                dispatch(decrementPart(part.name));
                e.stopPropagation();
              }}
            >
              -
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <h2>Part Info</h2>
      {selectedPart &&
        (() => {
          const part = parts.find(x => x.name === selectedPart);
          return <PartDescriptor name={part.name} amount={part.amount} key={part.name}/>;
        })()}
    </div>
  );
};

export default Home;
