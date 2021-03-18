import { Component, Input, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/shared/components/snackbar/snackbar.service';
import { Palette } from 'src/app/shared/models/palette.model';

@Component({
  selector: 'app-palette-card',
  templateUrl: './palette-card.component.html',
  styleUrls: ['./palette-card.component.scss']
})
export class PaletteCardComponent {

  @Input() palette: Palette;

  constructor(private readonly snackbar: SnackbarService) { }

  public checkColorIntesity(color: string) {
    let decimalValue = parseInt(color.slice(1, color.length), 16);
    return decimalValue > 7340032;
  }

  public copyColor(color: string) {
    navigator.clipboard.writeText(color);
    this.snackbar.show('Color Copied', color);
  }

}
