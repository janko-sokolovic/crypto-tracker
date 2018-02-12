import axios from 'axios';

import CoinApiUrlFactory from './CoinApiUrlFactory';

export const ACTIONS = {
    FETCH_CRYPTO: 'FETCH_CRYPTO'
}

//Action-creators 
export function fetchCrypto(name) {

    const url = CoinApiUrlFactory.create(name);

    const request = axios.get(url, {
        headers: { 'Accept': 'application/json' }
    });

    return {
        type: ACTIONS.FETCH_CRYPTO,
        payload: request,
        meta: name
    }

}