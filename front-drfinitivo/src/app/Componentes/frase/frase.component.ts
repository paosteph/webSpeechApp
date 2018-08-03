import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-frase',
  templateUrl: './frase.component.html',
  styleUrls: ['./frase.component.css']
})
export class FraseComponent implements OnInit {

  @Input()
  frase:String="phrase";

  constructor() { }

  ngOnInit() {

  }

}
