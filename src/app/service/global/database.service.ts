import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  public readonly reservations = [
    {
      reservationNumber: 'ABC123',
      passengerName: 'John Doe',
      dni: 12345678,
      departureTime: '2023-05-10T10:00:00Z',
      cabinClass: 'Economy',
      checkedIn: false,
      seatNumber: ''
    },
    {
      reservationNumber: 'DEF456',
      passengerName: 'Jane Smith',
      dni: 87456321,
      departureTime: '2023-05-11T14:00:00Z',
      cabinClass: 'Business',
      checkedIn: false,
      seatNumber: ''
    }
  ];

  getReservation(reservationNumber: string): Observable<any> {
    const reservation = this.reservations.find(res => res.reservationNumber === reservationNumber);
    return of(reservation);
  }
}