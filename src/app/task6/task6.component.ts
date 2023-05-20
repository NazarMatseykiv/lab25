import { Component } from '@angular/core';

@Component({
  selector: 'app-task6',
  template: `
    <p>Ім'я: {{ name }}</p>
    <p>Прізвище: {{ surname }}</p>
    <p>Вік: {{ age }}</p>
    <a href="#" (click)="changeName()">Змінити ім'я</a> <br>
    <a href="#" (click)="changeSurname()">Змінити прізвище</a> <br>
    <a href="#" (click)="changeAge()">Змінити вік</a>
  `
})
export class Task6 {
  name: string = 'Іван';
  surname: string = 'Іванів';
  age: number = 25;

  changeName() {
    this.name = 'Петро';
  }

  changeSurname() {
    this.surname = 'Петренко';
  }

  changeAge() {
    this.age = 30;
  }
}
