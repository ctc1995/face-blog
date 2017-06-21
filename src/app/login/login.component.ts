import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http'

import { LoginService } from './login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string;
  psd: string;
  email: string;
  loginInfo : any;
  regInfo : string;
  //上传图片集合
  uploadImgLists: Array<File>
  constructor(
    private loginService: LoginService,
    private http: Http,
  ) {
    this.uploadImgLists=[];
  }
  private login(){
    this.loginService.loginPost(this.user, this.psd).then(
      res =>{
        console.log(res)
        this.loginInfo = res
      }
    )
    .catch()
  }
  private reg(){
    this.loginService.loginPost(this.user, this.psd).then(
      res =>{
        console.log(res)
        this.loginInfo = res
      }
    ).catch()
  }
  imageUploaded(v){
    this.uploadImgLists.push(v.file);
    console.log(this.uploadImgLists);
  }
  upload() {
    const formData: any = new FormData();
    //上传多个图片
    //上传多图情况下，采用多次发送请求方式上传
    for(let item of this.uploadImgLists){
      formData.append("uploads[]", item, item['name']);
      this.loginService.upImage(formData).subscribe(
        files => {
          console.log('files', files)
        }
      )
    }
  }
  ngOnInit() {
  }

}
