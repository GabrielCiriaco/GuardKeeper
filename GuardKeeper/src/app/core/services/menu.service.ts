import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private navegacao = new BehaviorSubject<number>(0);

  constructor() { }

  enviarVariavel(valor: number) {
    this.navegacao.next(valor);
  }

  obterVariavel() {
    return this.navegacao.asObservable();
  }

  obterConteudos() {
    const conteudos = JSON.parse(
      (localStorage.getItem('conteudosGrupo')
        ? localStorage.getItem('conteudosGrupo')
        : localStorage.getItem('conteudos')) as string
    );
    if (conteudos) {
      // const bytes = Cryptograf.AES.decrypt(conteudos, environment.cryptoKey);
      // return JSON.parse(bytes.toString(Cryptograf.enc.Utf8));
      return conteudos;
    }
    return [];
  }
}
