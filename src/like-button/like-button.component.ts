import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css'],
})
export class LikeButtonComponent {
  @Input() initialCount?: number;
  @Output() likeStateChanged = new EventEmitter<boolean>();

  countNumber = 0;
  content = '';
  liked = false;

  constructor() {}

  ngOnInit() {
    this.countNumber = this.initialCount ? this.initialCount : 5;
    this.renderContent();
  }

  renderContent() {
    this.content = `Like | ${this.countNumber}`;
  }

  onLike() {
    this.liked = !this.liked;

    if (this.liked) {
      this.countNumber++;
    } else {
      this.countNumber--;
    }
    this.renderContent();

    // Emit an event to notify the parent component of the like state change
    this.likeStateChanged.emit(this.liked);
  }
}
