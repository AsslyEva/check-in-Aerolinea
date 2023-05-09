import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  // Simulamos la base de datos con un arreglo de objetos JavaScript
  private reservas = [
    { id: 1, nombre: 'Juan Pérez', estado: 'Reservado', asiento: null },
    { id: 2, nombre: 'María González', estado: 'Reservado', asiento: null },
    { id: 3, nombre: 'Pedro Martínez', estado: 'Reservado', asiento: null }
  ];

  constructor() { }

  realizarCheckin(reserva: string, nombre: string): boolean {
    // Buscamos la reserva en la base de datos
    const reservaEncontrada = this.reservas.find(r => r.id === parseInt(reserva) && r.nombre === nombre);

    // Si la reserva no se encontró, retornamos false
    if (!reservaEncontrada) {
      return false;
    }

    // Si la reserva ya fue checkeada, retornamos false
    if (reservaEncontrada.estado === 'Check-in') {
      return false;
    }

    // Realizamos el check-in
    reservaEncontrada.estado = 'Check-in';
    reservaEncontrada.asiento = this.asignarAsiento();

    // Retornamos true para indicar que el check-in fue exitoso
    return true;
  }

  private asignarAsiento(): string {
    // En este ejemplo, simplemente asignamos un asiento aleatorio
    const letras = 'ABCDEFGHJK';
    const numero = Math.floor(Math.random() * 20) + 1;
    const letra = letras.charAt(Math.floor(Math.random() * letras.length));
    return numero + letra;
  }
}