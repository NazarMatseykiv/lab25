import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css'],
  template: `
    <p>{{ langs.name }} {{ langs.surname }}, {{ langs.age }} років</p>
  `
})
export class Task2 {
  langs = {
    name: 'Петро',
    surname: 'Петренко',
    age: '25'
  };
}