import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RespuestasRoutingModule } from './respuestas-routing.module';
import { RespuestasComponent } from './respuesta/respuestas.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RespuestasComponent,
  ],
  imports: [
    CommonModule,
    RespuestasRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class RespuestasModule { }
