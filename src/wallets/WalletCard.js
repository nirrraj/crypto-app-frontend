import React, { useContext, useState } from "react";
import "./WalletCard.css";
import UserContext from "../auth/UserContext";

/** Show information about a wallet (an individual currency holding)
 *
 * Is rendered by WalletCardList to show a "card" for each wallet holding.
 *
 * !!!!!!!!!!!! make API call to external API to get exchange rate in user's native currency ?
 *
 * WalletCardList -> WalletCard
 */

function WalletCard({ id, userId, currencyName, currencyAmount, currencyType }) {
  console.debug("WalletCard");

  return (
      <div className="WalletCard card">
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <p>{currencyName}</p>
          {currencyAmount && <div><small>Quantity: {currencyAmount}</small></div>}
          {currencyType && <div><small>Type: {currencyType}</small></div>}
        </div>
      </div>
  );
}

export default WalletCard;