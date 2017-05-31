import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharpService } from '../assets/sharp.service'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module'
//项目中使用到的Material组件
import { MaterialModule } from './Material.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [
    SharpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
