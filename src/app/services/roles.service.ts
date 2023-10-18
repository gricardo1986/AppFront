import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private httpClient=inject(HttpClient)
  baseUrl=`${environment.baseURL}api/roles`;
  //baseUrl="http://localhost:3000/api/roles"

  constructor() { }

  getAll(){
    return firstValueFrom(this.httpClient.get<any[]>(this.baseUrl, this.createHeaders()))
  }

  getById(id: string){
    return firstValueFrom(this.httpClient.get<any>(`${this.baseUrl}/${id}`, this.createHeaders()))
  }

  create(formValues: any){
    return firstValueFrom(this.httpClient.post<any>(this.baseUrl,formValues, this.createHeaders()))
  }

  update(id: string, formValues: any){
    return firstValueFrom(this.httpClient.put<any>(`${this.baseUrl}/${id}`, formValues, this.createHeaders()))
  }

  deleteById(id: string){
    return firstValueFrom(this.httpClient.delete<any>(`${this.baseUrl}/${id}`, this.createHeaders()))
  }

  createHeaders(){
    return {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")!
      })
    }
  }
}
