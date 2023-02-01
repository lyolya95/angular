import { Injectable } from '@angular/core';
import { Listing } from './types';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

const httpOptionsWithAuthToken = (token: string) => ({
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    AuthToken: token,
  }),
});

@Injectable({
  providedIn: 'root',
})
export class ListingsService {
  constructor(private http: HttpClient, private auth: AngularFireAuth) {}

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/listings');
  }

  getListingById(id: string): Observable<Listing> {
    return this.http.get<Listing>(`/api/listings/${id}`);
  }

  addViewToListing(id: string): Observable<Listing> {
    return this.http.post<Listing>(
      `/api/listings/${id}/add-view`,
      {},
      httpOptions
    );
  }

  getListingsForUser(): Observable<Listing[]> {
    return new Observable<Listing[]>((observer) => {
      this.auth.user.subscribe((user) => {
        user &&
          user.getIdToken().then((token) => {
            if (token) {
              this.http
                .get<Listing[]>(
                  `/api/users/${user.uid}/listings`,
                  httpOptionsWithAuthToken(token)
                )
                .subscribe((listings) => {
                  observer.next(listings);
                });
            } else {
              observer.next([]);
            }
          });
      });
    });
  }

  deleteListing(id: string): Observable<any> {
    return new Observable<Listing[]>((observer) => {
      this.auth.user.subscribe((user) => {
        user &&
          user.getIdToken().then((token) => {
            this.http
              .delete<any>(
                `/api/listings/${id}`,
                httpOptionsWithAuthToken(token)
              )
              .subscribe(() => observer.next());
          });
      });
    });
  }

  createListing(
    name: string,
    description: string,
    price: number
  ): Observable<Listing> {
    return new Observable<Listing>((observer) => {
      this.auth.user.subscribe((user) => {
        user &&
          user.getIdToken().then((token) => {
            this.http
              .post<Listing>(
                '/api/listings',
                { name, description, price },
                httpOptionsWithAuthToken(token)
              )
              .subscribe(() => observer.next());
          });
      });
    });
  }

  editListing(
    id: string,
    name: string,
    description: string,
    price: number
  ): Observable<Listing> {
    return new Observable<Listing>((observer) => {
      this.auth.user.subscribe((user) => {
        user &&
          user.getIdToken().then((token) => {
            return this.http
              .post<Listing>(
                `/api/listings/${id}`,
                {
                  name,
                  description,
                  price,
                },
                httpOptionsWithAuthToken(token)
              )
              .subscribe(() => observer.next());
          });
      });
    });
  }
}
