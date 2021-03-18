import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PaletteService } from '../shared/services/palette.service';

@Injectable({
  providedIn: 'root'
})
export class HomeResolverService implements Resolve<any> {

  constructor(private readonly paletteService: PaletteService) { }

  resolve() {
    return this.paletteService.getPalettes();
  }
}
