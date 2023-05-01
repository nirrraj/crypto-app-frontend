import React, { useState, useEffect } from "react";
import SearchForm from "../common/SearchForm";
import CryptoApi from "../api/api";
import WatchlistCard from "./WatchlistCard";
import LoadingSpinner from "../common/LoadingSpinner";

/** Show page with list of wathched assets, "watchlists"
 *
 * On mount, loads watchlists from API.
 * Re-loads filtered watchlists on submit from search form.   <--- REMOVE
 *
 * This is routed to at /watchlists
 *
 * Routes -> { WatchlistCard, SearchForm }
 */

function WatchlistList() {
  console.debug("WatchlistList");

  const [watchlists, setWatchlists] = useState(null);

  useEffect(function getWatchlistsOnMount() {
    console.debug("WatchlistList useEffect getWatchlistsOnMount");
    search();
  }, []);

  if (!watchlists) return <LoadingSpinner />;

  return (
      <div className="WatchlistList col-md-8 offset-md-2">
        <SearchForm searchFor={search} />
        {watchlists.length
            ? (
                <div className="WatchlistList-list">
                  {watchlists.map(w => (
                      <WatchlistCard
                          key={w.handle}
                          handle={w.handle}
                          cryptoName={w.cryptoName}
                      />
                  ))}
                </div>
            ) : (
                <p className="lead">There are no cryptocurrencies being watched!</p>
            )}
      </div>
  );
}

export default WatchlistList;
