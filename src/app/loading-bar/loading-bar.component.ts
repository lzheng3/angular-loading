import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.css'],
})
export class LoadingBarComponent implements OnInit {
  public progress: number = 0;
  public isStarted = true;
  public isPaused = false;
  public intervalId: any;

  constructor() {}

  ngOnInit(): void {}

  handleButtonClick() {
    this.intervalId = setInterval(() => {
      this.progress += 10;
    }, 500);

    if (!this.isPaused) {
      setTimeout(() => {
        clearInterval(this.intervalId);
        this.progress = 0;
      }, 5500);
    }

    this.isStarted = false;
  }

  handlePause() {
    this.isStarted = true;
    this.isPaused = true;
    clearInterval(this.intervalId);
  }
}
