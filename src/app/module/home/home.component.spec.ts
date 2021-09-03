import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Observable } from 'rxjs';
import { FlickrApiService } from 'src/app/service/flickr/flickr-api.service';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: FlickrApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        CommonModule,
        HomeRoutingModule,
        CarouselModule,
        ButtonModule,
        DropdownModule,
        ProgressSpinnerModule,
        HttpClientJsonpModule,
        HttpClientModule,
      ],
      declarations: [HomeComponent],
      providers: [FlickrApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(FlickrApiService);
    fixture.detectChanges();
  });

  it('should created', () => {
    expect(component).toBeTruthy();
  });
});
