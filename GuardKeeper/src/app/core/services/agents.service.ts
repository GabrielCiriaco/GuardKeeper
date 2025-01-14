import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Agent } from 'src/app/core/models';
@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  constructor() { }

   getAgents(): Observable<Agent[]> {

      return of(
        [
          {
            id: 1,
            photo: '../../../assets/carlos-mendes.jpg',
            name: 'Carlos Mendes',
            gender: 'Masculino',
            age: 35,
            contact: '11999999999',
            emergencyContact: '11988888888',
            category: 'Militar' ,
            rank: 'Cabo',
            unit: '2º BPM Botafogo',
          },
          {
            id: 2,
            photo: '../../../assets/joao-silva.jpg',
            name: 'João Silva',
            gender: 'Masculino',
            age: 40,
            contact: '11977777777',
            emergencyContact: '11966666666',
            category: 'Civil' ,
          },
          {
            id: 3,
            photo: '../../../assets/ana-oliveira.jpg',
            name: 'Ana Oliveira',
            gender: 'Feminino',
            age: 29,
            contact: '11955555555',
            emergencyContact: '11944444444',
            category: 'Militar',
            rank: 'Sargento',
            unit: '3º BPM Copacabana',
          },
          {
            id: 4,
            photo: '../../../assets/fernando-rocha.jpg',
            name: 'Fernando Rocha',
            gender: 'Masculino',
            age: 33,
            contact: '11933333333',
            emergencyContact: '11922222222',
            category: 'Civil',
          },
          {
            id: 5,
            photo: '../../../assets/mariana-souza.jpg',
            name: 'Mariana Souza',
            gender: 'Feminino',
            age: 27,
            contact: '11911111111',
            emergencyContact: '11900000000',
            category: 'Militar',
            rank: 'Soldado',
            unit: '4º BPM Barra',
          }
        ]).pipe(delay(1000));
    }
}
