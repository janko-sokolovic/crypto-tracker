import { combineReducers } from 'redux';
import {CryptosDataReducer, AllCryptosReducer} from './CryptoReducer';

const rootReducer = combineReducers(
    {
        cryptosData: CryptosDataReducer,
        allCryptos: AllCryptosReducer
    }
);

export default rootReducer;