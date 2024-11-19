import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuto } from '../models/auto.models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url =
    'https://6738d3764eb22e24fca91af1.mockapi.io/autostock/vehiculos';

  constructor(private http: HttpClient) {}

  public getAutos(): Observable<IAuto[]> {
    return this.http.get<IAuto[]>(this.url);
  }

  public getAutobyId(id: number): Observable<IAuto> {
    return this.http.get<IAuto>(`${this.url}/${id}`);
  }

  public postAuto(auto: IAuto): Observable<IAuto> {
    return this.http.post<IAuto>(`${this.url}`, auto);
  }

  public putAuto(auto: IAuto): Observable<IAuto> {
    return this.http.put<IAuto>(`${this.url}/${auto.id}`, auto);
  }

  public deleteAuto(id: number): Observable<IAuto> {
    return this.http.delete<IAuto>(`${this.url}/${id}`);
  }
}
