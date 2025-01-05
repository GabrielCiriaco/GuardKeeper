import { inject } from '@angular/core';
import { Router } from '@angular/router';
// import Cryptograf from 'crypto-js';
// import { environment } from 'src/environment/environments';
import { LoginService } from '../services/login.service';

export const authGuard = () => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (loginService.isLoggedIn()) {
    return true;
  } else {
    console.log('Não está logado');

    router.navigate(['/login']);
    return false;
  }
};

// export const authGuardAdmin = () => {
//   const router = inject(Router);

//   const bytes = Cryptograf.AES.decrypt(
//     JSON.parse(localStorage.getItem('isAdmin') as string),
//     environment.cryptoKey
//   );
//   const isAdmin = JSON.parse(bytes.toString(Cryptograf.enc.Utf8));

//   if (isAdmin == true) {
//     return true;
//   } else {
//     router.navigate(['/home/imprensa']);
//     return false;
//   }
// };
