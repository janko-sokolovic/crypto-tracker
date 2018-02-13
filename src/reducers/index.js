import { combineReducers } from 'redux';
import {CryptoReducer, AllCryptosReducer} from './CryptoReducer';

const rootReducer = combineReducers(
    {
        cryptos: CryptoReducer,
        allCryptos: AllCryptosReducer
    }
);

export default rootReducer;