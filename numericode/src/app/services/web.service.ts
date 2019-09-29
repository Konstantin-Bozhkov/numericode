import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http:HttpClient) { }

  decryptMessage(codedMessage){
    return this.http.get('http://localhost:3000/api/decode/', { params: {'message': codedMessage} } ).toPromise();
  }
}
