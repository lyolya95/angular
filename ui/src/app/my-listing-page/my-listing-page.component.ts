import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-my-listing-page',
  templateUrl: './my-listing-page.component.html',
  styleUrls: ['./my-listing-page.component.scss'],
})
export class MyListingPageComponent implements OnInit {
  listing: Listing[] = [];

  constructor(private listingService: ListingsService) {}

  ngOnInit() {
    this.listingService
      .getListingsForUser()
      .subscribe((listings) => (this.listing = listings));
  }

  onDeleteClicked(listingId: string) {
    this.listingService.deleteListing(listingId).subscribe(() => {
      this.listing = this.listing.filter((l) => l.id !== listingId);
    });
  }
}
