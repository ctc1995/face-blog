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
  loginInfo : string
  regInfo : string
  constructor(
    private loginService: LoginService
  ) { }
  private login(){
    this.loginService.loginPost(this.user, this.psd).then(
      res =>{
        this.loginInfo = res['message']
        console.log(res)
      }
    ).catch()
  }
  private reg(){
    this.loginService.regPost(this.user, this.psd, this.email)
    .then(
      res=>{
        this.regInfo = res['message']
        console.log(res)
      }
    )
    .catch()
  }
  ngOnInit() {
  }

}
