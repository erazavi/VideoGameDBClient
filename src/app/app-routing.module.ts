import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticationButtonComponent} from './components/authentication-button/authentication-button.component';
import {AuthGuard} from '@auth0/auth0-angular';
import {GridProducersComponent} from './grid-producers/grid-producers.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationButtonComponent
  },
  {
    path: 'publishers',
    component: GridProducersComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
