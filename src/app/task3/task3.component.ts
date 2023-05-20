import { Component } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css'],
  template: `
    <ul>
      <li *ngFor="let language of languages">{{ language }}</li>
    </ul>
    <ul>
      <li *ngFor="let city of cities">{{ city }}: {{ langs[city] }}</li>
    </ul>
    
  `
})
export class Task3 {
  languages = ['html', 'css', 'js', 'php'];
   cities = Object.entries({
    Варшава: 'Польща',
    Вільнюс: 'Литва',
    Київ: 'Україна',
  });
}