import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListing } from '../fake-data';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  email: string = '';
  message: string = '';
  list!: Listing;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.list = fakeListing.filter((l) => id === l.id.toString())[0];
    this.message = `Hi, I'm interested in your ${this.list.name.toLowerCase()}!`;
  }

  sendMessage() {
    alert('Your message has been sent!');
    this.router.navigateByUrl('/listing');
  }
}
