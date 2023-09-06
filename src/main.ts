import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { LikeButtonComponent } from './like-button/like-button.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, LikeButtonComponent],
  template: `
    <app-like-button [initialCount]="initialCount"></app-like-button>
  `,
})
export class App {
  name = 'Angular';
  initialCount = 100;
}

bootstrapApplication(App);
