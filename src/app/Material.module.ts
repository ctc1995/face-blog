/**
 * 该文件用于导入项目中使用的Material组件
 */
import { NgModule } from '@angular/core'
import { 
    MdButtonModule,
    MdInputModule,
} from '@angular/material'

@NgModule({
    imports:[
        MdButtonModule,
        MdInputModule,
    ],
    exports:[
        MdButtonModule,
        MdInputModule,
    ]
})

export class MaterialModule{}