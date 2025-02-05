import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-places',
  templateUrl: './edit-places.component.html',
  styleUrls: ['./edit-places.component.scss']
})
export class EditPlacesComponent implements OnInit {
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


    ngOnInit(): void {
      this.addPlaceForm.setValue({
        name: history.state.name,
        city: history.state.city,
        neighborhood: history.state.neighborhood,
        street: history.state.street,
        number: history.state.number,
        agentHourValue: history.state.agentHourValue,
        agentsNeededPerScale: history.state.agentsNeededPerScale
      })
    }
    return() {

      this.router.navigate(['menu/places']);
    }



    addPlace() {
      console.log(this.addPlaceForm.value);
    }

}
