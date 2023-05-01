import React from "react";
import WalletCard from "./WalletCard";

/** Show list of wallet cards.
 *
 * Used by both WalletList and WatchlistDetail to list holdings.
 *
 * WalletList -> WalletCardList -> WalletCard *
 */

function WalletCardList({ wallets }) {
  console.debug("WalletCardList", "wallets=", wallets);

  return (
      <div className="WalletCardList">
        {wallets.map(wallet => (
            <WalletCard
                key={wallet.id}
                id={wallet.id}
                userId={wallet.userId}
                currencyName={wallet.currencyName}
                currencyAmount={wallet.currencyAmount}
                currencyType={wallet.currencyType}
            />
        ))}
      </div>
  );
}

export default WalletCardList;