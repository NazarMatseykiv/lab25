import { Component } from '@angular/core';

@Component({
  selector: 'app-task9',
  template: `
    <ul>
      <li *ngFor="let language of languages">{{ language }}</li>
    </ul>
    <a href="#" (click)="addLanguage()">Додати мову</a>
  `
})
export class Task9 {
  languages: string[] = ['html', 'css', 'js', 'php'];

  addLanguage() {
    this.languages.unshift('sql');
  }
}
