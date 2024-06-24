import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';
import { PhotographyComponent } from './camera/photography/photography.component';
import { VideographyComponent } from './camera/videography/videography.component';

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'home', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'videography', component: VideographyComponent },
];
