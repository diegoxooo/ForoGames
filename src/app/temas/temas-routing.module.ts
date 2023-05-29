import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTemaComponent } from './crear-tema/crear-tema.component';

const routes: Routes = [{
  path: 'tema/:id', component: CrearTemaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemasRoutingModule { }
