import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.scss'],
})
export class NewListingPageComponent implements OnInit {
  constructor(
    private router: Router,
    private listingService: ListingsService
  ) {}

  ngOnInit() {}

  onSubmit({ name = '', description = '', price = 0 }: Partial<Listing>) {
    this.listingService
      .createListing(name, description, price)
      .subscribe(() => {
        this.router.navigateByUrl('/my-listing');
      });
  }
}
