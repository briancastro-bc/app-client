import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: () => import('./components/public/home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./components/public/login/login.module').then(m => m.LoginModule) },
  { path: '404', loadChildren: () => import('./components/public/not-found/not-found.module').then(m => m.NotFoundModule) },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
