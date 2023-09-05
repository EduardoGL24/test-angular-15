import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  baseURL: string = 'https://desa.ies-webcontent.com.mx';

  constructor(private http: HttpClient) { }

  login(body: object){
    return this.http.post(`${this.baseURL}/login`, body);
  }

}
