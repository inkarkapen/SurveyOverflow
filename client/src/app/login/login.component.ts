import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: object
  constructor(private _http: HttpService, private _router: Router) {
    this.user = {name: null}
   }
  login(){
    //console.log('component works!')
    this._http.login(this.user, (res)=>{
    //  if(res == 'success'){
        //console.log('user is logged in')
        this._router.navigate(['dashboard'])
      //}
    })
  }
  ngOnInit() {
  }

}