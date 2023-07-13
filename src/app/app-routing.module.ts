import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './sites/error/error.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./sites/sites.module').then((m) => m.SitesModule),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./sites/sites.module').then((m) => m.SitesModule),
  },
  {
    path: 'log',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'temas',
    loadChildren: () =>
      import('./temas/temas.module').then((m) => m.TemasModule),
  },
  {
    path: 'tema/:id',
    loadChildren: () =>
      import('./theme/theme.module').then((m) => m.ThemeModule),
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
