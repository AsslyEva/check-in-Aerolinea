import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiEndpoint = 'https://example.com/api/reservations/';

  constructor(private http: HttpClient) { }

  getReservation(reservationNumber: string) {
    return this.http.get(this.apiEndpoint + reservationNumber);
  }
}