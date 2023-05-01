import React from "react";
import { Link } from "react-router-dom";

import "./WatchlistCard.css";

/** Show limited information about a company
 *
 * Is rendered by WatchlistList to show a "card" for each Watchlist (individual watched cryptocurrency).
 *
 * WatchlistList -> WatchlistCard
 */

function WatchlistCard({ name, description, logoUrl, id }) {
  console.debug("WatchlistCard", logoUrl);

  return (
      <Link className="WatchlistCard card" to={`/watchlists/${id}`}>
        <div className="card-body">
          <h6 className="card-title">
            {name}
            {logoUrl && <img src={logoUrl}
                             alt={name}
                             className="float-right ml-5" />}
          </h6>
          <p><small>{description}</small></p>
        </div>
      </Link>
  );
}

export default WatchlistCard;
