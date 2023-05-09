import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckInNovaComponent } from './check-in-nova/check-in-nova.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: CheckInNovaComponent,
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirNovaRoutingModule { }
