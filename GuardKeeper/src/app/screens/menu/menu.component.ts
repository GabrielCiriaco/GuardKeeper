import { ChangeDetectorRef, Component, HostListener, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  drawerMode: 'side' | 'over' = 'side'; // NO mobile deve ser 'over'
  menuOptions = new FormControl('');
  selectedMenuOption: number = 0;

  userName = '';

  constructor(
    private router: Router,
    private menuService: MenuService,
    private cdr: ChangeDetectorRef,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.adjustDrawerMode()
    this.userName = this.localStorageService.getItemFromStorage('nome');

    this.menuService.obterVariavel().subscribe((valor:number) => {
      this.selectedMenuOption = valor;
      console.log('Valor recebido: ', valor);

      this.cdr.detectChanges();
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.adjustDrawerMode(); // Ajusta o modo ao redimensionar a janela
  }

  adjustDrawerMode() {
    if (window.innerWidth <= 768) { // Se for tela menor que 768px
      this.drawerMode = 'over';

    } else {
      this.drawerMode = 'side';
    }
  }

  navigateTo() {
    this.router.navigate([this.menuOptions.value]);
  }

  deslogar() {
    this.router.navigate(['/login']);
  }

  trocarSenha() {
    this.router.navigate(['trocar-senha']);
  }



}
