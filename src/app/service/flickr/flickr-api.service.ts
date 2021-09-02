import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class FlickrApiService {
  constructor(private http: HttpClient) {}

  loadImages(): Observable<any> {
    const url = `https://api.flickr.com/services/feeds/photos_public.gne`;
    const params = `?format=json&jsoncallback=JSONP_CALLBACK`;
    return this.http.jsonp<any>(url + params, 'JSONP_CALLBACK');
  }
}
