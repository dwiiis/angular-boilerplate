import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';



@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: '',
        component: MainComponent,
        children: [
          {
            path: 'home', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
          },
          {
            path: 'table', loadChildren: () => import('./features/table-test/table-test.module').then(m => m.TableTestModule)
          }
        ]
      },
      {
        path: '', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
      },
    ],{ useHash: false, scrollPositionRestoration: 'enabled' } 
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
