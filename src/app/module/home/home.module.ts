import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ChipModule } from 'primeng/chip';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    FormsModule,
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    ChipModule,
    ButtonModule,
    DropdownModule,
    ProgressSpinnerModule,
  ],
})
export class HomeModule {}
