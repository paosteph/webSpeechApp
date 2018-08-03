import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  @Input()
  nombreBoton:string;

  @Output()
  darClic= new EventEmitter;

  ejecutarEvento() {
    console.log('dioclic');
    this.darClic.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
