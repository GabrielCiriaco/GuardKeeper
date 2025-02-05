import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { MenuComponent } from './screens/menu/menu.component';
import { AgentsComponent } from './screens/agents/agents.component';
import { PlacesComponent } from './screens/places/places.component';
import { AddPlacesComponent } from './screens/places/add-places/add-places.component';
import { ScheduleComponent } from './screens/schedule/schedule.component';
import { SetsScheduleComponent } from './screens/schedule/sets-schedule/sets-schedule.component';
import { EditPlacesComponent } from './screens/places/edit-places/edit-places.component';
import { AddAgentComponent } from './screens/agents/add-agent/add-agent.component';
import { EditAgentComponent } from './screens/agents/edit-agent/edit-agent.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
    children: [
      {
        path: '',
        redirectTo: 'agents',
        pathMatch: 'full',
      },
      {
        path: 'agents',
        component: AgentsComponent,
        // canActivate: [authGuard],
      },
      {
        path: 'agents/add',
        component: AddAgentComponent,
        // canActivate: [authGuard],
      },
      {
        path: 'agents/edit',
        component: EditAgentComponent,
        // canActivate: [authGuard],
      },
      {
        path: 'places',
        component: PlacesComponent,
        // canActivate: [authGuard],
      },
      {
        path: 'places/add',
        component: AddPlacesComponent,
        // canActivate: [authGuard],
      },
      {
        path: 'places/edit',
        component: EditPlacesComponent,
        // canActivate: [authGuard],
      },
      {
        path: 'schedules',
        component: ScheduleComponent,
        // canActivate: [authGuard],
      },
      {
        path: 'schedules/:location',
        component: SetsScheduleComponent
      },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
