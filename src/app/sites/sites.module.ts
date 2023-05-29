import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitesRoutingModule } from './sites-routing.module';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { GodOfWarComponent } from './god-of-war/god-of-war.component';
import { CallOfDutyComponent } from './call-of-duty/call-of-duty.component';
import { DarkSoulsComponent } from './dark-souls/dark-souls.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { HaloComponent } from './halo/halo.component';
import { TheLegendOfZeldaComponent } from './the-legend-of-zelda/the-legend-of-zelda.component';
import { BloodborneComponent } from './bloodborne/bloodborne.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    TableComponent,
    GodOfWarComponent,
    CallOfDutyComponent,
    DarkSoulsComponent,
    PokemonComponent,
    HaloComponent,
    TheLegendOfZeldaComponent,
    BloodborneComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    SitesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
  ],
})
export class SitesModule {}
