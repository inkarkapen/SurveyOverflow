import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service'
import { HttpBackend } from '@angular/common/http/src/backend';
import { HttpSentEvent } from '@angular/common/http/src/response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: object
  surveys: Array<any>
  constructor(private _httpService: HttpService, private _router: Router) {
    this.user = {name: null}
    this.surveys = []
  }

  ngOnInit() {
    this.checkSession()
    this.getAllSurveys()
  }
  checkSession(){
    this._httpService.checkSession((res)=>{
      if(!res){
        this._router.navigate(['/'])
      }
      this.user = res
    })
  }
  showForm(){
    //console.log('in components, ', this.user)
    this._router.navigate(['/create'])
  }
  getAllSurveys(){
    this._httpService.getAll((res)=>{
      //console.log('all surveys ', res)
      this.surveys = res
    })
  }
  delete(survey, index){
    this._httpService.delete(survey, (res)=>{
      this.surveys.splice(index, 1)
    })
  }
}
