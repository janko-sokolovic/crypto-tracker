import axios from 'axios';

const API_KEY = 'apiKey=F8F4A75C-6E67-4287-9C6E-040282572AFC';

const BASE_URL = 'https://rest.coinapi.io/v1/ohlcv';

const PERIOD = '2HRS';

export const ACTIONS = {
    FETCH_CRYPTO: 'FETCH_CRYPTO'
}

export function fetchCrypto(name) {
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    // this is starting period when we are fetching data
    // set to 1 day before => 12 items
    const startTime = `time_start=${yesterday.toISOString()}`;

    const period = `period_id=${PERIOD}`

    const url = `${BASE_URL}/COINBASE_SPOT_${name}_USD/history?${period}&${startTime}&${API_KEY}`

    const request = axios.get(url, {
        headers: {
            'Accept': 'application/json'
        }
    });

    return {
        type: ACTIONS.FETCH_CRYPTO,
        payload: request
    }

}