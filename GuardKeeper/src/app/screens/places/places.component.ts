import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Place } from 'src/app/core/models';
import { MenuService } from 'src/app/core/services/menu.service';
import { PlacesService } from 'src/app/core/services/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  searchPlace: FormControl = new FormControl('');
  loadingPlaces = false;
  places: Array<Place> = [];
  filteredPlaces: Array<Place> = [];

  constructor(
    private menuService: MenuService,
    private placesService: PlacesService
  ) { }

  ngOnInit(): void {
    this.menuService.enviarVariavel(4)
    this.loadingPlaces = true;
    this.placesService.getPlaces().subscribe(
      (places: Array<Place>) => {
        this.loadingPlaces = false;
        console.log(places)
        this.places = places;
        this.filteredPlaces = places;
      }
    )
    this.filterPlaces()
  }

  formatAddress(place: Place): string {
    return `${place.street}, ${place.number} `
  }

  filterPlaces() {
    this.searchPlace.valueChanges.subscribe(
      (search: string) => {
        this.filteredPlaces = this.places.filter(
          (place: Place) => place.name.toLowerCase().includes(search.toLowerCase())
        )
      })
  }


}
