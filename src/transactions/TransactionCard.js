import React, { useContext, useState } from "react";
import "./TransactionCard.css";
import UserContext from "../auth/UserContext";

/** Show information about a transaction (an individual buy, sale, deposit, withdrawal)
 *
 * Is rendered by TransactionCard to show a "card" for each transaction record.
 * 
 * TransactionCardList -> TransactionCard
 */

function TransactionCard({ id, userId, transactionType, startCurrencyName, startCurrencyAmount, startCurrencyType, endCurrencyName, endCurrencyAmount, endCurrencyType, timestampUtc }) {
  console.debug("TransactionCard");

  let transactionTitle = "";
  if(transactionType === "sell" || transactionType === "withdraw"){
    transactionTitle = `${transactionType} ${startCurrencyName}`;
  }else{
    transactionTitle = `${transactionType} ${endCurrencyName}`
  }

  return (
      <div className="TransactionCard card">
        <div className="card-body">
          <h6 className="card-title">{transactionTitle}</h6>
          <p>{timestampUtc}</p>
          {startCurrencyName && <div><small>{startCurrencyAmount} {startCurrencyName} ({startCurrencyType})</small></div>}
          {startCurrencyName && <div><small>{endCurrencyAmount} {startCurrencyName} ({startCurrencyType})</small></div>}
        </div>
      </div>
  );
}

export default TransactionCard;