import Axios from "axios";
import { useEffect, useState } from "react";
import "./Homepage.css";

/** Homepage of site.
 *
 * Shows welcome message or login/register buttons.
 * Displays searchable cryptocurrency chart from external API
 *
 * Routed at /
 *
 * Routes -> Homepage
 */

function Homepage(){

  const [search, setSearch] = useState("");
  const [crypto, setCrypto] = useState([]);
 
  // Fetching crypto data from the API only
  // once when the component is mounted
  useEffect(() => {
    Axios.get(
`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en`
    ).then((res) => {
      setCrypto(res.data);
    });
  }, []);

 
  return (
      <div className="Homepage">
        <div className="container text-center">
          <h1>Crypto Wallet</h1>
          <img src="https://i.imgur.com/fhrN3qV.png" class="appLogo" alt="Crypto Wallet Logo" />
        </div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <table>
        <thead>
          <tr>
            <td>Rank</td>
            <td colspan="2">Name</td>
            <td>Price</td>
            <td>Change (24h)</td>
            <td>Market Cap</td>
            <td>Volume (24h)</td>
            <td>Supply</td>
          </tr>
        </thead>
        {/* Mapping all the cryptos received from external API */}
        <tbody>
          {/* Filtering to check for the searched crypto by the user*/}
          {crypto
            .filter((val) => {
              return val.name.toLowerCase().includes(search.toLowerCase()) || val.symbol.toLowerCase().includes(search.toLowerCase());
            })
            .map((val, id) => {
              return (
                <>
                  <tr id={id}>
                    <td className="rank">{val.market_cap_rank}</td>
                    <td><img src={val.image} alt="crypto icon" class="cryptoIcon"/></td>
                    <td>{val.name}<p class="symbol">{val.symbol.toUpperCase()}</p></td>
                    <td>{formatNumber(val.current_price,'$')}</td>
                    <td class={`${val.price_change_percentage_24h >= 0 ? "trendUp" : "trendDown"}`}>{val.price_change_percentage_24h >= 0 ? "↗" : "↘"} {val.price_change_percentage_24h.toFixed(2)} %</td>
                    <td>{formatNumber(val.market_cap,'$')}</td>
                    <td>{formatNumber(val.total_volume,'$')}</td>
                    <td>{formatNumber(val.circulating_supply)}</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );

}


function formatNumber(number,currencySymbol) {
    if(!currencySymbol){
      currencySymbol = "";
    }
    else{
      currencySymbol = currencySymbol + " ";
    }

    if(number >= 1000000000000){  //trillion abbreviation
      return currencySymbol + (number/1000000000000).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") + " T";
    }
    if(number >= 1000000000){  //billion abbreviation
        return currencySymbol + (number/1000000000).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") + " B";
    }
    if(number >= 1000000){  //million abbreviation
      return currencySymbol + (number/1000000).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") + " M";
    }

    return currencySymbol + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

export default Homepage;