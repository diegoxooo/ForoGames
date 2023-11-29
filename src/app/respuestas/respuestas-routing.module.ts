import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RespuestasComponent } from './respuesta/respuestas.component';

const routes: Routes = [{ path: '', component: RespuestasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RespuestasRoutingModule { }
