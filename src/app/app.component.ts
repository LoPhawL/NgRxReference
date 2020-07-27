import { Component, OnInit } from '@angular/core';
import { Auction } from './Models/Auction.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'NgRx';
  autcionsSubscription:Observable<{Auctions:Array<Auction>} >;

  constructor(private store:Store<{auctionsReducer:{Auctions:Array<Auction>}}>)//{Auctions:Array<Auction>}
  {}

  ngOnInit(): void {
    // this.autcionsSubscription = 
    this.store.select('auctionsReducer').subscribe(data => console.log(data));
  }

  AddAuction(askedByEle:HTMLInputElement, priceEle:HTMLInputElement)
  {
    const auction:Auction = new Auction(askedByEle.value, +priceEle.value);
    console.log(auction);
  }

}