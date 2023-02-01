import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.scss'],
})
export class ListingDetailPageComponent implements OnInit {
  isLoading: boolean = true;
  list!: Listing;

  constructor(
    private route: ActivatedRoute,
    private listingsService: ListingsService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return console.log('Not found');

    this.listingsService.getListingById(id).subscribe((listing) => {
      this.list = listing;
      this.isLoading = false;
    });
    this.listingsService
      .addViewToListing(id)
      .subscribe(() => console.log('Views updated!'));
  }
}
