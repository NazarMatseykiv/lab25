import { Component } from '@angular/core';

@Component({
  selector: 'app-task7',
  template: `
    <ul>
      <li *ngFor="let language of languages">{{ language }}</li>
    </ul>
    <a href="#" (click)="changeLanguage()">Змінити мову</a>
  `
})
export class Task7 {
  languages: string[] = ['html', 'css', 'js', 'php'];

  changeLanguage() {
    const index = this.languages.indexOf('php');
    if (index !== -1) {
      this.languages[index] = 'sql';
    }
  }
}
