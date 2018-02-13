const BASE_URL = 'https://rest.coinapi.io/v1/ohlcv';
const API_KEY = 'apiKey=F8F4A75C-6E67-4287-9C6E-040282572AFC';
const PERIOD = '2HRS';

export default class CoinApiUrlFactory {

    /**
     * @param {string} currencyId | simple id for currency, like ETH, BTC,..
     */
    static create(currencyId) {
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        // this is starting period when we are fetching data
        // set to 1 day before => 12 items
        const startTime = `time_start=${yesterday.toISOString()}`;

        const period = `period_id=${PERIOD}`;

        return `${BASE_URL}/COINBASE_SPOT_${currencyId}_USD/history?${period}&${startTime}&${API_KEY}`
    }
}