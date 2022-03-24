import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent  {

  nombreLower: string = 'jessica';
  nombreUpper: string = 'JESSICA';
  nombreCompleto: string = 'jEsSica pOZo';

  fecha: Date = new Date();// el dia de hoy
}
