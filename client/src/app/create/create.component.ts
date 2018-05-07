import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  survey: object
  user: object
  surveys: Array<any>
  constructor(private _http: HttpService, private _router: Router) {
    this.survey = {question: null, option1: null, option2: null, option3: null, option4: null, _creator: null}
    this.surveys = []
  }
  create(){
    //console.log('in components, ', this.survey)
    this._http.create(this.survey, (res)=>{
      //console.log('response in componets create ', res)
      this.user = res.user;
      this.surveys.push(res.survey)
      this.survey = {question: null, option1: null, option2: null, option3: null, option4: null, _creator: null}
      //console.log('attributes in componets create ', this.user, this.surveys, this.survey)
      this._router.navigate(['dashboard'])
    })
  }
  ngOnInit() {
  }

}
