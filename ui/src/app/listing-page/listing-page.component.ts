import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.scss'],
})
export class ListingPageComponent implements OnInit {
  listing: Listing[] = [];

  constructor(private listingService: ListingsService) {}

  ngOnInit() {
    this.listingService
      .getListings()
      .subscribe((listings) => (this.listing = listings));
  }
}
