import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestAPICallService {

  url='http://localhost:3000/UserDetails'
  constructor(private http: HttpClient) { }

  SaveUsersDetails(data:any){
    debugger
    return this.http.post(this.url,data)
  }
}
