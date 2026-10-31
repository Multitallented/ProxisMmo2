import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import {Login} from './login/login';
import {Profile} from './profile/profile';
import {Register} from './register/register';
import {Starmap} from './starmap/starmap';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'map', component: Starmap },
  { path: 'profile', component: Profile, canActivate: [authGuard]}
];
