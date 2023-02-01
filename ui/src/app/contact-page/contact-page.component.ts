import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListing } from '../fake-data';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  email: string = '';
  message: string = '';
  list!: Listing;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingService: ListingsService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return console.log('Not found');

    this.listingService.getListingById(id).subscribe((listing) => {
      this.list = listing;
      this.message = `Hi, I'm interested in your ${this.list.name.toLowerCase()}!`;
    });
  }

  sendMessage() {
    alert('Your message has been sent!');
    this.router.navigateByUrl('/listing');
  }
}
