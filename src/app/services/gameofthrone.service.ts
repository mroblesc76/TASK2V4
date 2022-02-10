import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameofthroneService {

  constructor(private httpclient:HttpClient) { 

  }

  urlGot="https://thronesapi.com/api/v2/Characters";

  getGot():Observable<any>{
    return this.httpclient.get(this.urlGot);


  }



}
