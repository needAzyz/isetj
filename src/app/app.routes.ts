import { Routes } from '@angular/router';
import { Test1 } from './test1/test1';
import { Home } from './home/home';
import { Etudiant } from './etudiant/etudiant';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'test1', component: Test1 },
  { path: 'etudiant', component: Etudiant }
];