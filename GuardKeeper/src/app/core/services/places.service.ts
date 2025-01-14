import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor() { }


  getPlaces() {

    return of(
      [
        {
          id: 1,
          name: 'Shopping Ibirapuera',
          city: 'São Paulo',
          neighborhood: 'Vila Olímpia',
          street: 'Rua das Flores',
          number: 100,
          agentHourValue: 10.00,
          agentsNeededPerScale: 20,
        },
        {
          id: 2,
          name: 'Shopping Morumbi',
          city: 'São Paulo',
          neighborhood: 'Morumbi',
          street: 'Rua das Rosas',
          number: 200,
          agentHourValue: 10.00,
          agentsNeededPerScale: 20,
        },
        {
          id: 3,
          name: 'Shopping Center Norte',
          city: 'São Paulo',
          neighborhood: 'Vila Guilherme',
          street: 'Rua das Margaridas',
          number: 300,
          agentHourValue: 10.00,
          agentsNeededPerScale: 20,
        },
        {
          id: 4,
          name: 'Shopping Iguatemi',
          city: 'São Paulo',
          neighborhood: 'Jardim Paulista',
          street: 'Rua das Orquídeas',
          number: 400,
          agentHourValue: 10.00,
          agentsNeededPerScale: 20,
        }
      ]).pipe(delay(2000));
  }
}
