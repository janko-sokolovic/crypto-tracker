import axios from 'axios';

import CoinApiUrlFactory from './CoinApiUrlFactory';

export const ACTIONS = {
    FETCH_CRYPTO: 'FETCH_CRYPTO',
    FETCH_ALL_CRYPTOS: 'FETCH_ALL_CRYPTOS'
}

//Action-creators 
export function fetchCrypto(name) {
    const url = CoinApiUrlFactory.createSingleCryptoUrl(name);

    const request = axios.get(url, {
        headers: { 'Accept': 'application/json' }
    });

    return {
        type: ACTIONS.FETCH_CRYPTO,
        payload: request,
        meta: name
    }
}

export function fetchAllCryptos() {
    const url = CoinApiUrlFactory.createAllCryptosUrl();

    const request = axios.get(url, {
        headers: { 'Accept': 'application/json' }
    });

    return {
        type: ACTIONS.FETCH_CRYPTO,
        payload: request
    }
}