import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.css']
})
export class ItemMenuComponent implements OnInit {

  constructor() { }
  @Input()
  rutaImagen="assets/img/SALUDOS.jpg";

  @Input()
  nombreBotonIngresar="Ingresar";

  @Input()
  titulo;

  @Input()
  contenido="The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan." +
    "A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally" +
    "  bred for hunting.";

  @Output()
  darclic= new EventEmitter();


  ngOnInit() {

  }

  dioClic(){
    console.log("click");
    this.darclic.emit();
  }

}
