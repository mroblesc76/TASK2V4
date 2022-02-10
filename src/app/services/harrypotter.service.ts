import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HarrypotterService {

  constructor(private httpClient:HttpClient) {

   }

   urlHarry='http://hp-api.herokuapp.com/api/characters/house/Gryffindor';

   getHouseHarryPotter():Observable<any>{
     return this.httpClient.get(this.urlHarry);

   }

   
}
