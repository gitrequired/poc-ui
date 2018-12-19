import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { RecoverpasswordComponent } from "./recoverpassword/recoverpassword.component";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { SearchProviderComponent } from "./search-provider/search-provider.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'resetpassword', component: RecoverpasswordComponent},
  { path: 'home', component: HomeComponent},
  { path: 'search', component: SearchProviderComponent },
  { path: 'createUser', component: ProfileComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
