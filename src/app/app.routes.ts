import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/main/auth/register/register.component';
import { LoginComponent } from './pages/main/auth/login/login.component';
import { ForgotPassComponent } from './pages/main/auth/forgot-pass/forgot-pass.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-pass', component: ForgotPassComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
    // canActivate: [AuthGuard],
  },
  {
    path: 'site',
    loadChildren: () => import('./pages/site/site.module').then((m) => m.SiteModule),
    // canActivate: [AuthGuard],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
