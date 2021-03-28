import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './Movies/movies-list/movies-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from '../app/material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { HomeComponent } from './home/home.component';
import { GenersListComponent } from './geners/geners-list/geners-list.component';
import { IndexactorsComponent } from './actors/indexactors/indexactors.component';
import { CreateGeneraComponent } from './geners/create-genera/create-genera.component';
import { MovietheatersindexComponent } from './movietheaters/movietheatersindex/movietheatersindex.component';
import { CreateMovietheatreComponent } from './moviestheaters/create-movietheatre/create-movietheatre.component';
import { CreateMovieComponent } from './Movies/create-movie/create-movie.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditMovietheatreComponent } from './movietheaters/edit-movietheatre/edit-movietheatre.component';
import { EditGeneraComponent } from './geners/edit-genera/edit-genera.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    NavbarComponent,
    RatingComponent,
    HomeComponent,
    GenersListComponent,
    IndexactorsComponent,
    CreateGeneraComponent,
    MovietheatersindexComponent,
    CreateMovietheatreComponent,
    CreateMovieComponent,
    EditActorComponent,
    EditMovietheatreComponent,
    EditGeneraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
