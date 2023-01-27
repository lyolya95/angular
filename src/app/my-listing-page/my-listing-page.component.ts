import { Component, OnInit } from '@angular/core';
import { fakeListing } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-my-listing-page',
  templateUrl: './my-listing-page.component.html',
  styleUrls: ['./my-listing-page.component.scss'],
})
export class MyListingPageComponent implements OnInit {
  listing: Listing[] = [];

  constructor() {}

  ngOnInit() {
    this.listing = fakeListing;
  }

  onDeleteClicked(id: string) {
    alert(`Deleting your listing with id ${id}`);
  }
}
