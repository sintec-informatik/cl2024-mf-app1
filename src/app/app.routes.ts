import { Routes } from '@angular/router';
import {ContentComponent} from "./content/content.component";

export const routes: Routes = [
  { path: '', component: ContentComponent, pathMatch: 'full' },
];
