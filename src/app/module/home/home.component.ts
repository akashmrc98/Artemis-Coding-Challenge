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

  ngOnInit(): void {
    this.fetchImages();
  }

  changeTheme() {
    if (this.theme === 'light') this.theme = 'dark';
    else this.theme = 'light';
  }

  authorTrimmer(author: string) {
    let user = author.replace('nobody@flickr.com ("', '');
    user = user.replace('"', '');
    user = user.replace(')', '');
    return user;
  }

  fetchImages() {
    this.isPageLoaded = false;
    this.flickRApiService.fetchImages().subscribe(
      (res) => {
        this.items = res.items.splice(
          res.items.length - this.noOfItems,
          this.noOfItems
        );
        this.title = res.title;
        this.source = res.link;
        this.isPageLoaded = true;
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

  TitleFormatter(title: string): string {
    if (title === '') return 'No Title';
    return title;
  }

  visitPage(link: string) {
    window.location.href = link;
  }
}
