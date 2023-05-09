import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './angular-material.module';
import { PerfilFrameComponent } from './perfil-frame/perfil-frame.component';



@NgModule({
  declarations: [
    PerfilFrameComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
  ],

  exports:[
    AngularMaterialModule,
    PerfilFrameComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule { }
