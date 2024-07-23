import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://localhost:7155/api/Managers'; 

  constructor(private http: HttpClient) { }

  getManagers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
