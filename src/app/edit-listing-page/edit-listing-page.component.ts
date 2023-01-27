import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Listing} from "../types";
import {fakeListing} from "../fake-data";

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.scss'],
})
export class EditListingPageComponent implements OnInit {
  list!: Listing;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.list = fakeListing.filter((l) => id === l.id.toString())[0];
  }

  onSubmit() {
    alert('Saving changes to the listing...');
    this.router.navigateByUrl('/my-listing');
  }
}
