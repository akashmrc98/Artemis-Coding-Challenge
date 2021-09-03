import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { FlickrApiService } from 'src/app/service/flickr/flickr-api.service';

describe('Flickr Api Service', () => {
  let injector: TestBed;
  let service: FlickrApiService;
  let httpMock: HttpClientTestingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlickrApiService],
    });

    injector = getTestBed();
    service = injector.get(FlickrApiService);
    httpMock = injector.inject(HttpTestingController);
  });

  it('Should Flickr Api Service is created', () => {
    expect(service).toBeTruthy();
  });

  it('Should verify URL & PARAMS', () => {
    const URL: string = `https://api.flickr.com/services/feeds/photos_public.gne`;
    const PARAMS: string = `?format=json&jsoncallback=JSONP_CALLBACK`;
    expect(service.URL).toEqual(URL);
    expect(service.PARAMS).toEqual(PARAMS);
  });
});
