import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about/testTP/about.html', component: About },
];
