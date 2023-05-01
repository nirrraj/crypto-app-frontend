import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class CryptoApi {
  static token;

  //Common request params

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${CryptoApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }


  //Individual routes

  /** USERS */

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }

  static async updateUser(data){
    let res = await this.request(`users/${username}`, data, "patch");
    return res.token;
  }

  static async removeUser(data){
    let res = await this.request(`users/${username}`, data, "delete");
    return res.token;
  }


  /** WATCHLISTS (cryptocurrencies being watched by user) */

  static async getWatchlists(userId) {
    let res = await this.request("watchlists", { userId });
    return res.watchlists;
  }

  static async getWatchlist(id) {
    let res = await this.request(`watchlists/${id}`);
    return res.watchlist;
  }

  static async addWatched(data) {
    let res = await this.request("watchlists", data, "post");
    return res.watchlist;
  }

  static async removeWatched(data) {
    let res = await this.request(`watchlists/${id}`, data, "delete");
    return res.watchlist;
  }


  /** WALLETS (currency holdings) */

  static async getWallets(userId) {
    let res = await this.request("wallets", { userId });
    return res.wallets;
  }

   static async getWallet(id) {
    let res = await this.request(`wallets/${id}`);
    return res.wallet;
  }

  static async addWallet(data) {
    let res = await this.request("wallets", data, "post");
    return res.watchlist;
  }

  static async updateWallet(data) {
    let res = await this.request(`wallets/${id}`, data, "patch");
    return res.token;
  }

  static async removeWallet(data) {
    let res = await this.request(`wallets/${id}`, data, "delete");
    return res.watchlist;
  }


  /** TRANSACTIONS (buy, sell, deposit, withdraw records) */

  static async getTransactions(userId){
    let res = await this.request("transactions", { userId });
    return res.transactions;
  }

  static async getTransaction(id){
    let res = await this.request(`transactions/${id}`);
    return res.transaction;
  }

  static async addTransaction(data) {
    let res = await this.request("transactions", data, "post");
    return res.watchlist;
  }

}


export default CryptoApi;