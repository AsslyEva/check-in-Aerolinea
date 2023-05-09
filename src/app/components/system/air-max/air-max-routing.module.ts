import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckInMaxComponent } from './check-in-max/check-in-max.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: CheckInMaxComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirMaxRoutingModule { }
