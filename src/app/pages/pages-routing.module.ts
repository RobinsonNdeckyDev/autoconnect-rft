import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './main/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'proprietaire',
        loadChildren: () =>
          import('./proprietaire/proprietaire.module').then(
            (m) => m.ProprietaireModule
          ),
        // canActivate: [AuthGuard],
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
        // canActivate: [AuthGuard],
      },
    ],
  },
  { path: '', redirectTo: 'site', pathMatch: 'full' },
  { path: '**', redirectTo: 'site', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
