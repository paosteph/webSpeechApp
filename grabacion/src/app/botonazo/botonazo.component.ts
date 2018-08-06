import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {FileQueueObject, FileUploaderService} from "../file-uploader.service";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-botonazo',
  templateUrl: './botonazo.component.html',
  styleUrls: ['./botonazo.component.css']
})
export class BotonazoComponent implements OnInit {

  constructor(private  http:HttpClient,
              private activatedRoute:ActivatedRoute,
              public uploader: FileUploaderService){}
  frase;
  rutaza;
  formData: FormData = new FormData();
  idUsuario;
  idPractica;
  @Output()
  onCompleteItem = new EventEmitter();

  @ViewChild('fileInput')
  fileInput;
  queue: Observable<FileQueueObject[]>;

  completeItem = (item: FileQueueObject, response: any) => {
    this.onCompleteItem.emit({ item, response });
  }
  ngOnInit(){
    this.queue = this.uploader.queue;
    this.uploader.onCompleteItem = this.completeItem;

    const $obtnerParmaetros=this.activatedRoute.params;
    $obtnerParmaetros.subscribe((datos:any)=>{
      this.frase=datos.textoFrase;
      this.idUsuario=datos.idUsuario;
      this.idPractica=datos.idPractica;
    });
  }

  addToQueue() {
    const fileBrowser = this.fileInput.nativeElement;
    this.uploader.addToQueue(fileBrowser.files);
  }

  enviarResultados(){

  }


}
