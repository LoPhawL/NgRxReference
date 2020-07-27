import { StateSchema, StoreAction } from './Schema';
import * as actionTypes from './Auctions.ActionTypes';
import { Auction } from '../Models/Auction.model';

const initialState = {
    Auctions:[new Auction('Balaji', 23000), new Auction('Sneka', 23100)]
}
export function AuctionsReducer(state:StateSchema = initialState, action:StoreAction)
{
    switch (action.type) {
        case actionTypes.ADD_AUCTION:
            return {...state, Auctions:[...state.Auctions, action.payload]}//new Auction
        
        default:
            return state;
    }
}