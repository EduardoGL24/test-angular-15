import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL: string = 'https://desa.ies-webcontent.com.mx';

  constructor(private http: HttpClient) { }

  login(body: object){
    return this.http.post(`${this.baseURL}/login`, body);
  }

  getList(){
    return this.http.post(`http://201.131.20.125/BienesRaicesApi/api/services/app/Catalogo/EstadoCivil`, {});
  }

}
