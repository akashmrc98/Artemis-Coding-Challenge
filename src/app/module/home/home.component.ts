import { Component, OnInit } from '@angular/core';
import { FlickrApiService } from 'src/app/service/flickr/flickr-api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private flickRApiService: FlickrApiService) {}

  items: any[] = [];
  title: string = '';
  source: string = '';
  isPageLoaded: boolean = false;

  noOfItems: number = 5;
  itemsPerPage: number[] = [5, 10, 15, 20];

  moment: any = moment;
  theme: string = 'light';

  changeTheme() {
    if (this.theme === 'light') this.theme = 'dark';
    else this.theme = 'light';
  }

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages() {
    this.isPageLoaded = false;
    this.flickRApiService.loadImages().subscribe((res) => {
      this.items = res.items.splice(
        res.items.length - this.noOfItems,
        this.noOfItems
      );
      this.title = res.title;
      this.source = res.link;
    });
    setTimeout(() => {
      this.isPageLoaded = true;
    }, 500);
  }

  TimeFormatter(date: string) {
    return moment(date).fromNow();
  }

  TitleFiller(title: string) {
    if (title === '') return 'No Title';
    return title;
  }

  goToPage(link: string) {
    window.location.href = link;
  }
}
