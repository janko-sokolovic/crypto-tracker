import { combineReducers } from 'redux';
import {CryptoReducer, AllCryptosReducer} from './CryptoReducer';

const rootReducer = combineReducers(
    {
        crypto: CryptoReducer,
        allCryptos: AllCryptosReducer
    }
);

export default rootReducer;