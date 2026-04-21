import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Aboutus } from './aboutus/aboutus';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'aboutus', component: Aboutus },
  { path: 'contact', component: Contact }
];
