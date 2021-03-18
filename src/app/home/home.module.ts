import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PaletteCardComponent } from './palette-card/palette-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomeComponent, PaletteCardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
