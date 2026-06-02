import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetDataInterface } from '../interfaces/get-data.interface';
import { FormSubmitInterface } from '../interfaces/form-submit.interface'; // Nowy import
import { GraClass } from '../classes/gra.class';

@Injectable({
  providedIn: 'root'
})

export class WebApiService implements GetDataInterface, FormSubmitInterface {
  
  private readonly apiUrl = 'http://localhost:5115/api/gry';

  constructor(private http: HttpClient) {}


  Get(): Observable<GraClass[]> {
    return this.http.get<GraClass[]>(this.apiUrl);
  }

  GetByID(id: number): Observable<GraClass> {
    return this.http.get<GraClass>(`${this.apiUrl}/${id}`);
  }


  Post(nazwa: string, cena: number, data: Date): Observable<boolean> {
    const body = { nazwa, cena, data }; // Pakujemy parametry w obiekt JSON
    return this.http.post<boolean>(this.apiUrl, body);
  }

  Put(id: number, nazwa: string, cena: number, data: Date): Observable<boolean> {
    const body = { nazwa, cena, data };
    return this.http.put<boolean>(`${this.apiUrl}/${id}`, body);
  }

  Delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}