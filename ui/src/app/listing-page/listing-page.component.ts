import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeListing } from '../fake-data';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.scss'],
})
export class ListingPageComponent implements OnInit {
  listing: Listing[] = [];

  constructor() {}

  ngOnInit() {
    this.listing = fakeListing;
  }
}
