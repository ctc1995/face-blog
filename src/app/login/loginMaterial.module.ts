import { NgModule } from '@angular/core';
import { 
    MdButtonModule,
    MdInputModule,
    MdCardModule
} from '@angular/material'

@NgModule({
  imports: [
    MdButtonModule,
    MdInputModule,
    MdCardModule
  ],
  exports:[
    MdButtonModule,
    MdInputModule,
    MdCardModule
  ]
})
export class LoginMaterialModule{}