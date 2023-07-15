import React, { useState, useEffect } from "react";
import "./NFTPrice.css";
import Web3 from "web3";
import axios from "axios";

const Pricing = ({creator, price, id, item }) => {
  const [currency] = useState("ETH");

  async function handleTransaction() {
    let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const weiValueDecimal = Web3.utils.toWei(String(price), "ether");
    const weiValueHex = '0x' + Number(weiValueDecimal).toString(16);

    window.ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: creator.walletNumber,
          value: weiValueHex
        },
      ],
    })
    .then((txHash) => {
      let updatedItem = item;
      updatedItem.ownedBy = accounts[0];
      axios.patch(`http://localhost:5000/item/update/${id}`, updatedItem)
      .then(response => {
        alert(`Purchase successful! \n\nTranscation ID: ${txHash}`);
      })
      .catch(error => {
        alert("Internal server error! Please try again.");
      });
    })
    .catch((error) =>  alert(`Purchase failed! Please try again.`));
  }

  return (
    <div className="price-container">
      <h1 className="price-value">
        {price.toFixed(4)} {currency}
      </h1>
      <button onClick={() => handleTransaction()} className="buy-button">Buy now</button>
    </div>
  );
};

export default Pricing;
