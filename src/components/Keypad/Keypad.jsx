import React from 'react';
import PropTypes from 'prop-types';
import Key from "../Key/Key";
import './Keypad.css';

const propTypes = {
    
};


const Keypad = ({ callOperator, numbers, operators, setOperator, updateDisplay }) => {
    //render keypad number keys
    const numberKeys = numbers.map(number => (
        <Key
          key={number}
          keyAction={updateDisplay}
          keyType="number-key"
          keyValue={number}
        />)
      );
    
      const operatorKeys = operators.map(operator => (
        <Key
          key={operator}
          keyAction={setOperator}
          keyType="operator-key"
          keyValue={operator}
        />)
      );

    return (
        <div className="keypad-container">
            <div className="numbers-container">
                {numberKeys}
            </div>
            <div className="operators-container">
                {operatorKeys}
            </div>
            <Key
                keyAction={callOperator}
                keyType="submit-key"
                keyValue="="
            />
        </div>
    );
};


Keypad.propTypes = {
    callOperator: PropTypes.func.isRequired,
    numbers: PropTypes.array.isRequired,
    operators: PropTypes.array.isRequired,
    setOperator: PropTypes.func.isRequired,
    updateDisplay: PropTypes.func.isRequired,
  }


export default Keypad;
