import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service'
import { HttpBackend } from '@angular/common/http/src/backend';
import { HttpSentEvent } from '@angular/common/http/src/response';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  surveyId: any
  survey: object
  constructor(private _httpService: HttpService, private _router: Router, private route: ActivatedRoute) {
    this.surveyId =null
    this.survey = {question: null, option1: null, option1Votes: null, option2: null, option2Votes: null, option3: null, option3Votes: null, option4: null, option4Votes: null, _creator: null}
  }

  ngOnInit() {
    this.surveyId = this.route.snapshot.paramMap.get('id');
    this.getSurvey(this.surveyId)
  }
  getSurvey(id){
    this._httpService.getSurvey(id, (res)=>{
      this.survey = res
    })
  }
  vote(optionNum){
    this._httpService.vote({'index': optionNum, 'surveyId': this.surveyId}, (res)=>{
      if(res == 'success'){
        this.survey['option'+optionNum+'Votes'] += 1
      }
    })
  }
}
