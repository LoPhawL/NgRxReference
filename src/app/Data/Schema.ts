import { Auction } from '../Models/Auction.model';

export interface StateSchema{
    readonly Auctions?:Array<Auction>;
}

export interface StoreAction
{
    type: string;
    payload:any;
}