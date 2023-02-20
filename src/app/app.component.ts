import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-loading';
  public isLoading: boolean = false;
  public progress: number = 0;
  private subscription: Subscription | undefined;

  public ngOnInit(): void {
    this.progress = 0;
  }

  public startLoading(): void {
    this.isLoading = true;
    this.subscription = interval(500).subscribe(() => {
      if (this.progress === 100) {
        this.progress = 0;
      } else {
        this.progress += 10;
      }
    });
  }

  public pauseLoading(): void {
    this.isLoading = false;
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
