import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment as env } from '../environments/environment';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { SignupButtonComponent } from './components/signup-button/signup-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';
import {GridProducersComponent} from './grid-producers/grid-producers.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthHttpInterceptor, AuthModule} from '@auth0/auth0-angular';


@NgModule({
  declarations: [
    AppComponent,
    LoginButtonComponent,
    SignupButtonComponent,
    LogoutButtonComponent,
    GridProducersComponent,
    AuthenticationButtonComponent,
    AuthNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        allowedList: ['https://localhost:5001/*', 'https://vgdbnetcoreserver.azurewebsites.net/*']
      }
    }),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
