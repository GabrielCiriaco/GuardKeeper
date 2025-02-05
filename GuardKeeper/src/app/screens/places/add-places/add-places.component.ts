import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-places',
  templateUrl: './add-places.component.html',
  styleUrls: ['./add-places.component.scss']
})
export class AddPlacesComponent {

  addPlaceForm = new FormGroup({
    name: new FormControl(''),
    city: new FormControl(''),
    neighborhood: new FormControl(''),
    street: new FormControl(''),
    number: new FormControl<number | null >(null),
    agentHourValue: new FormControl(''),
    agentsNeededPerScale: new FormControl<number | null>(null)
  })

  constructor(
    private router: Router,
  ) { }

  return() {

    this.router.navigate(['menu/places']);
  }



  addPlace() {
    console.log(this.addPlaceForm.value);
  }
}
