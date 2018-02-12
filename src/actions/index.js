import axios from 'axios';

const API_KEY = 'F8F4A75C-6E67-4287-9C6E-040282572AFC';

const BASE_URL = `https://rest.coinapi.io/v1/ohlcv/COINBASE_SPOT_BTC_USD/history?period_id=10MIN&time_start=2018-02-02T00:00:00`;

export const ACTIONS = {
    FETCH_CRYPTO: 'FETCH_CRYPTO'
}

export function fetchCrypto(name) {

    const request = axios.get(`${BASE_URL}&apiKey=${API_KEY}`, {
        headers: {
            'Accept': 'application/json'
        }
    });

    return {
        type: ACTIONS.FETCH_CRYPTO,
        payload: request
    }

}