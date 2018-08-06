import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {ARREGLO_RUTAS} from "./app.routes";
import { BotonazoComponent } from './botonazo/botonazo.component';
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {FileUploaderService} from "./file-uploader.service";

@NgModule({
  declarations: [
    AppComponent,
    BotonazoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      ARREGLO_RUTAS,
      {
        useHash: true,
      }
    ),HttpClientModule,
    FormsModule

  ],
  providers: [FileUploaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
