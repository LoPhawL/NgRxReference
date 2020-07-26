import { Action } from '@ngrx/store';
import { StateSchema } from './StateSchema';
import * as actionTypes from './Auctions.ActionTypes';

export function AuctionsReducer(state:StateSchema = {}, action:Action)
{
    switch (action.type) {
        case actionTypes.ADD_AUCTION:
            return {...state, Auctions:[...state.Auctions, '']}//new Auction
            break;
        
        default:
            break;
    }
}