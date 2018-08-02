import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-practica',
  templateUrl: './practica.component.html',
  styleUrls: ['./practica.component.css']
})
export class PracticaComponent implements OnInit {

  @Input() resultado: boolean;
  @Input() loQueDijo;
  @Input() loCorrecto;

  constructor() { }

  ngOnInit() {

  }

}
