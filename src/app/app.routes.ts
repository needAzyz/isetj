import { Routes } from '@angular/router';
import { Test1 } from './test1/test1';
import { Home } from './home/home';
import { Etudiant } from './etudiant/etudiant';
import { Signup } from './signup/signup';
import { Enseignant } from './enseignant/enseignant';
import { Exercice } from './exercice/exercice';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'test1', component: Test1 },
  { path: 'etudiant', component: Etudiant },
  { path: 'signup', component: Signup },
  { path: 'enseignant', component: Enseignant },
  { path: 'exercice', component: Exercice },

];