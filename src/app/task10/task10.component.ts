import { Component } from '@angular/core';

@Component({
  selector: 'app-task10',
  template: `
    <ul>
      <li *ngFor="let language of languages">
        {{ language }}
        <a href="#" (click)="removeLanguage(language)">Видалити</a>
      </li>
    </ul>
  `
})
export class Task10 {
  languages: string[] = ['html', 'css', 'js', 'php'];

  removeLanguage(language: string) {
    const index = this.languages.indexOf(language);
    if (index !== -1) {
      this.languages.splice(index, 1);
    }
  }
}
