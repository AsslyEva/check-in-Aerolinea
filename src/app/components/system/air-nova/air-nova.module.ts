import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirNovaRoutingModule } from './air-nova-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CheckInNovaComponent } from './check-in-nova/check-in-nova.component';
export const MY_FORMATS = {
  parse: { dateInput: 'DD/MM/YYYY' },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};



@NgModule({
  declarations: [
    CheckInNovaComponent
    
  ],
  imports: [
    CommonModule,
    AirNovaRoutingModule,
    SharedModule
  ]
})
export class AirNovaModule { }
