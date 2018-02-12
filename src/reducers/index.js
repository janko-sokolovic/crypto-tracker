import { combineReducers } from 'redux';
import CryptoReducer from './CryptoReducer';

const rootReducer = combineReducers(
    {
        cryptos: CryptoReducer
    }
);

export default rootReducer;