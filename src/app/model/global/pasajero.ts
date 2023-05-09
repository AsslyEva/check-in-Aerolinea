export interface Pasajero {
  id: number;
  name: string;
  checkedIn: boolean;
  seatNumber?: string;
}

export interface Vuelo {
  number: string;
  origin: string;
  destination: string;
}

export const PASAJEROS: Pasajero[] = [
  { id: 1, name: 'John Smith', checkedIn: false, seatNumber: null },
  { id: 2, name: 'Jane Doe', checkedIn: false, seatNumber: null },
  { id: 3, name: 'Mike Johnson', checkedIn: false, seatNumber: null },
  { id: 4, name: 'Susan Lee', checkedIn: false, seatNumber: null }
];

export const VUELOS: Vuelo[] = [
  { number: 'AC100', origin: 'Toronto', destination: 'Vancouver' },
  { number: 'AC200', origin: 'Vancouver', destination: 'Toronto' },
  { number: 'AC300', origin: 'Calgary', destination: 'Montreal' },
  { number: 'AC400', origin: 'Montreal', destination: 'Calgary' }
];