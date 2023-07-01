import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/welcome/login/login.component';
import { SignupComponent } from './pages/welcome/signup/signup.component';

const routes: Routes = [
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'signup',
      component: SignupComponent,
    },
    {
      path: '',
      canActivate: [AuthGuard],
      loadChildren: () => import('./pages/app/user.module').then(model => model.UserModule),
    }
    // {
    //   path: '**',
    //   component: NotFoundComponent,
    // }
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
