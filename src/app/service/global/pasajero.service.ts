import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pasajero } from 'src/app/model/global/pasajero';

@Injectable({
  providedIn: 'root'
})
export class PasajeroService {

  private baseUrl = 'http://localhost:3000/passengers';

  constructor(private http: HttpClient) { }

  getPassengers(): Observable<Pasajero[]> {
    return this.http.get<Pasajero[]>(this.baseUrl);
  }

  checkIn(pasajero: Pasajero): Observable<Pasajero> {
    pasajero.checkedIn = true;
    return this.http.put(`${this.baseUrl}/${pasajero.id}`, pasajero)
      .pipe(
        map(() => pasajero)
      );
  }
}