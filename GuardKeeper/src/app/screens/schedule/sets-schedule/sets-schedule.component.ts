import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { ActivatedRoute } from '@angular/router';
import { Agent, Place } from 'src/app/core/models';
import { AgentsService } from 'src/app/core/services/agents.service';
import { PlacesService } from 'src/app/core/services/places.service';

@Component({
  selector: 'app-sets-schedule',
  templateUrl: './sets-schedule.component.html',
  styleUrls: ['./sets-schedule.component.scss']
})
export class SetsScheduleComponent implements OnInit {

  placeInfo?: Place;
  locationId: string | null = null;

  searchAgentForm: FormGroup = new FormGroup({
    searchAgent: new FormControl(''),
    category: new FormControl(''),
  });

  agents: Array<Agent> = []; // Lista completa de agentes
  filteredAgents: Array<Agent> = [];  // Resultado da pesquisa
  loadingAgents = false;

  selectedDate: Date | null = null; // Data selecionada
  searchQuery: string = ''; // Campo de pesquisa
  scheduledAgents: any[] = []; // Agentes adicionados na escala

  // Status das datas
  // Exemplo de listas com datas
  filledDates: Date[] = [
    new Date(2025, 0, 1), // 15 de dezembro de 2023
    new Date(2025, 0, 2)  // 20 de dezembro de 2023
  ];

  parcialFilledDates: Date[] = [
    new Date(2025, 0, 3), // 25 de dezembro de 2023
    new Date(2025, 0, 4)  // 30 de dezembro de 2023
  ];

  unfilledDates: Date[] = [
    new Date(2025, 0, 5), // 25 de dezembro de 2023
    new Date(2025, 0, 6)  // 30 de dezembro de 2023
  ];



  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private agentsService: AgentsService
  ) {

  }


  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.locationId = params['id'];
    });

    this.placesService.getPlace(this.locationId).subscribe((place: Place) => {
      this.placeInfo = place;
    });

    this.agentsService.getAgents().subscribe(
      (agents: Array<Agent>) => {
        this.loadingAgents = false;
        console.log(agents)
        this.agents = agents;
        this.filteredAgents = agents;
      }
    )
    this.filterAgents()
  }

  filterAgents() {
    this.searchAgentForm.valueChanges.subscribe(({ category, searchAgent }) => {
      this.filteredAgents = this.agents.filter((agent: Agent) => {
        const matchesCategory = category
          ? agent.category.toLowerCase().includes(category.toLowerCase())
          : true; // Se a categoria for vazia, não filtra por ela
        const matchesSearch = searchAgent
          ? agent.name.toLowerCase().includes(searchAgent.toLowerCase())
          : true; // Se o searchAgent for vazio, não filtra por ele
        return matchesCategory && matchesSearch;
      });
    });
  }


// Aplica as cores no calendário


// Aplica as cores no calendário
dateClass: MatCalendarCellClassFunction<Date> = (date, view) => {
  // Verifica se a visualização é 'month' (mês)
  if (view === 'month') {
    // Lógica personalizada para aplicar a classe
    const day = date.getDate();

    // Exemplo: Destacar o dia 15 como verde
    if (this.filledDates.some(d => d.getTime() === date.getTime())) {
      return 'filled-date'; // Nome da classe CSS
    }

    // Exemplo: Destacar o dia 20 como vermelho
    if (this.parcialFilledDates.some(d => d.getTime() === date.getTime())) {
      return 'parcialFilled-date';
    }

    if (this.unfilledDates.some(d => d.getTime() === date.getTime())) {
      return 'unfilled-date';
    }

  }
  return '';
};
// Seleciona o dia no calendário
selectDay(date: Date | null): void {
  this.selectedDate = date;
  this.scheduledAgents = []; // Reseta a lista ao selecionar um novo dia
}



// Adiciona agente à escala
addToSchedule(agent: any): void {
  if(!this.scheduledAgents.some(a => a.id === agent.id)) {
  this.scheduledAgents.push(agent); // Adiciona se não estiver na lista
}
  }

// Remove agente da escala
removeFromSchedule(agent: any): void {
  this.scheduledAgents = this.scheduledAgents.filter(a => a.id !== agent.id);
}

  // Formata a data
  private formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
}
