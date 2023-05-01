import React, { useState, useEffect } from "react";
import Search from "../common/SearchForm";
import CryptoApi from "../api/api";
import WalletCardList from "./WalletCardList";
import LoadingSpinner from "../common/LoadingSpinner";

/** Show page with list of wallets (individual asset holdings).
 *
 * On mount, loads wallets from API.
 *
 * WalletList -> WalletCardList -> WalletCard
 *
 * This is routed to at /wallets
 */

function WalletList() {
  console.debug("WalletList");

  const [wallets, setWallets] = useState(null);

  useEffect(function getAllWalletsOnMount() {
    console.debug("WalletList useEffect getAllWalletsOnMount");
    search();
  }, []);

  if (!wallets) return <LoadingSpinner />;

  return (
      <div className="WalletList col-md-8 offset-md-2">
        <Search searchFor={search} />
        {wallets.length
            ? <WalletCardList wallets={wallets} />
            : <p className="lead">You are not holding any currencies!</p>
        }
      </div>
  );
}

export default WalletList;