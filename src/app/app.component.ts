import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spring-boot-frontend-api-rest';
  curso: string = 'Curso Spring 5 con Angular 10';
  profesor: string = 'Rolando Salinas';
}
