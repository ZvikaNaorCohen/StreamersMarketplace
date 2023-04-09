import React, { useState, useEffect } from "react";
import "./NFTPrice.css";

const Pricing = ({ Price }) => {
  const [currPrice, setCurrPrice] = useState(parseFloat(Price));
  const [currency] = useState("ETH");
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    // This function will be called every time the amount changes
    // Update the current price based on the new amount
    setCurrPrice(amount * parseFloat(Price));
  }, [amount, Price]);

  const incrementAmount = () => {
    setAmount(amount + 1);
  };

  const decrementAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  return (
    <div className="price-container">
      <h2 className="price-current"> current price</h2>
      <h1 className="price-value">
        {" "}
        {currPrice.toFixed(2)} {currency}
      </h1>
      <div className="counter-container">
        <button className="counter-button" onClick={decrementAmount}>
          -
        </button>
        <div className="counter-value">{amount}</div>
        <button className="counter-button" onClick={incrementAmount}>
          +
        </button>
      </div>
      <button className="buy-button"> Buy {amount} now</button>
    </div>
  );
};

export default Pricing;
