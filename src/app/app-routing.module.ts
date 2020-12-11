import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '@auth0/auth0-angular';
import {GridPublishersComponent} from './grid-publishers/grid-publishers.component';
import {GridPublishersWithGamesComponent} from './grid-publishers-with-games/grid-publishers-with-games.component';
import {VideogameFormComponent} from './videogame-form/videogame-form.component';
import {GridVideogamesComponent} from './grid-videogames/grid-videogames.component';
import {PublishersFormComponent} from './publishers-form/publishers-form.component';

const routes: Routes = [
  {
    path: '',
    component: GridPublishersWithGamesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'publishers',
    component: GridPublishersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'videogameForm',
    component: VideogameFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'videogameForm/:id',
    component: VideogameFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'publisherForm',
    component: PublishersFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'publisherForm/:id',
    component: PublishersFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'videogames',
    component: GridVideogamesComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
