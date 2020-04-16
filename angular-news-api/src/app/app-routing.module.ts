// @ts-ignore
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'logged-in', component: LoggedInComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user-info', component: UserInfoComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
