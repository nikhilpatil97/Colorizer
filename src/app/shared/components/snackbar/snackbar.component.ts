import { Component, OnInit } from '@angular/core';
import { Snackbar } from '../../models/snackbar.model';
import { SnackbarService } from './snackbar.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  public showSnackbar = false;
  public snackbarMessage: string;
  public snackbarColor: string;
  public isLightColor: boolean;

  constructor(private readonly snackbar: SnackbarService) { }

  ngOnInit(): void {
    this.snackbar.snackbarObs.subscribe((resp: Snackbar) => {
      this.showSnackbar = true;
      this.snackbarMessage = resp.message;
      this.snackbarColor = resp.color;
      if (parseInt(resp.color.slice(1, resp.color.length), 16) > 7340032) {
        this.isLightColor = true;
      } else {
        this.isLightColor = false;
      }
      setTimeout(() => this.showSnackbar = false, 5000);
    });
  }

}
