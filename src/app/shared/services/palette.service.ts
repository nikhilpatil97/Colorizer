import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaletteResponse } from '../models/paletteResponse.model';

@Injectable({
  providedIn: 'root'
})
export class PaletteService {

  constructor(private readonly http: HttpClient) { }

  public getPalettes(): Observable<PaletteResponse> {
    return this.http.get<PaletteResponse>('/assets/palettes.json');
  }
}
