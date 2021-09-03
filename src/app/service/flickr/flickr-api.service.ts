import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Data } from '../data.model';

@Injectable({
  providedIn: 'any',
})
export class FlickrApiService {
  constructor(private http: HttpClient) {}

  URL: string = `https://api.flickr.com/services/feeds/photos_public.gne`;
  PARAMS: string = `?format=json&jsoncallback=JSONP_CALLBACK`;
  POSTS: string = URL + this.PARAMS;

  fetchImages(): Observable<Data> {
    return this.http
      .jsonp<Data>(this.POSTS, 'JSONP_CALLBACK')
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    const errorMessage =
      error.error instanceof ErrorEvent
        ? error.error.message
        : error.status + error.message;
    return throwError(errorMessage);
  }
}
