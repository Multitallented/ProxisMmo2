import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import {Login} from './login/login';
import {Profile} from './profile/profile';
import {Register} from './register/register';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'profile', component: Profile, canActivate: [authGuard]}
];
