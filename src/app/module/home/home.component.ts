import { Component, OnInit } from '@angular/core';
import { FlickrApiService } from 'src/app/service/flickr/flickr-api.service';
import { Images } from 'src/app/service/data.model';

import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private flickRApiService: FlickrApiService) {}

  theme: string = 'light';

  title: string = '';
  source: string = '';

  isPageLoaded: boolean = false;
  isError: boolean = false;

  items: Images[] = [];

  noOfItems: number = 5;
  itemsPerPage: number[] = [5, 10, 15, 20];

  moment: any = moment;

  ngOnInit(): void {
    this.loadImages();
  }

  changeTheme() {
    if (this.theme === 'light') this.theme = 'dark';
    else this.theme = 'light';
  }

  loadImages() {
    this.isPageLoaded = false;
    this.flickRApiService.loadImages().subscribe(
      (res) => {
        this.items = res.items.splice(
          res.items.length - this.noOfItems,
          this.noOfItems
        );
        this.title = res.title;
        this.source = res.link;

        setTimeout(() => {
          this.isPageLoaded = true;
        }, 500);
      },
      (error) => {
        this.isPageLoaded = true;
        this.isError = true;
        this.items = [];
        this.title =
          'Error 500, Something went wrong/ Currently sever unavailable';
      }
    );
  }

  TimeFormatter(date: string): string {
    return moment(date).fromNow();
  }

  TitleFiller(title: string): string {
    if (title === '') return 'No Title';
    return title;
  }

  goToPage(link: string) {
    window.location.href = link;
  }
}
