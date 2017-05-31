import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login.routing.module'
import { LoginMaterialModule } from './loginMaterial.module'
import { LoginComponent } from './login.component'
import { LoginService } from './login.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    LoginMaterialModule
  ],
  declarations: [
    LoginComponent
  ],
  providers:[
    LoginService
  ]
})
export class LoginModule { }
