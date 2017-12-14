import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsComponent } from './reports/reports.component';

const appRoutes: Routes = [
  { path: 'reports', component: ReportsComponent },
  { path: '', component: ReportsComponent, pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
