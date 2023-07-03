import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShellComponent} from "./components/shell/shell.component";

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/application/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'app',
    component: ShellComponent,
    children: [
      {
        path: 'user',
        loadChildren: () => import('./modules/application/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'organisation',
        loadChildren: () => import('./modules/application/organisation/organisation.module').then(m => m.OrganisationModule)
      },
      {
        path: 'school',
        loadChildren: () => import('./modules/application/school/school.module').then(m => m.SchoolModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
