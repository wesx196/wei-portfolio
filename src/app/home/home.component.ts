import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear(); // Get the current year
  }
}
