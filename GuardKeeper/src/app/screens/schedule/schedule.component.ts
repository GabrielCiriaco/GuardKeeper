import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { Place } from 'src/app/core/models';
import { MenuService } from 'src/app/core/services/menu.service';
import { PlacesService } from 'src/app/core/services/places.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  searchPlace: FormControl = new FormControl('');
  loadingPlaces = false;
  places: Array<Place> = [];
  filteredPlaces: Array<Place> = [];

  constructor(
    private menuService: MenuService,
    private placesService: PlacesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.menuService.enviarVariavel(2)
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

  setSchedule(location: Place) {
    const formattedName = location.name.replace(/\s/g, ''); // Formatar o nome do local
    console.log(`Navigating to: /schedules/${formattedName}`); // Verificar saída

    this.router.navigate(['/menu/schedules', formattedName], {
      queryParams: { id: location.id },
    });
  }
}
