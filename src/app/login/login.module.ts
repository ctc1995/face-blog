import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageUploadModule } from 'angular2-image-upload'

import { LoginRoutingModule } from './login.routing.module'
import { LoginMaterialModule } from './loginMaterial.module'
import { LoginComponent } from './login.component'
import { LoginService } from './login.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    LoginMaterialModule,
    ImageUploadModule.forRoot(),
  ],
  declarations: [
    LoginComponent
  ],
  providers:[
    LoginService
  ]
})
export class LoginModule { }
