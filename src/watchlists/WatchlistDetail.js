import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CryptoApi from "../api/api";
import LoadingSpinner from "../common/LoadingSpinner";

/** Watchlist detail page.
 *
 * Renders information about watched cryptocurrency
 *
 * Routed at /watchlists/:id
 *
 */

function WatchlistDetail() {
  const { id } = useParams();
  console.debug("WatchlistDetail", "id=", id);

  const [watchlist, setWatchlist] = useState(null);

  useEffect(function getWatchlist() {
    async function getWatchlist() {
      setWatchlist(await CryptoApi.getWatchlist(id));
    }

    getWatchlist();
  }, [id]);

  if (!watchlist) return <LoadingSpinner />;

  return (
      <div className="WatchlistDetail col-md-8 offset-md-2">
        <h4>{watchlist.cryptoName}</h4>
        <p>{watchlist.cryptoName}</p>
      </div>
  );
}

export default WatchlistDetail;