import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DSR } from './models/dsr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DsrService {
  private baseUrl = 'http://localhost:8081/employee/dsr';
 private managerurl ='http://localhost:8081/manager/dsr'
  constructor(private http: HttpClient) {}

  submitDSR(dsr: DSR): Observable<DSR> {
    return this.http.post<DSR>(`${this.baseUrl}`, dsr);
  }

getDSRsByUsername(username: string): Observable<DSR[]> {
  return this.http.get<DSR[]>(`${this.managerurl}/${username}`);
}
}
