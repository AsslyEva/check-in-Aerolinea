import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PASAJEROS, Pasajero, VUELOS, Vuelo } from 'src/app/model/global/pasajero';
import { PasajeroService } from 'src/app/service/global/pasajero.service';

@Component({
  selector: 'app-check-in-max',
  templateUrl: './check-in-max.component.html',
  styleUrls: ['./check-in-max.component.scss']
})
export class CheckInMaxComponent implements  OnInit {

  pasajeros = PASAJEROS;
  selectedPasajero: Pasajero | null = null;

  vuelos = VUELOS;
  selectedVuelo: Vuelo | null = null;

  selectedAsiento: string;

  checkinComplete: boolean = false;
  errorMessage: string;

  constructor(private _pasajeroService: PasajeroService) { }

  ngOnInit(): void {
    this._pasajeroService.getPassengers()
      .subscribe(pasajeros => this.pasajeros = pasajeros);
  }

  onVueloChange() {
    this.selectedPasajero = null;
    this.selectedAsiento = null;
  }

  onPasajeroChange() {
    this.selectedAsiento = null;
  }

  checkIn() {
    if (!this.selectedVuelo || !this.selectedPasajero || !this.selectedAsiento) {
      this.errorMessage = 'Por favor seleccione vuelo, pasajero y numero de asiento.';
      return;
    }

    this.selectedPasajero.checkedIn = true;
    this.selectedPasajero.seatNumber = this.selectedAsiento;
    this.checkinComplete = true;
    this.errorMessage = null;
  }

}
