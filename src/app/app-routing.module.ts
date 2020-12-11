import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticationButtonComponent} from './components/authentication-button/authentication-button.component';
import {AuthGuard} from '@auth0/auth0-angular';
import {GridPublishersComponent} from './grid-publishers/grid-publishers.component';
import {GridPublishersWithGamesComponent} from './grid-publishers-with-games/grid-publishers-with-games.component';
import {VideogameFormComponent} from './videogame-form/videogame-form.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationButtonComponent
  },
  {
    path: 'publishers',
    component: GridPublishersComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'publishersList',
    component: GridPublishersWithGamesComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'videogameForm',
    component: VideogameFormComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
