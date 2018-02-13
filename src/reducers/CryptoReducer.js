import { ACTIONS } from '../actions/index';
import _ from 'lodash';

export default function (state = {}, action) {

    switch (action.type) {
        case ACTIONS.FETCH_CRYPTO:
            //extract average values 
            const avgVals = _.map(action.payload.data, d => _.round((d.price_high + d.price_low) / 2));
            return { ...state, [action.meta]: avgVals };
        default:
    }

    return state;
}