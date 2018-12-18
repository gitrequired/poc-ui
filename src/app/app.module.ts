import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RecoverpasswordComponent } from './recoverpassword/recoverpassword.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MenuComponent } from './menu/menu.component';
import { SearchProviderComponent } from './search-provider/search-provider.component';
import { ProfileComponent } from './profile/profile.component';
import { ProviderRegistrationComponent } from './provider-registration/provider-registration.component';

import { LoginService } from "./service/login.service";

import { HttpClientModule } from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    RecoverpasswordComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    MenuComponent,
    SearchProviderComponent,
    ProfileComponent,
    ProviderRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    LoginService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
