import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MenuService } from 'src/app/core/services/menu.service';

import { Agent } from 'src/app/core/models';
import { AgentsService } from 'src/app/core/services/agents.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {

  searchAgent: FormControl = new FormControl('');
  loadingAgents = false;
  agents: Array<Agent> = [];
  filteredAgents: Array<Agent> = [];

  constructor(
    private menuService: MenuService,
    private agentsService: AgentsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.menuService.enviarVariavel(3)
    this.loadingAgents = true;
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
    this.searchAgent.valueChanges.subscribe(
      (search: string) => {
        this.filteredAgents = this.agents.filter(
          (place: Agent) => place.name.toLowerCase().includes(search.toLowerCase())
        )
      })
  }

    addAgent() {
      this.router.navigate(['/menu/agents/add'])
    }

    editAgent(Agent: Agent) {
      this.router.navigate(['/menu/agents/edit'],{
        state: Agent
      })
    }

}
