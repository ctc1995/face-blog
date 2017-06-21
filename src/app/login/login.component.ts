import { Component, OnInit } from '@angular/core'

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
  statusInfo : string
  constructor(
    private loginService: LoginService
  ) { }
  private login(){
    this.loginService.loginPost(this.user, this.psd).then(
      res=>{
        this.statusInfo = '登录成功: ' + sessionStorage.getItem('user');
      }
    )
    .catch(error=>{
        this.statusInfo = error._body;
        console.log(error._body);
    })
  }
  private reg(){
    this.loginService.regPost(this.user, this.psd, this.email).then(
      res=>{
        this.statusInfo = '注册成功: ' + sessionStorage.getItem('user');
      }
    ).catch(
      error=>{
        this.statusInfo = error._body;
        console.log(error._body);
      }
    )
  }
  ngOnInit() {
  }

}
