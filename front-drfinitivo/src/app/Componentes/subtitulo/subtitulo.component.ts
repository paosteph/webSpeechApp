import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-subtitulo',
  templateUrl: './subtitulo.component.html',
  styleUrls: ['./subtitulo.component.css']
})
export class SubtituloComponent implements OnInit {

  @Input() sutitulo: string;

  constructor() { }

  ngOnInit() {
  }

}
