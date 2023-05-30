import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { CookiesComponent } from './cookies/cookies.component';
import { ErrorComponent } from './error/error.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { TableComponent } from './table/table.component';
import { TerminosComponent } from './terminos/terminos.component';

const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'terminos', component: TerminosComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'privacidad', component: PrivacidadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SitesRoutingModule {}
