import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment as env } from '../environments/environment';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { SignupButtonComponent } from './components/signup-button/signup-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';
import {GridPublishersComponent} from './grid-publishers/grid-publishers.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthHttpInterceptor, AuthModule} from '@auth0/auth0-angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GridPublishersWithGamesComponent } from './grid-publishers-with-games/grid-publishers-with-games.component';
import { VideogameFormComponent } from './videogame-form/videogame-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginButtonComponent,
    SignupButtonComponent,
    LogoutButtonComponent,
    GridPublishersComponent,
    GridPublishersWithGamesComponent,
    AuthenticationButtonComponent,
    AuthNavComponent,
    GridPublishersWithGamesComponent,
    VideogameFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        allowedList: ['https://localhost:5001/*', 'https://vgdbnetcoreserver.azurewebsites.net/*']
      }
    }),
    ReactiveFormsModule,
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
