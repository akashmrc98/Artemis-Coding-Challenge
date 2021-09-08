import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FlickrApiService } from 'src/app/service/flickr/flickr-api.service';
import { Data } from '../data.model';
import { data } from '../../module/home/home.component.spec';
import { of } from 'rxjs';

describe('Flickr Api Service', () => {
  let service: FlickrApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlickrApiService],
    });
    service = TestBed.get(FlickrApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('Flickr Api Service creation', () => {
    expect(service).toBeTruthy();
  });

  it('Verifying URL & PARAMS', () => {
    const URL: string = `https://api.flickr.com/services/feeds/photos_public.gne`;
    const PARAMS: string = `?format=json&jsoncallback=JSONP_CALLBACK`;
    expect(service.URL).toEqual(URL);
    expect(service.PARAMS).toEqual(PARAMS);
  });

  it('Calling API Service', () => {
    spyOn(service, 'fetchImages').and.returnValue(of(data));
    service.fetchImages().subscribe((d: Data) => {
      expect(d).toEqual(data);
    });
  });
});
