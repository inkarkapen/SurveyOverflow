import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }
  login(user, cb){
    //console.log('service works!', user)
    this._http.post('/login', user).subscribe((res)=>{
      cb(res)
    })
  }
  checkSession(cb){
    //console.log('in checkSession service')
    this._http.get('/checkSession').subscribe((res)=>{
      cb(res)
    })
  }
  create(survey, cb){
    //console.log('in service, ', survey)
    this._http.post('/create', survey).subscribe((res)=>{
      cb(res)
    })
  }
  getAll(cb){
    this._http.get('/getAll').subscribe((res)=>{
      cb(res)
    })
  }
  delete(survey, cb){
    this._http.post('/delete', survey).subscribe((res)=>{
      if(res == 'success'){
        cb(res)
      }
    })
  }
  getSurvey(id, cb){
    this._http.get('/showOne/'+id).subscribe((res)=>{
      //console.log('got response', res)
      cb(res)
    })
  }
  vote(survey, cb){
    this._http.post('/vote', survey).subscribe((res)=>{
      cb(res)
    })
  }
}
