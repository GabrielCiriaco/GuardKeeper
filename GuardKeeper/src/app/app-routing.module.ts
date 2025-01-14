import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { MenuComponent } from './screens/menu/menu.component';
import { AgentsComponent } from './screens/agents/agents.component';
import { PlacesComponent } from './screens/places/places.component';
import { ScheduleComponent } from './screens/schedule/schedule.component';
import { SetsScheduleComponent } from './screens/schedule/sets-schedule/sets-schedule.component';

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
        path: 'places',
        component: PlacesComponent,
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
