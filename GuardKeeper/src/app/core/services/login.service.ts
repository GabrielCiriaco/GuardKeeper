import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LoginResponse } from 'src/app/core/models';
import { env } from 'src/app/core/environment/env';
@Injectable({
  providedIn: 'root',
})
export class LoginService {


  constructor(
    private localStorageService: LocalStorageService,
    private httpClient: HttpClient
  ) {
  }

  login(userName: string, password: string): Observable<HttpResponse<LoginResponse>> {

    return this.httpClient.post<LoginResponse>(
      `${env.apiUrl}/login`,
        { userName, password },
        { observe: 'response' }
      )
      .pipe(
        tap((response: HttpResponse<LoginResponse>) => {
          if (response.body) {
            this.localStorageService.saveItem('token', response.body.token);
            this.localStorageService.saveItem('avatar', response.body.avatar);
            this.localStorageService.saveItem('nome', response.body.nome);
            this.localStorageService.saveItem('isAdmin', response.body.isAdmin);
            this.localStorageService.saveItem('conteudos', response.body.conteudos);
            this.localStorageService.saveItem('permissionSubgrupo', response.body.permissionSubgrupo);
            this.localStorageService.saveItem('permissionCharts', response.body.permissionCharts);

          }
        })
      );
  }

  logout() {
    this.localStorageService.deleteStorage();
  }

  isLoggedIn() {
    return this.localStorageService.ownValidToken();
  }

  isAdmin(): boolean {
    const isAdmin = this.localStorageService.getItemFromStorage('isAdmin');

    return isAdmin;
  }

}
