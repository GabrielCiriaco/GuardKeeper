import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-agent',
  templateUrl: './edit-agent.component.html',
  styleUrls: ['./edit-agent.component.scss']
})
export class EditAgentComponent {
  addAgentForm = new FormGroup({
    photo: new FormControl<any>(null), // Foto carregada
    name: new FormControl(''),
    gender: new FormControl(''),
    age: new FormControl<number | null>(null),
    contact: new FormControl(''),
    emergencyContact: new FormControl(''),
    category: new FormControl(''),
    rank: new FormControl({ value: '', disabled: true }),
    unit: new FormControl({ value: '', disabled: true }),
  });
  photoPreview: string | ArrayBuffer | null = null;
  isCivil = true; // Indica se a categoria é Civil

  constructor(private router: Router) {

  }
  // Atualiza o estado dos campos rank e unit
  onCategoryChange(event: any) {
    this.isCivil = event.value === 'Civil';
    if (this.isCivil) {
      this.addAgentForm.get('rank')?.disable();
      this.addAgentForm.get('unit')?.disable();
      this.addAgentForm.get('rank')?.clearValidators();
      this.addAgentForm.get('unit')?.clearValidators();
    } else {
      this.addAgentForm.get('rank')?.enable();
      this.addAgentForm.get('unit')?.enable();
      this.addAgentForm.get('rank');
      this.addAgentForm.get('unit');
    }
    this.addAgentForm.get('rank')?.updateValueAndValidity();
    this.addAgentForm.get('unit')?.updateValueAndValidity();
  }
  // Manipula o upload de arquivo
  onPhotoSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      this.addAgentForm.patchValue({ photo: file });
      this.addAgentForm.get('photo')?.updateValueAndValidity();

      // Visualização da imagem carregada
      const reader = new FileReader();
      reader.onload = () => {
        this.photoPreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  // Manipula o upload de arquivo
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      this.addAgentForm.patchValue({ photo: file });
    }
  }

  // Função para adicionar agente
  addAgent() {
    if (this.addAgentForm.valid) {
      console.log('Agent data:', this.addAgentForm.value);
      // Chame o serviço para salvar os dados
    } else {
      console.error('Formulário inválido');
    }
  }


  return() {

    this.router.navigate(['menu/places']);

  }
}

