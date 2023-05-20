import { Component } from '@angular/core';

@Component({
  selector: 'app-task11',
  template: `
    <ul>
      <li *ngFor="let language of languages" [ngClass]="{ 'deleted': language === 'html' }">
        {{ language }}
        <a href="#" (click)="removeLanguage(language)">Видалити</a>
      </li>
    </ul>
  `,
  styles: [`
    .deleted {
      text-decoration: line-through;
      color: red;
    }
  `]
})
export class Task11 {
  languages: string[] = ['html', 'css', 'js', 'php'];

  removeLanguage(language: string) {
    const index = this.languages.indexOf(language);
    if (index !== -1) {
      this.languages.splice(index, 1);
    }
  }
}
