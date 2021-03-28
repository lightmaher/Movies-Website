import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { IndexactorsComponent } from './actors/indexactors/indexactors.component';
import { CreateGeneraComponent } from './geners/create-genera/create-genera.component';
import { EditGeneraComponent } from './geners/edit-genera/edit-genera.component';
import { GenersListComponent } from './geners/geners-list/geners-list.component';
import { HomeComponent } from './home/home.component';
import { CreateMovieComponent } from './Movies/create-movie/create-movie.component';
import { EditMovieComponent } from './Movies/edit-movie/edit-movie.component';

import { CreateMovietheatreComponent } from './moviestheaters/create-movietheatre/create-movietheatre.component';
import { EditMovietheatreComponent } from './movietheaters/edit-movietheatre/edit-movietheatre.component';
import { MovietheatersindexComponent } from './movietheaters/movietheatersindex/movietheatersindex.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'geners', component: GenersListComponent},
  {path: 'geners/create' , component: CreateGeneraComponent},
  {path: 'geners/edit/:id' , component: EditGeneraComponent},

  {path: 'actors', component: IndexactorsComponent},
  {path: 'actors/create' , component: CreateActorComponent},
  {path: 'actors/edit/:id' , component: EditActorComponent},

  {path: 'moviestheaters', component: MovietheatersindexComponent},
  {path: 'moviestheaters/create' , component: CreateMovietheatreComponent},
  {path: 'moviestheaters/edit/:id' , component: EditMovietheatreComponent},

  {path: 'movies/create' , component: CreateMovieComponent},
  {path: 'movies/edit/:id' , component: EditMovieComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
