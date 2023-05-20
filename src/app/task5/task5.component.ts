import { Component } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css'],
  template: `
    <p>{{ name }}</p>
    <a href="#" (click)="changeName()">Змінити ім'я</a>
  `
})
export class Task5 {
  name: string = 'Іван';

  changeName() {
    this.name = 'Дмитро';
  }
}
