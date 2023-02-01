import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.scss'],
})
export class EditListingPageComponent implements OnInit {
  list!: Listing;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private listingService: ListingsService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return console.log('Not Found');
    this.listingService
      .getListingById(id)
      .subscribe((listing) => (this.list = listing));
  }

  onSubmit({ name = '', description = '', price = 0 }: Partial<Listing>) {
    this.listingService
      .editListing(this.list.id, name, description, price)
      .subscribe(() => {
        this.router.navigateByUrl('/my-listing');
      });
  }
}
