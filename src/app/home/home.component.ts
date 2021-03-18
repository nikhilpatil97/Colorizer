import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Palette } from '../shared/models/palette.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public palettes: Palette[];
  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(resp => {
      this.palettes = resp.data.palettes;
    });
  }

}
