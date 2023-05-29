import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodborneComponent } from './bloodborne/bloodborne.component';
import { CallOfDutyComponent } from './call-of-duty/call-of-duty.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CookiesComponent } from './cookies/cookies.component';
import { DarkSoulsComponent } from './dark-souls/dark-souls.component';
import { ErrorComponent } from './error/error.component';
import { GodOfWarComponent } from './god-of-war/god-of-war.component';
import { HaloComponent } from './halo/halo.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { TableComponent } from './table/table.component';
import { TerminosComponent } from './terminos/terminos.component';
import { TheLegendOfZeldaComponent } from './the-legend-of-zelda/the-legend-of-zelda.component';

const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'terminos', component: TerminosComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'privacidad', component: PrivacidadComponent },
  // { path: 'god-of-war', component: GodOfWarComponent},
  // { path: 'call-of-duty', component: CallOfDutyComponent },
  // { path: 'dark-souls', component: DarkSoulsComponent },
  // { path: 'pokemon', component: PokemonComponent },
  // { path: 'halo', component: HaloComponent },
  // { path: 'legend-of-zelda', component: TheLegendOfZeldaComponent },
  // { path: 'bloodborne', component: BloodborneComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SitesRoutingModule {}
