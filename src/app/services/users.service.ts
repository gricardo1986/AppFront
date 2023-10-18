import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private httpClient=inject(HttpClient)
  //baseUrl="http://localhost:3000/api/users"
  baseUrl=`${environment.baseURL}api/users`;

  constructor() { }

  register(formValue:any){
    return firstValueFrom(this.httpClient.post<any[]>(`${this.baseUrl}/register`, formValue))
  }

  login(formValue:any){
    return firstValueFrom(this.httpClient.post<any[]>(`${this.baseUrl}/login`, formValue))
  }

  isLogged(): boolean{
    return localStorage.getItem("token") ? true : false
  }
}
