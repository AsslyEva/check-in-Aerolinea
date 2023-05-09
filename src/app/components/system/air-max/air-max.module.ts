import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirMaxRoutingModule } from './air-max-routing.module';
import { CheckInMaxComponent } from './check-in-max/check-in-max.component';
import { SharedModule } from '../../shared/shared.module';
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
    CheckInMaxComponent
  ],
  imports: [
    CommonModule,
    AirMaxRoutingModule,
    SharedModule,
  ]
})
export class AirMaxModule { }
