import { of } from 'rxjs';
import * as moment from 'moment';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Data } from 'src/app/service/data.model';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import { HomeRoutingModule } from './home-routing.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlickrApiService } from 'src/app/service/flickr/flickr-api.service';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

export const data: Data = {
  title: 'Uploads from everyone',
  link: 'https://www.flickr.com/photos/',
  description: '',
  modified: '2021-09-03T06:53:24Z',
  generator: 'https://www.flickr.com',
  items: [
    {
      title: 'snapshot',
      link: 'https://www.flickr.com/photos/193486652@N04/51420153142/',
      media: {
        m: 'https://live.staticflickr.com/65535/51420153142_f5552d0167_m.jpg',
      },
      date_taken: '2021-09-02T23:53:24-08:00',
      description:
        ' <p><a href="https://www.flickr.com/people/193486652@N04/">juquaialewis</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/193486652@N04/51420153142/" title="snapshot"><img src="https://live.staticflickr.com/65535/51420153142_f5552d0167_m.jpg" width="240" height="180" alt="snapshot" /></a></p> <p><a href="http://maps.secondlife.com/secondlife/Animus Escape/14/200/22" rel="noreferrer nofollow">Visit this location at ~Blazen~ in Second Life</a></p>',
      published: '2021-09-03T06:53:24Z',
      author: 'nobody@flickr.com ("juquaialewis")',
      author_id: '193486652@N04',
      tags: 'firestorm secondlife secondlife:region=animusescape secondlife:parcel=~blazen~ secondlife:x=13 secondlife:y=199 secondlife:z=21',
    },
    {
      title: 'Noch recht junge Zauneidechse',
      link: 'https://www.flickr.com/photos/12639178@N07/51420155692/',
      media: {
        m: 'https://live.staticflickr.com/65535/51420155692_8f0bd45118_m.jpg',
      },
      date_taken: '2021-08-31T15:26:53-08:00',
      description:
        ' <p><a href="https://www.flickr.com/people/12639178@N07/">naturgucker.de</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/12639178@N07/51420155692/" title="Noch recht junge Zauneidechse"><img src="https://live.staticflickr.com/65535/51420155692_8f0bd45118_m.jpg" width="240" height="173" alt="Noch recht junge Zauneidechse" /></a></p> <p>Zauneidechse (Lacerta agilis)<br /> (c) Volker Stoeckmann</p>',
      published: '2021-09-03T06:55:23Z',
      author: 'nobody@flickr.com ("naturgucker.de")',
      author_id: '12639178@N07',
      tags: 'ngid1539878419 lacertaagilis zauneidechse',
    },
    {
      title: 'DSC_4880',
      link: 'https://www.flickr.com/photos/soyuerf/51420155982/',
      media: {
        m: 'https://live.staticflickr.com/65535/51420155982_f21e29384c_m.jpg',
      },
      date_taken: '2016-07-28T19:12:45-08:00',
      description:
        ' <p><a href="https://www.flickr.com/people/soyuerf/">Firuz Soyuer</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/soyuerf/51420155982/" title="DSC_4880"><img src="https://live.staticflickr.com/65535/51420155982_f21e29384c_m.jpg" width="160" height="240" alt="DSC_4880" /></a></p> <p>Via Monte Santo, Alberobello</p>',
      published: '2016-07-28T16:12:45Z',
      author: 'nobody@flickr.com ("Firuz Soyuer")',
      author_id: '96397872@N00',
      tags: '',
    },
    {
      title: 'Der Blick aus dem Fenster.',
      link: 'https://www.flickr.com/photos/150523434@N04/51420900981/',
      media: {
        m: 'https://live.staticflickr.com/65535/51420900981_e04e732705_m.jpg',
      },
      date_taken: '2021-08-31T12:59:39-08:00',
      description:
        ' <p><a href="https://www.flickr.com/people/150523434@N04/">Christa Annarumma</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/150523434@N04/51420900981/" title="Der Blick aus dem Fenster."><img src="https://live.staticflickr.com/65535/51420900981_e04e732705_m.jpg" width="180" height="240" alt="Der Blick aus dem Fenster." /></a></p> <p>Blick auf die“Moschee“ im Schlosspark in Schwetzingen“</p>',
      published: '2021-09-03T06:53:32Z',
      author: 'nobody@flickr.com ("Christa Annarumma")',
      author_id: '150523434@N04',
      tags: '',
    },
    {
      title: 'All are welcome',
      link: 'https://www.flickr.com/photos/189976916@N02/51420901441/',
      media: {
        m: 'https://live.staticflickr.com/65535/51420901441_2fa3e1f8cd_m.jpg',
      },
      date_taken: '2021-08-30T13:54:43-08:00',
      description:
        ' <p><a href="https://www.flickr.com/people/189976916@N02/">dsbnbfxt79</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/189976916@N02/51420901441/" title="All are welcome"><img src="https://live.staticflickr.com/65535/51420901441_2fa3e1f8cd_m.jpg" width="180" height="240" alt="All are welcome" /></a></p> ',
      published: '2021-09-03T06:53:52Z',
      author: 'nobody@flickr.com ("dsbnbfxt79")',
      author_id: '189976916@N02',
      tags: '',
    },
  ],
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: FlickrApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        CommonModule,
        ButtonModule,
        DropdownModule,
        CarouselModule,
        HttpClientModule,
        HomeRoutingModule,
        HttpClientJsonpModule,
        ProgressSpinnerModule,
      ],
      declarations: [HomeComponent],
      providers: [FlickrApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(FlickrApiService);
  });

  it('Component Creation', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Images Loaded from API', () => {
    spyOn(service, 'fetchImages').and.callFake(() => {
      return of(data);
    });

    fixture.detectChanges();
    component.fetchImages();

    expect(component.items).toEqual(data.items);
    expect(component.source).toEqual(data.link);
    expect(component.title).toEqual(data.title);

    expect(component.isError).toEqual(false);
    expect(component.isPageLoaded).toEqual(true);
    expect(component.itemsPerPage).toEqual([5, 10, 15, 20]);
    expect(component.noOfItems).toEqual(5);
    expect(component.theme).toEqual('light');
  });

  it('Change Theme function', () => {
    expect(component.theme).toEqual('light');
    component.changeTheme();
    expect(component.theme).toEqual('dark');
  });

  it('DateTime Formatter function', () => {
    const dateTime = Date.now().toString();
    expect(component.TimeFormatter(dateTime)).toEqual(
      moment(dateTime).fromNow()
    );
  });

  it('Title Formatter function', () => {
    const title = 'Hello world';
    expect(component.TitleFormatter(title)).toEqual(title);
  });

  it('Visting page', () => {
    spyOn(component, 'visitPage').and.stub();
    component.visitPage('www.google.com');
  });
});
